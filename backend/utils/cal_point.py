def cal_point(score: int, rank: int):
    # v1.0 ではMリーグルール・4麻にのみに対応しているため、それに合わせた算出を行う
    point = (score - 30000) / 1000  # 素点の計算
    if rank == 1:
        point += 50
    elif rank == 2:
        point += 10
    elif rank == 3:
        point -= 10
    elif rank == 4:
        point -= 30
    return round(point, 1)
