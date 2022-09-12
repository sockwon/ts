"use strict";
// const player : Player = {
//     name : "lee"
// };
// if(player.age < 10) //안됨!
// if(player.age && player.age<10){
// }
const playerLyn = {
    name: "lll",
    age: 10
};
function playerMaker(name) {
    return {
        name
    };
}
const lee = playerMaker("lee");
lee.age = 12; //age 를 써도 오류 표시가 없는 이유는 리턴값의 타입을 함수 정의에 지정했기 때문이다. 
const personMaker = (name) => ({ name });
const park = personMaker("ll");
park.age = 1000;
console.log(park, lee);
