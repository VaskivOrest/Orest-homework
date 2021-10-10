//1
const getRandomArray = (length, min, max) => {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        randomArray.push(randomNumber);
    }
    return randomArray;
};

//3
const getAverage = (...numbers) => {
    return (numbers.filter((number) => Number.isInteger(number))
    .reduce((sum, number) => sum + number) / numbers.length);
};

//4
const getMedian = (...numbers) => {
    const arrNumbers = numbers
    .filter(number => Number.isInteger(number))
    .sort((a, b) => a - b);
    if (arrNumbers.length % 2) {
        return arrNumbers[Math.floor(arrNumbers.length / 2)];
    }else {
        return (arrNumbers[arrNumbers.length / 2] + arrNumbers[arrNumbers.length / 2 - 1]) / 2;
    } 
};

//5 
const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);

//6
const countPositiveNumber = (...numbers) => numbers.filter(number => number > 0).length;

//7
const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);



//#1
console.log (getRandomArray(10, 3, 30));
//#3
console.log (getAverage(1, 2, 3, 5, 10, 45));
//#4
console.log(getMedian(1, 3, 5, 7,));
//#5
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7));
//#6
console.log(countPositiveNumber(-1, 2, -6, -9, 10, 3, 6, 7));
//#7
console.log(getDividedByFive(10, 5, 43, 45, 55, 63, 2, 22));


