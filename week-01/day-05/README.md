# Prototypes and Design Patterns

## Objectives

- Get an understanding of how the prototype works in JavaScript
- How inheritance works with prototypes
- How inheritance works with ES6

## Materials & Resources

### Prototype

| Material                                                                                                                                  |  Time |
| :---------------------------------------------------------------------------------------------------------------------------------------- | ----: |
| [Prototype basics - Object Creation in JavaScript P3](https://www.youtube.com/watch?v=YkoelSTUy7A)                                        | 19:18 |
| [Prototypes in JavaScript - FunFunFunction #16](https://www.youtube.com/watch?v=riDVvXZ_Kb4)                                              | 11:55 |
| [Prototypes in Javascript](https://www.youtube.com/watch?v=hS_WqkyUah8)                                                                   | 19:23 |
| READING                                                                                                                                   |       |
| [A Plain English Guide to JavaScript Prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/) |       |
| [JavaScript Prototype in Plain Language](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)                    |       |

### Inheritance ES6

| Material                                                                                                        | Time |
| :-------------------------------------------------------------------------------------------------------------- | ---: |
| [Classes and Inheritance ES6](https://www.youtube.com/watch?v=RBLIm5LMrmc)                                      | 7:36 |
| [Classes and Inheritance ES6 again](https://www.youtube.com/watch?v=S_8WrECd0PU)                                | 8:30 |
| READING                                                                                                         |      |
| [MDN to ES6 classes and inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) |      |

## Material Review

- Object.create()
- prototype
  - .isPrototypeOf()
  - .setPrototypeOf()
- prototype chain
- class
- inheritance
  - extends
  - super()

## Workshop

### Prototype

```javascript
function Car(km) {
  this.km = km;
}

Car.prototype.ride = function(km) {
  this.km += km;
};

const volvo = new Car(80000);
volvo.ride(120);
console.log(volvo.km); // 80120

// Let's mess with the km via introducing a new function on the Car prototype
// it will be available for the objects created from it
Car.prototype.hackKilometerClock = function() {
  this.km = 3;
};

volvo.hackKilometerClock();

//yay we can crank up the price :)
console.log(volvo.km); // 3
```

### Inheritance with ES6

```javascript
// create the inherited class

class Foods {
  constructor(sound) {
    this.sound = sound;
  }

  serve() {
    console.log(this.sound);
  }
}

// Pizza inherits Foods

class Pizza extends Foods {
  constructor(sound, price) {
    super(sound);
    this.price = price;
  }

  cost() {
    console.log(this.price);
  }
}

// let's fire it up and see how is it works

const firstPizza = new Pizza('Chew', 1000);

firstPizza.serve(firstPizza.sound);
firstPizza.cost();
```

#### Exercises

- [Green Fox](green-fox/js.md)
- [Garden App](garden-app/README.md)
- [Aircraft](aircraft-carrier/README.md)
