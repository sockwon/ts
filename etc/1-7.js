"use strict";
const superPrintF = (arr) => {
    console.log(arr);
};
superPrintF([1, 2, 3, 4]);
superPrintF(["1", "2", "3", "4"]);
superPrintF([1, 2, "3", "4"]); //일치하는 오버로드가 없다. 오버로드에 추가해줘야 한다. 추가해줌.
superPrintF([1, "2", true]); //일치하는 오버로드가 없다. 추가해줘야. 위와 같이 추가해주는 것은 별로다.
const superPrintS = (arr) => {
    console.log(arr);
};
superPrintS([1, 2, 3]);
superPrintS([1, "ggg"]);
superPrintS([1, "gg", false]);
