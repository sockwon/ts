"use strict";
const makePerson = (name, gender, region) => {
    return {
        name: name,
        gender: gender,
        region: region
    };
};
const humanA = makePerson("pabinho", "male", "England");
humanA.gender = "fff"; // 읽기 전용 속성이므로 바꿀 수 없다. 매우 좋음
const numbers = [1, 2, 3, 4];
numbers.push(10); //읽기 전용이다. 진짜 좋다.
//튜플. 배열 생성, 최소한의 길이를 가지고 특정 위치에 특정 타입이 있어야 한다.
const people = ["that", 10, false];
//any 는 타입을 벗어나고 싶을 때 사용한다. 따라서 any 는 타입스크립트의 보호 기능을 벗어난다. any 를 사용하지 않는것을 추천한다.
