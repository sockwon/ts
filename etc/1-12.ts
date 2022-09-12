//interface 와 type 은 유사. type 이 특정 값을 가지도록 제한할수도 있다. interface 는 오직 객체를 다룬다.
//interface 는 클래스와 닮았다. 가벼움. js 에선 사라짐. 인터페이스를 쓰면 클래스가 따르도록 강제할까?
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface PlayerTw {
  //type 대신 interface 라고 바꾼다면 --->약간의 문법적 차이를 제외하면 type 과 같다. 오브젝트의 모양을 알려주는 방법이다.
  nickname: string; //type 이 광범위하게 쓰인다.
  team: Team;
  health: Health;
}

const nicoTw: PlayerTw = {
  nickname: "ni",
  team: "yellow",
  health: 10, //14가 값에 포함되지 않았기 때문에 없다.
};

// interface apc = string //안됨
type apcb = string;

abstract class UserTw {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullname(): string;
}

class PlayerTw2 extends UserTw {
  fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string): string {
    return `hello ${name}.`;
  }
}

//위의 방법보다 훨씬 가벼운 방법이 있다. 자바스크립트에는 인터페이스가 나오지 않는다.
//인터페이스를 상속하게 되면 자바스크립트 상 코드에는 등장하지 않는다.

interface UserTw2 {
    firstName : string,
    lastName : string,
    sayHi(name:string):string,
    fullName():string
}

interface Human {
    gender : string
}

class PlayerTw3 implements UserTw2, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender : string
    ){}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `hello ${name}.`;
    }
}

function makeUser(user: UserTw2) : UserTw2{
    return  {firstName : "lee",
    lastName : "sockwon",
    sayHi : (name)=>"string",
    fullName : ()=>"what"
}
}

const leeTw = makeUser({
    firstName : "lee",
    lastName : "sockwon",
    sayHi : (name)=>"string",
    fullName : ()=>"what"
})

console.log(leeTw.firstName)