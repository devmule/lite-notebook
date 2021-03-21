def feedforward(inp, synapses, biases):
    li = inp  # первый слой - входной
    for i in range(len(synapses)):
        # прибавляем нейроны смещения к нейктивированным нейронам,
        # после активируем полученную сумму
        li = sigmoid(synapses[i].dot(li) + biases[i])
    return li
