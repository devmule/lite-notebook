from io import StringIO
import csv

# обучающая выборка
iris_learn_dataset = list(csv.reader(StringIO(iris_learn), delimiter=','))

# тестовая выборка
criterions = ["Длина чашелистника", "Ширина чашелистника", "Длина лепестка", "Ширина лепестка", "класс"]
iris_test_dataset = list(csv.reader(StringIO(iris_test), delimiter=','))

## настроить выборки
for dataset in [iris_learn_dataset, iris_test_dataset]:
    for row in dataset:
        for i in range(len(row) - 1):
            row[i] = float(row[i])  # перевести поля данных из текстового вида в цифры



# построить дерево
tree = build_tree(iris_learn_dataset, 1, 20)

# проверка для тестовой выборки
for row in iris_test_dataset:
    prediction = predict(tree, row)
    print("success" if row[-1] == prediction else "FAIL ожидалось " + row[-1] + ", получено", prediction)
