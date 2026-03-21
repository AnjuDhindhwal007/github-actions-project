/* import { sum } from "./sum.js";

test("adds numbers", () => {
  expect(sum(2, 3)).toBe(5);
}); */

const sum = require("./sum");

test("adds numbers", () => {
  expect(sum(2, 3)).toBe(5);
});