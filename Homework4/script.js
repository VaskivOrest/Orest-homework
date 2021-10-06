const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритм і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];



const getPairs = (students) => {
    const boys = [];
    const girls = [];
    const pairs = [];

   for (let i = 0;i < students.length; i++) {
      if (students[i].endsWith("а")){
        girls.push(students[i])
    }else {
        boys.push(students[i])
    };
};

    for (let i = 0; i < boys.length; i++) {
        pairs.push([girls[i], boys[i]]);
    }
    return pairs;
};




const getThemes = (pairs, themes) => {
    const themesPairs = pairs.map((pair, i) => [pairs[i].join(' і '), themes[i]]);
    return themesPairs;
};



const getStudentMark = (students, marks) => 
    students.map((item, i) => [students[i], marks[i]]);



const randomMarks = (min, max) => {
    return (Math.floor((Math.random() * parseInt(5) ) + parseInt(1)))
}

const getStudentsThemesMarks = (pairs, themes) => {
    const randomMarksPairs = pairs.map((pair, i) => [pairs[i].join(' і '), themes[i], randomMarks()]);
    return randomMarksPairs;
};

const pairs = getPairs(students);
const studentThemes = getThemes(pairs, themes);
const studentMark = getStudentMark(students, marks);
const studentsThemesMarks = getStudentsThemesMarks(pairs, themes);

console.log (pairs);
console.log (studentThemes);
console.log (studentMark);
console.log (studentsThemesMarks);
