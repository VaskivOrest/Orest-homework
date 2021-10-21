class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.recoverMarks = [];  
   };

   getInfo () {
      return this.course + this.university + this.fullName
   };

   get getMarks () {
     return this.marks
   };

   set setMark (mark) {
         if (mark >= 1 && mark <= 5 && this.marks !== null){
      this.marks.push(mark)
      } 
   };
   getAverageMark() {
      return this.marks.reduce((a, b) => a + b, 0)/this.marks.length
   };
   dismiss() {
      this.recoverMarks = this.marks;
      this.marks = null
   };
   recover() {
      this.marks = this.recoverMarks
   };

};

const orest = new Student (' НУ "Львівська політехніка"', '2 курс', ' Васьків Орест');
console.log(`Інформація про студента: ${orest.getInfo()}`);
console.log(`Оцінки студента: ${orest.getMarks}`);
orest.setMark = 5;
console.log(`Оцінки студениа після доставленої оцінки: ${orest.getMarks}`);
console.log(`Cередній бал студента: ${orest.getAverageMark()}`)
orest.dismiss();
console.log(`Після виключення у студента нема оцінок: ${orest.getMarks}`);
orest.setMark = 5;
console.log(`Ставити оцінки студенту також неможливо: ${orest.getMarks}`);
orest.recover();
console.log(`Після поновлення студента повертаються всі оцінки які були : ${orest.getMarks}`);

//Advance
class BudgetStudent extends Student {
   constructor(university, course, fullName) {
      super(university, course, fullName)
   }
};
const taras = new BudgetStudent (' ЛНУ ім.І.Франка', '4 курс', ' Taras');
console.log (taras.getInfo());