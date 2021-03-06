test_dataset = [[5.1, 3.5, 1.4, 0.2, "setosa"],
                [7.2, 3.2, 6.0, 1.8, "virginica"],
                [6.0, 2.7, 5.1, 1.6, "versicolor"],
                [5.9, 3.0, 5.1, 1.8, "неизвестно"]]

for row in test_dataset:
    prediction = predict(tree, row)
    print('ожидалось:', row[-1], ', получено:', prediction)
