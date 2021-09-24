const vegetables = 15.678;
const meat = 123.965;
const fish = 90.2345;
console.log(vegetables, meat, fish);

const maxPrice = Math.max(vegetables, meat, fish);
console.log(maxPrice);
const minPrice = Math.min(vegetables, meat, fish);
console.log(minPrice);

const productSum = (vegetables + meat + fish);
console.log(productSum);

const integerVegetables = Math.trunc (vegetables);
const integerMeat = Math.trunc(meat);
const integerFish = Math.trunc(fish);
console.log(integerVegetables, integerMeat, integerFish);

const integerSum = integerVegetables + integerMeat + integerFish;
console.log(integerSum);

const roundToHundreds = (Math.round(integerSum / 100) * 100);
const sumEven = (integerSum % 2 == 0);
const rest = (500 - productSum);

const averageValue = ((productSum / 3).toFixed(2));
const discount = +(Math.random() * 101).toFixed(0);
console.log(discount);

const paymentFfterDiscount = (productSum - ((discount/100) * productSum)).toFixed(2);
console.log(paymentFfterDiscount);
const income = (productSum / 2 - (productSum * (discount / 100)));
console.log(income);

const advanced = `Максимальна ціна: ${maxPrice};<br />
Мінімальна ціна: ${minPrice};<br />
Сума всіх товарів: ${productSum};<br />
Сума товарів після округлення: ${integerSum};<br />
Округлення до сотень: ${roundToHundreds};<br />
Булеве значення: ${sumEven};<br />
Сума решти з 500 грн: ${rest};<br />
Середнє значення цін округлене до 2-го знаку: ${averageValue};<br />
Рандомна знижка: ${discount};<br />
Оплата клієнта після знижки: ${paymentFfterDiscount};<br />
Чистий прибуток: ${income};<br />`;
document.writeln (advanced);










