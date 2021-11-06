class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = [5, 4, 4, 5];
        this.isActive = true;  
   }

   getInfo () {
      return this.course + ' ' + this.university + ' ' + this.fullName;
   }

   get marks () {
      if (this.isActive) {
         return this.studentMarks;
      } else {
         return null;
      }
   }

   set marks (mark) {
      if (!this.isActive) {
         return null;
      } else {
         this.studentMarks.push(mark);
         return this.studentMarks;
      }
   }
   getAverageMark() {
      return this.marks.reduce((a, b) => a + b, 0)/this.marks.length;
   }
   dismiss() {
      this.isActive = false;
   }
   recover() {
      this.isActive = true;
   }

}

const orest = new Student ('НУ "Львівська політехніка"', '2 курс', 'Васьків Орест');
console.log(`Інформація про студента: ${orest.getInfo()}`);
console.log(`Оцінки студента: ${orest.marks}`);
orest.marks = 5;
console.log(`Оцінки студениа після доставленої оцінки: ${orest.marks}`);
console.log(`Cередній бал студента: ${orest.getAverageMark()}`)
orest.dismiss();
console.log(`Після виключення у студента нема оцінок: ${orest.marks}`);
orest.setMark = 5;
console.log(`Ставити оцінки студенту також неможливо: ${orest.marks}`);
orest.recover();
console.log(`Після поновлення студента повертаються всі оцінки які були : ${orest.marks}`);

//Advance
class BudgetStudent extends Student {
   constructor(university, course, fullName) {
      super(university, course, fullName)
   }
};
const taras = new BudgetStudent ('ЛНУ ім.І.Франка', '4 курс', 'Taras');
console.log (taras.getInfo());