from io import StringIO
import csv

# обучающая выборка
titanic_learn_dataset = list(csv.reader(StringIO(titanic_learn), delimiter=','))

# тестовая выборка
titanic_test_dataset = list(csv.reader(StringIO(titanic_test), delimiter=','))