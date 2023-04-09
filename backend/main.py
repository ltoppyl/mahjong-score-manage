from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from utils.create_random_id import create_random_id
from utils.dict_to_array import dict_to_array


class Record(BaseModel):
    userId: str
    date: str
    gameType: int
    rank: int
    rule: str
    score: int


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------

# Firebase の認証

# --------------------
cred = credentials.Certificate("path/to/serviceAccount.json")
firebase_admin.initialize_app(cred)
db = firestore.client()


@app.get("/")
def root():
    return {"This is an API for managing mahjong scores!!"}


@app.get("/api/v1/get-records")
def get_record(userId: str):
    db_dic = db.collection("user").document(userId).get()
    db_dic = db_dic.to_dict()
    record_list = dict_to_array(db_dic)
    rank_data = aggregate_rank(record_list)
    output = {"recordList": record_list, "rankData": rank_data}
    return output


@app.post("/api/v1/add-record")
async def add_record(record: Record):
    record_dict = record.dict()
    userId = record_dict.pop("userId")
    db_dic = db.collection("user").document(userId).get()
    db_dic = db_dic.to_dict()

    isIdExist = True
    while isIdExist:
        random_id = create_random_id()
        if random_id not in db_dic:
            isIdExist = False

    db_dic[random_id] = record_dict
    db.collection("user").document(userId).set(db_dic)

    return "success"
