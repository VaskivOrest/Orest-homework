let firstNumber = '';
do {
    firstNumber = prompt('Введіть перше число:','');
} while (firstNumber === '' || firstNumber === NaN || firstNumber === null);
let parsedFirst = parseInt(firstNumber);
console.log (parsedFirst);


let secondNumber = '';
do {
    secondNumber = prompt('Введіть друге число:','');
} while (secondNumber === '' || secondNumber === NaN || secondNumber === null);
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




