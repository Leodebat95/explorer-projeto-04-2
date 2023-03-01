const students = [
  {
    name: "Pedro",
    gradeOne: 8.4,
    gradeTwo: 6.2,
  },
  {
    name: "Guilherme",
    gradeOne: 7.1,
    gradeTwo: 9.0,
  },
  {
    name: "Ana",
    gradeOne: 9.3,
    gradeTwo: 7.1,
  },
  {
    name: "Lucas",
    gradeOne: 5.5,
    gradeTwo: 4.3,
  },
  {
    name: "Isabela",
    gradeOne: 4.7,
    gradeTwo: 6.1,
  },
  {
    name: "Carolina",
    gradeOne: 8.8,
    gradeTwo: 7.7,
  },
]

//
//

function average(student) {
  return (((student.gradeOne + student.gradeTwo) / 2).toFixed(2))
}

for(let student of students) {
  if ((average(student)) >= 7) {
    alert(`${student.name} teve média ${(average(student))} e passou de ano.
          \nParabéns, ${student.name}!`)
  } else {  
    alert(`${student.name} teve média ${(average(student))} e não conseguiu passar.
          \nSe dedique e tudo dará certo, pois ainda teremos a recuperação.`)
  }
}

// Na palavra-reservada "alert()", o "\n" cria uma quebra de linha.
