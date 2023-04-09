def aggregate_rank(data_list):
    dic = {}
    for data in data_list:
        if data["rank"] not in dic:
            dic[data["rank"]] = 1
        else:
            dic[data["rank"]] += 1
    return dic
