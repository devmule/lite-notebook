# Решаем строить дерево дальше или создать терминальный узел
def split(node,  # текущий узел
          max_depth,  # максимальная глубина дерева
          min_size,  # минимальное количество элементов в подвыборке
          depth  # текущая глубина дерева
          ):
    # если не было разделения - все элементы ушли в одну сторону
    if not node.left or not node.right:
        node.left = node.right = TerminalNode(node.left + node.right)
        return

    # если достигнута максимальная глубина, то строим терминальные узлы
    if depth >= max_depth:
        node.left = TerminalNode(node.left)
        node.right = TerminalNode(node.right)
        return

    # строим левое дочернее дерево
    if len(node.left) <= min_size:
        node.left = TerminalNode(node.left)
    else:
        node.left = get_split(node.left)
        split(node.left, max_depth, min_size, depth + 1)

    # строим правое дочернее дерево
    if len(node.right) <= min_size:
        node.right = TerminalNode(node.right)
    else:
        node.right = get_split(node.right)
        split(node.right, max_depth, min_size, depth + 1)


# построим дерево начиная от корневого узла
def build_tree(train, max_depth, min_size):
    root = get_split(train)
    split(root, max_depth, min_size, 1)
    return root
