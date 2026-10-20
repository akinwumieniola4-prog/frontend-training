// step 1
const student = {
    name: "Eniola the star boy",
    age: 17,
    course: "Frontend",
};
// step 2
function showStudent(student) {
  console.log("Name:", student.name)
  console.log("Age:", student.age)
  console.log("Course:", student.course)
}
showStudent(student);
console.log(student.name)
console.log(student.course)
console.log(student.age)

// step 3
const updatedStudent = {
  ...student,
  course: "Frontend",
  level: 100
}
showStudent(updatedStudent)
// step 4
const subjects = [
  "HTML",
  "CSS",
  "JavaScript"
];
const moreSubjects = [
  ...subjects,
  "React",
  "Git"
];
console.log("Original subjects:", subjects)
console.log("New subjects:", moreSubjects)


// step5
const finalStudent = {
  ...updatedStudent,
  subjects: moreSubjects
}

console.log(finalStudent)


