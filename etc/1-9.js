"use strict";
//타입스크립트가 스스로 타입을 유추하도록 만드는게 가장 좋다. 특수한 경우에만 타입을 직접 
//심어둔다. 제너릭은 다른 개발자가 사용할 기능, 라이브러리를 만들때 주로 사용하고 
//그 외의 경우에는 만들어진 것을 가져다 쓰기만 살 것이다. 하지만 제너릭은 매우매우 유용하고 중요하다.
function PPrint(a) {
    return a[0];
}
PPrint([1, 2, 3]);
PPrint([true, "ggg"]);
PPrint(["gjgjgj", "gg", false]);
const nico = {
    name: "nico",
    extraInfo: {
        favFood: "icecream"
    }
};
let aaa = [1, 2, 3, 4, "gg"]; //잘 작동됨
