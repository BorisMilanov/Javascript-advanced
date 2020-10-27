function getFibonator() {
    let previous = 0;
    let current = 1;

    // return (() => {
    //     let newNumber = previous + current;
    //     previous = current;
    //     current = newNumber;

    //     return current;
    // })
    function fibonator(){
        let newNumber = previous + current;
        previous = current;
        current = newNumber;

        return previous;
    }

    return fibonator;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5