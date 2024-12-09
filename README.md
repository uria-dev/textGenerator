# Text generator

This is a simple text generator that uses [Webpack](https://webpack.js.org/) to bundle, [Tailwind CSS](https://tailwindcss.com/), and [Jest](https://jestjs.io/) for testing.

## How do I run this?

Simply install all dependencies using `npm i -y`, then you can use a few specific commands from the CLI.

If you want to check this out on your local environment, use `npm run start` - this will initialise a locally hosted web server.

If you want to see that the tests really did pass, use `npx jest` or `npm test` - both will run Jest.

## How does the text get randomly generated?

We're using `Math.random` - this is actually a _pseudo-random_ method, but it will do for the purposes of this simple web app.
Once the value is generated, we use the `toString()` method to convert the number generated to any [radix](https://en.wikipedia.org/wiki/Radix) point. Using `subString()`, we ignore the float and start counting from the second character.

We're using 36 as an argument, which means that any radix character from `a` through `z` (**lowercase only**) and from `0` to `9` can be used.

So for example:

```js
let randomNum = Math.random()
// in this case, randomNum return 0.5554456356429547, but you will naturally generate something else if you run this locally.
randomNum = randomNum.toStrin(36)
// randomNum is now `0.jzuvdk9xj9f`
randomNum = randomNum.substring(2)
// randomNum is now jzuvdk9xj9f
```

This repeats until the string generated is at least 16 characters long.

A simple event listener added to the button replaces the `textContent` of the element below.

## How do the tests work?

There are two tests that are run. We want to check:

### 1. Are the values generated actually unique?

To check whether the values are really unique, we utilise a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). Since a set, by definition, can only have unique items (and is very efficient in data retrieval operations), we can use the following logic:

```
Create a set
Number of tests desired = 1000

Generate a new value
Check whether the value exists in the Set
If it does, ERROR - value is not unique. FAIL test.
Otherwise, repeat until the set's length is 1000.
If the set's length is indeed 1000 at the end of this, PASS testr

```

### 2. Is the text value being displayed correctly?

We need to install `jsdom` for Jest for this.

We create a duplicate of the HTML file in Jest.

We store the random value in a variable - then we set the event listener inside of the test to set the `textContent` of the relevant HTML element.

We simulate the button getting clicked with `button.click()` - then we check whether the `textContent` of the element really is the same as the variable we created. If it is - the test passes!
