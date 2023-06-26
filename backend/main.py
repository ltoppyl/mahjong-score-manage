from fastapi import FastAPI
from fastapi.responses import JSONResponse
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
path = "path/to/dev.json"
cred = credentials.Certificate(path)
firebase_admin.initialize_app(cred)
db = firestore.client()


@app.get("/")
def root():
    return {"This is an API for managing mahjong scores!!"}


@app.get("/api/v1/get-records")
def get_record(userId: str):
    record_list = []

    # TODO: 3麻のデータ取得に対応する際には、gameTypeを引数に追加する
    docs = db.collection("user").document(userId).collection("four-player").stream()
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
