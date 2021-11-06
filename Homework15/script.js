function* idGenerator() {
    let i = 1;
    while (true) {
        yield i++;
    }
}
const num = numberGenerator();
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);





