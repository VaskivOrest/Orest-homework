class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = [5, 4, 4, 5];
        
    }
     getInfo () {
        return this.course + this.university + this.fullName
     }
     get studentMark () {
        return this.mark
     }
     set studentMark (mark) {
        this.mark.push(newMark)
     }
     getAverageMark() {
         return this.mark.reduce((a, b) => a + b, 0)/this.mark.length
     }
}
const slavik = new Student (' Будівельний коледж', '2 курс', ' Васьків Ярослав');

const newMark = 2;
console.log(slavik.getInfo(), slavik.studentMark);
slavik.studentMark = slavik.studentMark;
console.log(slavik.studentMark)
console.log(slavik.getAverageMark())