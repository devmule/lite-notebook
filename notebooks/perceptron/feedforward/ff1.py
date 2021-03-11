import numpy as np

# создадим матрицу весов синапсов
synapses = np.array([
    [ 1, 2],
    [ 0, 2],
    [-1, 1]
])

# создадим вектор входных значений
input = np.array([0.5, 1])


# получим вектор неактивированных выходных значений,
# перемножив матрицу весов синапсов и вектор входных значений
inactivated = synapses.dot(input)


# активируем полученные значения с помощью функции сигмоида
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

activated = sigmoid(inactivated)


# распечатаем все матрицы и вектора
print("\nsynapses\n",  str(synapses))
print("\ninput\n", str(input))
print("\ninactivated\n", str(inactivated))
print("\nactivated\n", str(activated))
print("\n")