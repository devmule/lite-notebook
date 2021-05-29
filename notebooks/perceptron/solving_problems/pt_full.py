# подключаем библиотеку для работы с матрицами
import numpy as np


# функция сигмоиды
def sigmoid(x):
    return 1 / (1 + np.exp(-x))


# производная сигмоиды
def deriv_sigmoid(x):
    fx = sigmoid(x)
    return fx * (1 - fx)


# функция прямого распространения сигнала
def feedforward(inp, synapses, biases):
    li = inp  # первый слой - входной
    for i in range(len(synapses)):
        # прибавляем нейроны смещения к нейктивированным нейронам,
        # после активируем полученную сумму
        li = sigmoid(synapses[i].dot(li) + biases[i])
    return li


# один проход обратного распространения ошибки
def backprop(inp, out,  # пары входных - выходных значений в тензорах
             synapses, biases,  # собсна, список синапсов и смещений
             lr=.1,  # коэффициент обучения
             ):
    # 1. прямой ход - расчёт сумматоров и значений нейронов, feedforward
    Si = [inp]  # неактивированные значения нейронов
    Xi = [sigmoid(inp)]  # активированые значения нейронов
    for i in range(len(synapses)):
        # расчитываем неактивированные значений нейронов,
        # сохраняем их в массиве Si
        Si.append(np.dot(Xi[i], synapses[i]) + biases[i])
        # получаем активированные значения и сохраняем их
        # в массиве Xi
        Xi.append(sigmoid(Si[-1]))

    # 2. перенос ошибки на скрытые слои
    Ei = [2 * (out - Xi[-1])]  # Loss на выходном слое
    # передаём Loss в обратном направлении
    for i in range(len(Xi) - 2, 0, -1):
        # значения функции ошибки передаются по синапсам
        # Ei = Ei+1 * Wi
        # записываем значение в начало списка ошибок
        Ei.insert(0, Ei[0].dot(synapses[i].T))

    # 3. расчёт изменений для синапсов
    for i in range(len(synapses)):
        # перемножаем скалярно значения ошибки слоя с производной от сигмоиды
        grad = Ei[i] * deriv_sigmoid(Si[i + 1])
        # перемножаем значения предыдущего слоя с градиентом текущего слоя,
        # таким образом находим величину на которую нужно сместиться,
        # чтобы избавиться от ошибки
        dw = Xi[i].T.dot(grad)
        # применяем изменение к синапсам, но не полностью, чтобы не переписать
        # предыдущий опыт
        synapses[i] += dw * lr
        # расчитываем изменения для смещений,
        # для этого просто находим среднее значение смещений синапсов
        # для каждого нейрона и перемножаем на коэфициент обучения
        biases[i] += np.mean(grad, axis=0) * lr

    # 4. возвращаем среднее значение ошибки Loss для выходного слоя
    return np.mean(np.abs(Ei[-1])) / 2


# разделяем выборку на мини-пакеты
def get_mini_batches(inp, out, size):
    mini_batches = []  # мини-пакеты
    # если size > 0, то разделяем пакет на мини-пакеты
    while len(inp) > size > 0:
        # закидываем кортеж мини-пакет (inp, out)
        mini_batches.append((np.array(inp[:size]), np.array(out[:size])))
        # сокращаем массивы
        inp = inp[size:]
        out = out[size:]
    # в конце закидываем остатки (или весь пакет, если size <= 0)
    mini_batches.append((np.array(inp), np.array(out)))
    # возвращаем мини-пакеты
    return mini_batches


# цикличное обучение и условия завершения обучения
def learn(inp, out,  # пары входных - выходных значений
          synapses, biases,  # список синапсов и смещений
          lr=.1,  # learning rate - коэффициент обучения
          epochs=10000,  # количество эпох
          err_end_coef=0,  # ошибка при достижении которой обучение завершается дострочно
          err_print_frequency=100,  # период вывода Loss
          mini_batch_len=0,  # количество элементов в одном мини-пакете
          ):
    # разделяем выборку на мини-пакеты
    mini_batches = get_mini_batches(inp, out, mini_batch_len)

    # проход по эпохам
    for epoch in range(epochs):

        err = 0
        # проход по мини-пакетам, в результате прохода получаем ошибку
        for input, output in mini_batches:
            err += backprop(input, output, synapses, biases, lr)
        # делаем из суммы ошибок среднее значение
        # для этого просто поделим сумму ошибок на количество мини-пакетов
        err /= len(mini_batches)

        # выводим ошибку в консоль при необходимости
        if not (epoch % err_print_frequency): print("Loss: ", str(err))
        # если ошибка меньше требуемой, то завершаем обучение
        if err < err_end_coef: break
