abstract class User { 
    //다른 클래스가 상속받아서 쓸 수 있는 클래스. 하지만 직업 새로운 인스턴스 만들수는 없다.
    constructor(
        protected firstName : string,
        protected secondName : string,
        protected nickName : string, 
        //private 라면 상속해도 쓸 수 없다. 인스턴스 밖에서 접속할 수 없음.
        ){}
    abstract getNickName() :void
    public getFullname(){
        return `${this.firstName} ${this.secondName}`
    }
}

class PlayerTen extends User {
    getNickName(){
        console.log(this.nickName)
    }
}

const leeTen = new PlayerTen("lee", "sockwon", "ll");
console.log(leeTen.nickName)