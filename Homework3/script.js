//Функція #1
const getMaxDigit = (numeric) => {
    const arr = numeric.toString().split('').map(Number); 
        return (Math.max (...arr));
    } 

//Функція #2
const getPow = (number, pow) => {
    let result = number;
    for (i = 1; i < pow; i++) {
        result *= number;
    }
    return result;
}
console.log (getPow (5, 3));

//Функція #3
const fixedName = (name) => name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();


//Функція #4
const getBalanceAfterTax = (salary) => {
    return (salary - (salary * (19.5 / 100)))
}


//Функція #5
const getRandomNumber = (min, max) => {
    return (Math.floor((Math.random() * parseInt(max) ) + parseInt(min)))
}


//Функція #6
const countLetter = (letter, word) => {
let result = '';
for(let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === letter.toLowerCase()){
      result++;
    }
  }
return result;
}


//Функція #7
const convertCurrency = (money) => {
    if (money.includes('$')){
        return (parseInt(money) * 25) + 'UAH';
    }if (money.toUpperCase().includes('UAH')) {
        return (parseInt(money) / 25) + '$';
    }else {
        alert ('only $ or UAN');
        return 0;
    }
}
document.writeln(`
Функція №1: ${getMaxDigit (2586)}<br>
Функція №2: ${getPow (2, 3)}<br>
Функція №3: ${fixedName ('oRest')}<br>
Функція №4: ${getBalanceAfterTax (1000)}<br>
Функція №5: ${getRandomNumber (1, 10)}<br>
Функція №6: ${countLetter ('b',' bblablabla')}<br>
Функція №7: ${convertCurrency('25$')}</b>`); 
