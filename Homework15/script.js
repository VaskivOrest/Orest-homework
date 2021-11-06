function* numberGenerator() {
    let i = 2;
    while (true) {
        yield Math.pow(i++, 2);
    }
}
const num = numberGenerator();
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);





