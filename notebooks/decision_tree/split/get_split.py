# Выбрать лучшее разбиение для датасета
def get_split(dataset):
    class_values = list(set(row[-1] for row in dataset))

    best_criterion = 0
    best_value = 0
    best_gini = 99999
    best_groups = None
    # пройтись по всем столбцам, кроме последнего
    # то есть, пройтись по всем критериям т.к. последний столбец - класс
    for index in range(len(dataset[0]) - 1):
        # пройтись по каждой строчке в выборке
        for row in dataset:
            # здесь мы проходим по каждому критерию каждого элемента выборки,
            # пробуем разделить выборку по выбранному критерию и расчитать его индекс Джини
            groups = test_split(index, row[index], dataset)
            gini = gini_index(groups, class_values)  # ! gini_index мы реализовали в предыдущей статье

            # если значение индекса Джини лучше чем у предыдущего разбиения,
            # то сохраняем его. Таким образом у нас в конце останется лучшее разбиение
            if gini < best_gini:
                best_criterion = index
                best_value = row[index]
                best_gini = gini
                best_groups = groups

    # возвращаем лучшее разбиение и его предикат
    return best_criterion, best_value, best_groups
