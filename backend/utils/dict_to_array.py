def dict_to_array(dic: dict):
    return [{"id": k, **v} for k, v in dic.items()]
