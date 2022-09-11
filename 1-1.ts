/*
ts 는 사용자를 바보같은 실수로 부터 보호 해준다.
하지만 개발 속도를 늦추는 것처럼 느껴질 수  있다.
티입 스크립트가 존재 하는 이유: 타입 안정성=>버그가 엄청 엄청 줄어든다. 생산성 증가!!!
[1,2,3] + false => 불가능!
go, Rust 등의 컴파일 언어는 아예 실행조차 못될 코드가 자바스크립트는 실행된다.
실행 된 후에 잘못된 코드가 있다는 사실을 알게된다. 어떻게? 에러를 마주하게 되면서!
이상적으로 코드가 실행되기 전에 에러를 마주해야 한다. 
없는 함수를 넣어도 실행할 때 에러를 마주하게 된다. 코드 실행전에 이런 에러를 잡아내야 한다.
강한 프로그래밍 언어로 바꿔준다. 
*/

function divide(a: number,b: number){
    return a/b;
}
console.log(divide(10,4));

const sockwon = {name : "lee"};
console.log(sockwon.hello()); //자바스크립트는 가능!

// [1] + true: