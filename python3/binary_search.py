import random


def binary_search(data, target, low, higt):
    if low > higt:
        return False

    mid = (low + higt) // 2
    if target == data[mid]:
        return True
    elif target < data[mid]:
        return binary_search(data, target, low, mid - 1)
    else:
        return binary_search(data, target, mid + 1, higt)


if __name__ == '__main__':
    data = [random.randint(0, 100) for i in range(10)]

    data.sort()

    print(data)

    target = int(input('what bunber woult you like to find?'))
    fount = binary_search(data, target, 0, len(data) - 1)
    print(fount)
