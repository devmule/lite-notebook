import numpy as np

# создадим матрицу весов синапсов
synapses = np.array([
    [ 1, 2],  # матрица размером 2×3
    [ 0, 2],  # соединяет слои с размерами
    [-1, 1]   # 2 нейрона -> 3 нейрона
])
print("\nsynapses\n",  str(synapses))

# создадим вектор входных значений
input = np.array([0.5, 1])
print("\ninput\n", str(input))


# получим вектор неактивированных выходных значений,
# перемножив матрицу весов синапсов и вектор входных значений
inactivated = synapses.dot(input)
print("\ninactivated\n", str(inactivated))


# активируем полученные значения с помощью функции сигмоида
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

activated = sigmoid(inactivated)
print("\nactivated\n", str(activated), "\n")