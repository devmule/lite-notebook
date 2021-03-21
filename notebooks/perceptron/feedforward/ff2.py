import numpy as np


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


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


# итеративно расчитаем значения всех слоёв до выходного слоя включительно
def feedforward(inp, synapses):
    li = inp  # первый слой - входной
    for synapse in synapses:
        li = sigmoid(synapse.dot(li))
    return li


# вектор входных значений
inp = np.array([0.5, 1])
out = feedforward(inp, synapses)

# распечатаем выходные значения - последний слой
print("\nactivated\n", str(out))
print("\n")
