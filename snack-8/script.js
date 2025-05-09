const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

let whatClass;
students.find((curStudents) => {
  if (curStudents.name === 'Marco Lanci') {
    whatClass = curStudents.class
  } else {
    return "Classe non trovata"
  }
  return curStudents
})

console.log(whatClass)

