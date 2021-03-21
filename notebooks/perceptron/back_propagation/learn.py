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
        # проход по эпохам, в результате
        err = backprop(inp, out, synapses, lr)
        # выводим ошибку в консоль
        if not (epoch % err_print_frequency): print("Loss: ", str(err))
        # если ошибка меньше требуемой, то завершаем обучение
        if err < err_end_coef: break
