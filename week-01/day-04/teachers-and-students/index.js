const Student = require('./Student')
const Teacher = require('./Teacher')

const s = new Student()
const t = new Teacher()

s.question(t)
t.teach(s)
