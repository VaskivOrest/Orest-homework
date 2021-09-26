let firstNumber = '';
do {
    firstNumber = prompt('Введіть перше число:','');
} while (firstNumber === '' || isNaN (firstNumber) || firstNumber === null);
let parsedFirst = parseInt(firstNumber);
console.log (parsedFirst);


let secondNumber = '';
do {
    secondNumber = prompt('Введіть друге число:','');
} while (secondNumber === '' || isNaN(secondNumber) || secondNumber === null);
let parsedSecond = parseInt(secondNumber);
console.log (parsedSecond);
const skipEven = confirm('Чи потрібно пропускати парні числа?');


let sum = 0;
    if (skipEven){
        for (i = parsedFirst; i <= parsedSecond; i ++) {
            sum += i % 2 ===0 ? 0 : i;
        }
    }else {
        for (i = parsedFirst; i <= parsedSecond; i++) {
            sum += i;
        }
    }
alert (`Сума: ${sum}`);




