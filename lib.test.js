
const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("17 should be prime",()=>{
    expect(lib.prime(17)).toBe(true);
});

test("factorial 16 must be 20,922,789,888,000",()=>{
    expect(lib.fact(16)).toBe(20922789888000);
});