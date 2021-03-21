# один проход обратного распространения ошибки
def backprop(inp, out,
             synapses, biases,  # список синапсов и смещений
             lr=.1,
             ):
    # 1. прямой ход - расчёт сумматоров и значений нейронов, feedforward
    Si = [inp]  # неактивированные значения нейронов
    Xi = [sigmoid(inp)]  # активированые значения нейронов
    for i in range(len(synapses)):
        # прибавляем нейроны смещения к нейктивированным нейронам,
        # после активируем полученную сумму
        Si.append(np.dot(Xi[i], synapses[i]) + biases[i])
        Xi.append(sigmoid(Si[-1]))

    # 2. перенос ошибки на скрытые слои
    Ei = [2 * (out - Xi[-1])]
    for i in range(len(Xi) - 2, 0, -1):
        Ei.insert(0, Ei[0].dot(synapses[i].T))

    # 3. расчёт изменений для синапсов
    for i in range(len(synapses)):
        grad = Ei[i] * deriv_sigmoid(Si[i + 1])
        dw = Xi[i].T.dot(grad)
        synapses[i] += dw * lr
        # расчитываем изменения для смещений,
        # для этого просто находим среднее значение смещений синапсов
        # для каждого нейрона и перемножаем на коэфициент обучения
        biases[i] += np.mean(grad, axis=0) * lr

    # 4. возвращаем среднее значение ошибки Loss для выходного слоя
    return np.mean(np.abs(Ei[-1])) / 2
