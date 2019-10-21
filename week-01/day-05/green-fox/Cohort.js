const Person = require('./Person');

class Cohort extends Person {
  constructor(name) {
    super(name);
    this.students = [];
    this.mentors = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  addMentor(mentor) {
    this.mentors.push(mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

module.exports = Cohort;
