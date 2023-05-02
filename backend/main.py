import os
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from utils.cal_point import cal_point
from utils.aggregate_rank import aggregate_rank


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
load_dotenv()
if os.getenv("APP_ENV") == "dev":
    path = "path/to/dev.json"
else:
    path = "path/to/production.json"
cred = credentials.Certificate(path)
firebase_admin.initialize_app(cred)
db = firestore.client()


@app.get("/")
def root():
    return {"This is an API for managing mahjong scores!!"}


@app.get("/api/v1/get-records")
def get_record(userId: str):
    record_list = []
    docs = db.collection("user").document(userId).collection("result").stream()
    for doc in docs:
        record_dic = doc.to_dict()
        record_dic["id"] = doc.id
        record_list.append(record_dic)

    rank_data = aggregate_rank(record_list)
    output = {"recordList": record_list, "rankData": rank_data}
    return output


@app.post("/api/v1/add-record")
async def add_record(record: Record):
    record_dict = record.dict()
    userId = record_dict.pop("userId")
    record_dict["point"] = cal_point(record_dict["score"], record_dict["rank"])

    db.collection("user").document(userId).collection("result").document().set(record_dict)

    return "success"


@app.post("/api/v1/add-user")
async def add_user(userId: str):
    user_ref = db.collection("user").document(userId)  # ドキュメント参照を生成

    # ドキュメントが存在しない場合のみドキュメントを追加
    if not user_ref.get().exists:
        user_ref.set({})

    return "success"
