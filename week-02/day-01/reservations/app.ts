import { Reservation } from './reservations'

// push to an array
const rs = []
for (let i=0; i<10; i++) {
    rs.push(new Reservation())
}
// cool
console.log(
    rs.map(r=>r.toString()).join("\n")
)
