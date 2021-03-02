from io import StringIO
import csv

criterions = ["Длина чашелистника", "Ширина чашелистника", "Длина лепестка", "Ширина лепестка", "класс"]
iris_dataset = list(csv.reader(StringIO(iris), delimiter=','))
for row in iris_dataset:
    for i in range(len(row) - 1):
        row[i] = float(row[i])

tree = build_tree(iris_dataset, 10, 5)
