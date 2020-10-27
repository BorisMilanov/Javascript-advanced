function name(fruit,grams,price) {
    let gramsOf = +grams;
    let priceOf = +price;
    let result = gramsOf/1000 * priceOf;
    console.log(`I need $${result.toFixed(2)} to buy ${(gramsOf/1000).toFixed(2)} kilograms ${fruit}.`)
}
name('orange', 2500, 1.80)