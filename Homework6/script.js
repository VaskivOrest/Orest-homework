const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];



  //1
  const getSubjects = (students) => {
    const arrSubject = Object.keys(students.subjects)
      .map((obj) => (obj.slice(0, 1).toUpperCase() + obj.slice(1).toLowerCase()).replace('_', ' '));
    return arrSubject;
  }
  console.log(getSubjects(students[2]));


  //2 
  const getAverageMark = (students) => {
    const studentMarkSubject = Object.values(students.subjects);
    const allStudentMark = studentMarkSubject.reduce((a, b) => a.concat(b));
    const sumMarks = allStudentMark.reduce((c, d) => c + d, 0) / allStudentMark.length;
   return +sumMarks.toFixed(2)
  };
  
  console.log(getAverageMark(students[1]))
  

  //3 
  const getStudentInfo = (students) => {
    return { Name: students.name, Course: students.course, averageMark: getAverageMark(students)
  }
}
  console.log (getStudentInfo(students[1]))


  //4
  const getStudentsNames = (students) => {
    return students.map((students) => students.name).sort();
  }
  console.log(getStudentsNames(students))


  //5
  const getBestStudent = (students) => {
    let bestStudent = students.reduce((acc, student) =>
      getAverageMark(acc) > getAverageMark(student) ? acc : student
    ).name;
    return bestStudent;
  };
  console.log (getBestStudent(students))


  //6
  const calculateWordLetters = (word) => {
    const result = {};
    const letters = word.toLowerCase().split('')
    .map(item => !result[item] ? result[item] = 1 : result[item]++);

  return result;
}
console.log (calculateWordLetters('aacccaaaabbba'))