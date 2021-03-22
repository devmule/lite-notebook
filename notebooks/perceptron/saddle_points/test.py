# seed для псевдослучайных чисел,
# чтобы при каждом запуске получался один и тот же результат
np.random.seed(2)

# генерируем случайные синапсы
synapses = [
    np.array([[1.0, 1.0],
              [1.0, 1.0]]),   # 2 нейрона  -> 2 нейрона
    np.array([[.5],
              [.5]])        # 2 нейрона -> 1 нейрон
]

# создаём обучающую выборку для функции XOR
inp = [[.5, .5], [0, .5], [.5, 0], [1, .5], [.5, 1]]
out = [[.5],     [1],     [0],     [1],     [0]    ]

# проводим обучение
learn(inp, out, synapses,
      epochs=10000,  # количество проходов по выборке
      lr=.5,  # коэффициент обучения
      err_print_frequency=100,  # период вывода Loss
      err_end_coef=0.001,  # ошибка при достижении которой обучение завершается дострочно
      )

# проводим тестирование
for i in range(len(inp)):
    print("получено: ", round(feedforward(inp[i], synapses)[0], 3), ", ожидалось: ", out[i])
