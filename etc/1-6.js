"use strict";
//콜 시그니쳐, 함수에 마우스 포인터를 올려둘 경우 보여준다.
//복수의 콜 시그니쳐가 있음. 오버로딩을 잘 보여주는 사례. 오버로딩은 콜 시그니쳐가 여러개 있는 함수일 뿐이다.
//아래의 함수에서 오버로딩이 나타나지 않는다. 이유를 모르겠음=>콜 시그니쳐가 나타나지 않을 뿐 제대로 작동한다. 
const add = (a, b, c) => {
    if (typeof b === "string")
        return a;
    if (c)
        return a + b + c;
    return a + b;
};
console.log(add(1, 2), add(11, 2, 3));
console.log(add(10, "a"));
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path);
    }
};
function multiple(a, b) {
    return a * b;
}
