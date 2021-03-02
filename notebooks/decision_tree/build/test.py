# Print a decision tree
def print_tree(node, depth=0, prefix=""):
    # если внетренний узел, то напечатать его предикат
    # и печатать дочерние узлы рекурсивно
    if isinstance(node, InnerNode):
        print(depth * "\xa0", prefix, criterions[node.criterion], '<', node.value, "?")
        print_tree(node.right, depth + 1, "да ->")
        print_tree(node.left, depth + 1, "нет ->")

    # если терминальный узел, то напечатать его класс
    if isinstance(node, TerminalNode):
        print(depth * "\xa0", prefix, node.class_val)

# проверим реализацию на небольшом кусочке выборки из Ирисов Рональда Фишера
criterions = ["Длина чашелистника", "Ширина чашелистника", "Длина лепестка", "Ширина лепестка", "класс"     ]
dataset = [[  5.1,                  3.5,                    1.4,              0.2,              "setosa"    ],
           [  5.3,                  3.7,                    1.5,              0.2,              "setosa"    ],
           [  5.0,                  3.3,                    1.4,              0.2,              "setosa"    ],
           [  6.3,                  3.3,                    4.7,              1.6,              "versicolor"],
           [  5.8,                  2.7,                    3.9,              1.2,              "versicolor"],
           [  6.0,                  2.7,                    5.1,              1.6,              "versicolor"],
           [  6.7,                  3.3,                    5.7,              2.1,              "virginica" ],
           [  7.2,                  3.2,                    6.0,              1.8,              "virginica" ],
           [  5.9,                  3.0,                    5.1,              1.8,              "virginica" ]]


tree = build_tree(dataset, 3, 3)
print_tree(tree)