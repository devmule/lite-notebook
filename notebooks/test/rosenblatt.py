import numpy as np


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def deriv_sigmoid(x):
    fx = sigmoid(x)
    return fx * (1 - fx)


class Rumelhart:
    def __init__(self, layer_1, layer_2, *other_layers):
        # список слоёв и их размеров
        layers = [layer_1, layer_2] + list(other_layers)
        self._synapses = []
        self._biases = []
        for i in range(len(layers) - 1):
            # генерируются синапсы между уровнями нейронов, которые представляют из себя массив весов
            # матрица Аij, где i и j - размеры соединяемых слоёв, каждый вес - вес между каждым из нейронов
            # каждый нейрон связываем с каждым нейроном предыдущего слоя случайным значением
            self._synapses.append((2 * np.random.random((layers[i], layers[i + 1])) - 1))
            # генерируются сдвиги для каждого нейрона всех слоёв кроме первого
            # вектор Bi, где i - размер слоя. для каждого нейрона для всех слоёв кроме 1-го задаются случайные сдвиги
            self._biases.append((2 * np.random.random(layers[i + 1]) - 1))

    def feedforward(self, inp):
        """
        Функция прямого распространения.
        inp - список входных значений
        Возвращает выходные сигналы, соответствющие данному вводному набору.
        """
        li = np.array(inp)  # рассчитанный слой
        for i in range(len(self._synapses)):  # для каждого последующего
            # с использованием предыдущего слоя рассчитываются значения следующего
            li = sigmoid(np.dot(li, self._synapses[i]) + self._biases[i])
        return li.tolist()  # последний слой - выходной

    def learn(self, inp, out,
    epochs = 100000,
    learning_rate = .1,
    err_print = True,
    err_print_frequency = 10000):
        """
        Функция обучения.
        inp, out - списки входных и выходных значений соответственно. Количество элементов в списках должно совпадать.
        epochs (int) - количество проходов по спискам
        learn_coef (int) - коэфициент сдига весов при одном проходе
        err_print (Bool) - флаг, разрешение на вывод ошибки
        Изменяет веса для сети в соответствии с парами данных.
        """
        inp = np.array(inp)
        out = np.array(out)
        for epoch in range(epochs):

            # прямой ход - расчёт сумм и значений нейронов
            Si = [inp]  # суммы нейронов
            Xi = [sigmoid(Si[-1])]  # значения нейронов
            for i in range(len(self._synapses)):
                Si.append(np.dot(Xi[i], self._synapses[i]) + self._biases[i])
                Xi.append(sigmoid(Si[-1]))

            # перенос ошибки на скрытые слои
            Ei = [2 * (out - Xi[-1])]  # ошибки для всех кроме входного слоёв сети
            for i in range(len(Xi) - 2, 0, -1):  # проход по всем скрытым слоям
                # Ei = Ei+1 * Wi
                Ei.insert(0, Ei[0].dot(self._synapses[i].T))

            # расчёт дельт весов синапсов
            for i in range(len(self._synapses)):
                # E * deriv_sigmoid(Si)  скалярно значения между собой
                grad = Ei[i] * deriv_sigmoid(Si[i + 1])
                dw = Xi[i].T.dot(grad)
                self._synapses[i] += dw * learning_rate
                self._biases[i] += np.mean(grad, axis=0) * learning_rate

            # вывод ошибки при необходимости
            if err_print and (epoch % err_print_frequency) == 0:
                print("Err: ", str(np.mean(np.abs(Ei[-1]))/2))



class Rosenblatt:
    def __init__(self, l_inp, l_hid, l_out):
        self.ih_synapses = 2 * np.random.random((l_inp, l_hid)) - 1
        self.ho_synapses = 2 * np.random.random((l_hid, l_out)) - 1
        self.h_biases = 2 * np.random.random(l_hid) - 1
        self.o_biases = 2 * np.random.random(l_out) - 1

    def feedforward(self, inp):
        inp = np.array(inp)
        h_neurons = sigmoid(np.dot(inp, self.ih_synapses) + self.h_biases)
        return sigmoid(np.dot(h_neurons, self.ho_synapses) + self.o_biases).tolist()

    def learn(self,inp,out,epochs= 100000,learning_rate = .1,err_print = True,err_print_frequency = 10000):
        for epoch in range(epochs):
            # рассчитать значения слоёв прямым проходом
            li = np.array(inp)
            lh = sigmoid(np.dot(li, self.ih_synapses) + self.h_biases)
            lo = sigmoid(np.dot(lh, self.ho_synapses) + self.o_biases)

            # обучение проходит по следующей формуле:
            # d_Wij = learning_rate * Em * deriv_sigmoid(m) * L.T , где
            # d_Wij = величина, на которую необходимо сместить вес между нейронами i слоя L и j слоя M
            # learning_rate = коэффициент обучения
            # Em = ошибка значений нейронов слоя M, deriv_sigmoid(m) = производная функция в рассчитанных координатах
            # M * deriv_sigmoid(m) = градиент слоя M
            # L.T = транспонированная матрица рассчитанных значений нейронов предыдущего слоя L/
            err_o = 2 * (np.array(out) - lo)  # рассчёт значения ошибки выходного слоя
            d_lo = err_o * deriv_sigmoid(lo)  # рассчёт градиента выходного слоя

            err_h = d_lo.dot(self.ho_synapses.T)  # рассчёт значения ошибки скрытого слоя
            d_lh = err_h * deriv_sigmoid(lh)  # рассчёт градиента скрытого слоя

            self.ho_synapses += lh.T.dot(d_lo) * learning_rate  # сдвиг весов на нужное значение
            self.ih_synapses += li.T.dot(d_lh) * learning_rate
            self.o_biases += np.mean(d_lo, axis=0) * learning_rate
            self.h_biases += np.mean(d_lh, axis=0) * learning_rate
            if err_print and (epoch % err_print_frequency) == 0:
                print("Err: ", str(np.mean(np.abs(out - lo))/2))



np.random.seed(2)
rum = Rumelhart(2, 2, 1)
rum.learn(
    [[0, 0], [0, 1], [1, 0], [1, 1]],
    [[0],    [1],    [1],    [0]   ],
    learning_rate = .5,
    epochs = 10000,
    err_print_frequency = 100
)

def test(val, exp):
    print("get: ", round(val, 4), ", expected: ", exp)


test(rum.feedforward([0, 0])[0], 0)
test(rum.feedforward([0, 1])[0], 1)
test(rum.feedforward([1, 0])[0], 1)
test(rum.feedforward([1, 1])[0], 0)