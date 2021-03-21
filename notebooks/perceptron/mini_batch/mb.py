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


def learn(inp, out,
          synapses, biases,
          lr=.1,
          epochs=10000,
          err_end_coef=0,
          err_print_frequency=100,

          # добавляем параметр для обучения
          mini_batch_len=0,  # количество элементов в одном мини-пакете
          # если mini_batch_len <= 0, то разделения не мини-пакеты не произойдёт :)
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
