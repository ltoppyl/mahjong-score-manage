import random
import string
import time


def create_random_id():
    letters_and_digits = string.ascii_letters + string.digits
    seed_value = int(time.time())
    random.seed(seed_value)
    return "".join(random.choice(letters_and_digits) for i in range(30))
