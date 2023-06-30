from datetime import datetime, timezone, timedelta


def convert_to_timestamp(date_str: str) -> datetime:
    # 日付文字列をdatetimeオブジェクトに変換
    date_obj = datetime.strptime(date_str, "%Y/%m/%d %H:%M:%S")
    # タイムゾーンをJST（日本標準時）に設定（UTC+9:00）
    jst_tz = timezone(timedelta(hours=9))
    # JSTに変換
    jst_date_obj = date_obj.replace(tzinfo=jst_tz)
    return jst_date_obj


def convert_to_timestamp_start_day(date_str: str) -> datetime:
    # 日付文字列をdatetimeオブジェクトに変換
    date_obj = datetime.strptime(date_str, "%Y/%m/%d")
    # タイムゾーンをJST（日本標準時）に設定（UTC+9:00）
    jst_tz = timezone(timedelta(hours=9))
    # JSTに変換
    jst_date_obj = date_obj.replace(tzinfo=jst_tz)
    return jst_date_obj


def convert_to_timestamp_end_day(date_str: str) -> datetime:
    # 日付文字列をdatetimeオブジェクトに変換（0時0分0秒）
    start_date_obj = convert_to_timestamp_start_day(date_str)
    # 翌日の0時0分0秒を表すdatetimeオブジェクトを作成
    next_day_obj = start_date_obj + timedelta(days=1)
    # 1秒引いて翌日の0時0分0秒の1秒前（23時59分59秒）を表すdatetimeオブジェクトを作成
    end_date_obj = next_day_obj - timedelta(seconds=1)
    return end_date_obj


def convert_to_string(date_obj: datetime) -> str:
    # タイムゾーンをJST（日本標準時）に設定（UTC+9:00）
    jst_tz = timezone(timedelta(hours=9))
    # タイムゾーンをJSTに変換
    jst_date_obj = date_obj.astimezone(jst_tz)
    # 日付文字列に変換
    date_str = jst_date_obj.strftime("%Y/%m/%d %H:%M")
    return date_str
