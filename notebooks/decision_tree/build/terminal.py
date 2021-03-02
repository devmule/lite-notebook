# Создадим терминальный узел
def to_terminal(group):
    # достанем из выборки список классов
    outcomes = [row[-1] for row in group]
    # вернём наиболее часто встречающийся класс
    return max(set(outcomes), key=outcomes.count)
