// Exercise 1
const greeter = (myArray, counter) => {
    
    const greetText = 'Hello';
    for (const name of myArray){
        console.log(`${greetText} ${name}`)
    }

}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// Exercise 2
const capitalize = (str) => {

    const [first, ...after] = str;

    return `${first.toUpperCase()}${after.join('').toLowerCase()}`;

}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


// Exercise 3
const colors = ['red', 'blue', 'green'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);


// Exercise 4
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20)

console.log(filterLessThan20);


// Exercise 5
const numbers = [1, 2, 3, 4];

const calculateSum = numbers.reduce((sum, num) => sum + num, 0);
const calculateProduct = numbers.reduce((product, num) => product * num, 1);

console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6

class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model,year);
        this.balance = balance
    }

    info(){
        return `${this.model} has a balance of ${this.balance}`;
    }
}

const c = new Car('Pontiac Firebird', 1976);
const s = new Sedan('Volvo VD', 2018, 3000);

console.log(c.details());
console.log(s.info());