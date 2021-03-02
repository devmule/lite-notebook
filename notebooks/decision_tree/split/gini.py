# Расчитать индекс Джини для данного разделения
# эта реализация позволяет работать с любым количеством разделений
def gini_index(groups,  # список подвыборок
               classes  # список всех возможных классов
               ):
    # посчитать количество элементов в подвыборках
    total_samples = sum([len(group) for group in groups])

    # сумма индексов Джини для всех подвыборок
    gini = 0

    for group in groups:  # для каждой подвыборки

        group_size = len(group)

        if group_size == 0:
            # в случае, если подвыборка равна нулю, нет смысла считать
            # и чтобы избежать ошибки деления на ноль,
            # завершаем этот цикл, начинаем следующий
            continue

        # score - сумма квадратов пропорций
        score = 0

        for class_val in classes:
            # расчитываем в выборке пропорции для каждого класса
            class_count = [ob[-1] for ob in group].count(class_val)
            proportion = class_count / group_size
            # суммируем квадраты пропорции
            score += proportion * proportion

        # прибавляем индекс Джини для данной подвыборки
        # к итоговому значению индекса Джини
        gini += (1 - score) * (group_size / total_samples)

    return gini  # критерий джини для данного разделения
