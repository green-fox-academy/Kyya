# Infinite scroll

Implement the infinite scroll

## Preparation

Render random amount of `<div>` elements into the body.

- each of them must be 200px tall and 200px wide
- each of them should have different random background color
- the size must be set from a separated css file
- the color can be set from JavaScript - with inline style

## Exercises

- Define an explicit global `scrollThreshold` variable number value (eg.: 300)
- If the user scrolls down and reaches the `bottom - scrollThreshold` position:
  - Append 10 new `<div>` to the body with the same size and with random
    `background-color`
- Make this infinite - so if the user scrolls down again, then render new
  `<div>`-s again

## Optional

Add the same effect when the user scrolls up.

- When the user scrolls up and reaches the `top - scrollThreshold` position:
  - Add new `<div>`-s to the top of the document
