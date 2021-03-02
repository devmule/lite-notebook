class TerminalNode:
    def __init__(self, group):
        # достанем из выборки список классов
        outcomes = [row[-1] for row in group]
        # записываем наиболее часто встречающийся класс
        self.class_val = max(set(outcomes), key=outcomes.count)
