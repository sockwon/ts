"use strict";
const nicoTw = {
    nickname: "ni",
    team: "yellow",
    health: 10, //14가 값에 포함되지 않았기 때문에 없다.
};
class UserTw {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class PlayerTw2 extends UserTw {
    fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `hello ${name}.`;
    }
}
class PlayerTw3 {
    constructor(firstName, lastName, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `hello ${name}.`;
    }
}
function makeUser(user) {
    return { firstName: "lee",
        lastName: "sockwon",
        sayHi: (name) => "string",
        fullName: () => "what"
    };
}
const leeTw = makeUser({
    firstName: "lee",
    lastName: "sockwon",
    sayHi: (name) => "string",
    fullName: () => "what"
});
console.log(leeTw.firstName);
