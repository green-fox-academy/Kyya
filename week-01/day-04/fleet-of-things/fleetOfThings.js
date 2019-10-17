'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

class FleetOfThings {

    constructor() {
        this.main()
    }
    main() {
        this.fleet = new Fleet();
        this.fleet.add(new Thing("Get milk"))
        this.fleet.add(new Thing("Remove the obstacles"))
        const t1 = new Thing("Stand up")

        t1.complete()
        const t2 = new Thing("Eat lunch")
        t2.complete()

        this.fleet.add(t1)
        this.fleet.add(t2)
    }

    print() {
        const things = this.fleet.getThings().map(
            (thing, index) => {
                return `${index+1}. [${thing.getCompleted()?'x':' '}] ${thing.getName()}`
            }
        )
        console.log(things.join('\n'))
    }
}
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
const ft = new FleetOfThings()
ft.print()
