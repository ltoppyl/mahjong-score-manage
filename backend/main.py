from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

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

