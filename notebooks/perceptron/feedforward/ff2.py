import numpy as np

# матрицы синапсов
synapses = [
    np.array([
        [ 1, 2],
        [ 0, 2],  # 2 нейрона -> 3 нейрона
        [-1, 1]
    ]),
    np.array([
        [1,  2, -5],
        [0,  2,  3],  # 3 нейрона -> 4 нейрона
        [-10, 7, 3],
        [2,  9, -3]
    ]),
    np.array([
        [2, 6, -12, 5]  # 4 нейрона -> 1 нейрон
    ])
]

# вектор входных значений
input = np.array([0.5, 1])


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


# итеративно расчитаем значения всех слоёв до выходного слоя включительно
li = input  # первый слой - входной
for synapse in synapses:
    li = sigmoid(synapse.dot(li))

# распечатаем выходные значения - последний слой
print("\nactivated\n", str(li))
print("\n")
