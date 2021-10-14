const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };



//1
const getMyTaxes = function(salary) {
    return this.tax * salary;
};

console.log (getMyTaxes.call(latvia, 1000));



//2
const getMiddleTaxes = function() {
    return this.tax * this.middleSalary;
};

console.log (getMiddleTaxes.call(litva));



//3
const getTotalTaxes = function() {
    return this.tax * this.middleSalary * this.vacancies;
};

console.log (getTotalTaxes.call(litva))



//4
const getMeSalary = function (country) {
    const salary = Math.random () * (2000 - 1500) + 1500;
    return {
        salary: salary.toFixed(1),
        taxes: (this.tax * salary).toFixed(1),
        profit: (salary - (this.tax * salary)).toFixed(1),
    }
};

setInterval(() => console.log (getMeSalary.call(ukraine)), 10000);