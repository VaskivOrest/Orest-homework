let firstNumber = '';
do {
    firstNumber = prompt('Введіть перше число:','').trim();
} while (firstNumber === '' || isNaN (firstNumber) || firstNumber === null);
let parsedFirst = parseInt(firstNumber);
console.log (parsedFirst);


let secondNumber = '';
do {
    secondNumber = prompt('Введіть друге число:','').trim();
} while (secondNumber === '' || isNaN (secondNumber) || secondNumber === null);
let parsedSecond = parseInt(secondNumber);
console.log (parsedSecond);
let skipEven = confirm('Чи потрібно пропускати парні числа?');


let sum = 0;
        for (i = parsedFirst; i <= parsedSecond; i ++) {
            if (skipEven && i % 2 === 0) {
                continue;
            }else {
                sum += i;    
    }
}
alert (`Сума: ${sum}`);