from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
from typing import Optional

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from utils.cal_point import cal_point
from utils.aggregate_rank import aggregate_rank
from utils.timestamp import (
    convert_to_timestamp,
    convert_to_timestamp_start_day,
    convert_to_timestamp_end_day,
    convert_to_string,
)


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
path = "path/to/dev.json"
cred = credentials.Certificate(path)
firebase_admin.initialize_app(cred)
db = firestore.client()


@app.get("/")
def root():
    return {"This is an API for managing mahjong scores!!"}


@app.get("/api/v1/get-records")
def get_record(
    userId: str,
    gameType: Optional[int] = 4,
    startDate: Optional[str] = None,
    endDate: Optional[str] = None,
):
    record_list = []

    if gameType == 4:
        collection_ref = (
            db.collection("user").document(userId).collection("four-player")
        )
    elif gameType == 3:
        collection_ref = (
            db.collection("user").document(userId).collection("three-player")
        )
    else:
        return JSONResponse(status_code=422, content={"message": "Invalid gameType"})

    # startDateとendDateが両方指定されている場合のみ日付フィルタリングを行う
    if startDate is not None and endDate is not None:
        start_datetime = convert_to_timestamp_start_day(startDate)
        end_datetime = convert_to_timestamp_end_day(endDate)
        docs = (
            collection_ref.where("date", ">=", start_datetime)
            .where("date", "<=", end_datetime)
            .stream()
        )
    else:
        docs = collection_ref.stream()

    for doc in docs:
        record_dic = doc.to_dict()
        record_dic["id"] = doc.id
        record_dic["date"] = convert_to_string(record_dic["date"])
        record_list.append(record_dic)

    rank_data = aggregate_rank(record_list)
    output = {"recordList": record_list, "rankData": rank_data}
    return output


@app.post("/api/v1/add-record")
async def add_record(record: Record):
    record_dict = record.dict()
    userId = record_dict.pop("userId")
    record_dict["point"] = cal_point(record_dict["score"], record_dict["rank"])
    record_dict["date"] = convert_to_timestamp(record_dict["date"])

    if record_dict["gameType"] != 4 and record_dict["gameType"] != 3:
        return JSONResponse(status_code=422, content={"message": "Invalid gameType"})

    if record_dict["gameType"] == 4:
        doc_ref = (
            db.collection("user").document(userId).collection("four-player").document()
        )
        doc_ref.set(record_dict)
        doc_id = doc_ref.id
    elif record_dict["gameType"] == 3:
        doc_ref = (
            db.collection("user").document(userId).collection("three-player").document()
        )
        doc_ref.set(record_dict)
        doc_id = doc_ref.id

    return doc_id


@app.post("/api/v1/add-user")
async def add_user(userId: str):
    user_ref = db.collection("user").document(userId)  # ドキュメント参照を生成

    # ドキュメントが存在しない場合のみドキュメントを追加
    if not user_ref.get().exists:
        user_ref.set({})

    return "success"


@app.put("/api/v1/update-record")
def update_record(record: Record, recordId: str):
    record_dict = record.dict()
    userId = record_dict.pop("userId")
    record_dict["point"] = cal_point(record_dict["score"], record_dict["rank"])

    if record_dict["gameType"] != 4 and record_dict["gameType"] != 3:
        return JSONResponse(status_code=422, content={"message": "Invalid gameType"})
    elif record_dict["gameType"] == 4:
        doc_ref = (
            db.collection("user")
            .document(userId)
            .collection("four-player")
            .document(recordId)
            .set(record_dict)
        )
        doc_id = doc_ref.id

    elif record_dict["gameType"] == 3:
        doc_ref = (
            db.collection("user")
            .document(userId)
            .collection("three-player")
            .document(recordId)
            .set(record_dict)
        )
        doc_id = doc_ref.id

    return doc_id
