def aggregate_rank(data_list):
    arr = [
        {"name": "1", "value": 0},
        {"name": "2", "value": 0},
        {"name": "3", "value": 0},
        {"name": "4", "value": 0},
    ]

    for data in data_list:
        arr[data["rank"] - 1]["value"] += 1

    return arr
