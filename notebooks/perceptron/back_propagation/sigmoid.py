# подключаем библиотеку для работы с матрицами
import numpy as np


# функция прямого распространения сигнала
def feedforward(inp, synapses):
    li = inp  # первый слой - входной
    for synapse in synapses:
        li = sigmoid(np.dot(li, synapse))
    return li


# функция сигмоиды
def sigmoid(x):
    return 1 / (1 + np.exp(-x))


# производная сигмоиды
def deriv_sigmoid(x):
    fx = sigmoid(x)
    return fx * (1 - fx)
