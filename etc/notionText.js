"use strict";
const test = (a, b, c) => {
    if (typeof b === "number") {
        console.log("b is number:", b);
        return a;
    }
    if (c) {
        console.log("this is c:", c);
        return c;
    }
    console.log("normal:", a, b);
    return b;
};
test("아무도 없었다.", "모두가 있을 것이다.");
test("탑건", 100);
test("소격동", "구룡마을", "암행촌");
