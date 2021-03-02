# Сделать предсказание по дереву
def predict(node,  # корневой узел в поддереве
            row  # строчка с параметрами объекта
            ):
    # если предикат даёт значение "истина"
    if row[node.criterion] < node.value:
        # пропускаем объект в правое дочернее поддерево
        if isinstance(node.right, InnerNode):
            return predict(node.right, row)
        if isinstance(node.right, TerminalNode):
            return node.right.class_val

    # если предикат даёт значение "ложь"
    else:
        # пропускаем объект в левое дочернее поддерево
        if isinstance(node.left, InnerNode):
            return predict(node.left, row)
        if isinstance(node.left, TerminalNode):
            return node.left.class_val
