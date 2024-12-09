/**
 * @jest-environment jsdom
 */
const randomString = require(`../src/textGen`);

test("generate unique values each time", () => {
  const testNum = 1000;
  const generatedValues = new Set()
  for (let i = 0; i < testNum; i+=1) {
    const value = randomString();
    if (generatedValues.has(value)) {
      throw new Error(`Duplicate value ${value} found in set`);
    };
    generatedValues.add(value);
  }
  expect(generatedValues.size).toBe(testNum);
})

test("text is displayed correctly", () => {
  document.body.innerHTML = `
  <div class="flex flex-row justify-center">
    <div class="flex flex-row basis-1/4 justify-center">
      <h1 class="text-4xl text-blue-700 font-bold">Random text generator</h1>
    </div>
  </div>
  <br />
  <div class="flex flex-row justify-center">
    <button class="btn btn-blue" id="btn">Click me!</button>
  </div>
  <br />
  <div class="flex flex-row justify-center">
    <p id="text"></p>
  </div>
`;
  const button = document.getElementById(`btn`);
  const text = document.getElementById(`text`);
  const str = randomString();
  button.addEventListener(`click`, () => {
    text.innerText = str
  });
  button.click();
  expect(text.innerText).toMatch(str);
});