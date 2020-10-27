function solve(data) {
    let cars = {}
    for (const currentModel of data) {
        let [carMark, model, quantity] = currentModel.split(' | ');
        quantity = Number(quantity)
        if (!cars.hasOwnProperty(carMark)) {
            cars[carMark] = {}
        }
        if (cars[carMark].hasOwnProperty(model)) {
            cars[carMark][model] += +quantity
        }
        else if (!cars[carMark].hasOwnProperty(model)) {
            cars[carMark][model] = []
            cars[carMark][model].push(+quantity)
        }
    }

    for (let [key, value] of Object.entries(cars)) {
        console.log(key)
        for (const [first, second] of Object.entries(value)) {
            console.log(`###${first} -> ${second}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])