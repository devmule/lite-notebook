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


# один проход обратного распространения ошибки
def backprop(inp, out,  # пары входных - выходных значений в тензорах
             synapses,  # собсна, список синапсов
             lr=.1,  # коэффициент обучения
             ):

    # 1. прямой ход - расчёт сумматоров и значений нейронов, feedforward
    Si = [inp]  # неактивированные значения нейронов
    Xi = [sigmoid(inp)]  # активированые значения нейронов
    for i in range(len(synapses)):
        Si.append(np.dot(Xi[i], synapses[i]))
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

    # 4. возвращаем среднее значение ошибки Loss для выходного слоя
    return np.mean(np.abs(Ei[-1])) / 2


# цикличное обучение и условия завершения обучения
def learn(inp, out,  # пары входных - выходных значений
          synapses,  # список синапсов
          lr=.1,  # learning rate - коэффициент обучения
          epochs=10000,  # количество эпох
          err_end_coef=0,  # ошибка при достижении которой обучение завершается дострочно
          err_print_frequency=100,  # период вывода Loss
          ):

    # преобразовываем массивы обучающей выборки в numpy тензоры
    inp = np.array(inp)
    out = np.array(out)

    for epoch in range(epochs):
        # проход по эпохам, в результате прохода получаем ошибку
        err = backprop(inp, out, synapses, lr)
        # выводим ошибку в консоль
        if not (epoch % err_print_frequency): print("Loss: ", str(err))
        # если ошибка меньше требуемой, то завершаем обучение
        if err < err_end_coef: break
