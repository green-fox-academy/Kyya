# Zoo

We are going to represent a Zoo. The animals are cuter than humans, so let's
focus on them right now.

So we need an abstract `Animal` class

- it has `name`, `age` field
- it has `getName()` and `breed()` methods

Have we got all fields and methods we should? What about gender? Any other?
Write down at least 3 fields and/or methods that should be included in `Animal`.

Let's think about the kinds of animals `Mammal`s, `Reptile`s, `Birds`s etc. We
need to define specific fields and methods for each. For example every `Bird`
`breed()` from an egg, doesn't matter if it is a penguin or parrot or ostrich.
Write down at least 2 of field and/or method what is common in each kind.

Most of the `Reptile`s `breed()` by laying eggs too, it is common with `Bird`s.

Create the project and the classes above.

The Zoo app should be invoked by the following example code outside of the
`animals` package:

```typescript
const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
```

We expect the following output:

```text
How do you breed?
A Crocodile is breeding by laying eggs.
A Koala is breeding by pushing miniature versions out.
A Parrot is breeding by laying eggs.
```
