const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритм і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];


const getPairs = (students) => [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
console.log (getPairs(students));

const getStudentsThemes = (students, themes) => [[students[0] + ' i ' + students[2], themes[1]], [students[1] + ' i ' + students[3], themes[0]], [students[4] + ' i ' + students[5], themes[2]]];
console.log (getStudentsThemes(students, themes));

const getMarks = (students, marks) => [[students[0], marks[0]], [students[1],marks[1]], [students[2],marks[2]], [students[3],marks[3]], [students[4],marks[4]], [students[5],marks[5]]];
console.log (getMarks(students, marks));

const randomMarks = (min, max) => {
    return (Math.floor((Math.random() * parseInt(max) ) + parseInt(min)))
}
const getStudentsThemesMarks = (students, themes) => [[students[0] + ' i ' + students[2], themes[1], randomMarks(1, 5)], [students[1] + ' i ' + students[3], themes[0], randomMarks(1, 5)], [students[4] + ' i ' + students[5], themes[2], randomMarks(1, 5)]];
console.log (getStudentsThemesMarks(students, themes));



