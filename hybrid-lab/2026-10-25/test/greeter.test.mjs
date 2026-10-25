import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greeter.mjs";

test("greet formats a name", () => {
  assert.equal(greet(" Rio88 "), "Hello, Rio88!");
});

test("greet normalizes repeated spaces", () => {
  assert.equal(greet("  Rio88   GitHub  "), "Hello, Rio88 GitHub!");
});

test("greet refuses empty names", () => {
  assert.throws(() => greet("  "), TypeError);
});
