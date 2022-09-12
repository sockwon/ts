"use strict";
class User {
    //다른 클래스가 상속받아서 쓸 수 있는 클래스. 하지만 직업 새로운 인스턴스 만들수는 없다.
    constructor(firstName, secondName, nickName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.nickName = nickName;
    }
    getFullname() {
        return `${this.firstName} ${this.secondName}`;
    }
}
class PlayerTen extends User {
    getNickName() {
        console.log(this.nickName);
    }
}
const leeTen = new PlayerTen("lee", "sockwon", "ll");
console.log(leeTen.nickName);
