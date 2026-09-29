import test from "node:test";
import assert from "node:assert/strict";
import { red, bold, color } from "../src/index.js";

test("wraps ANSI codes", () => {
  assert.equal(red("x"), "\u001b[31mx\u001b[39m");
});

test("can disable styling", () => {
  assert.equal(bold("x",{enabled:false}), "x");
});

test("rejects unknown styles", () => {
  assert.throws(() => color("wat","x"), RangeError);
});
