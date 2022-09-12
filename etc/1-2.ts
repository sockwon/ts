let a = "hello"; //타입스크립트가 스트링으로 타입을 추론함
a="bye" // 같은 타입으로 괜찮음!
a = 10; // 버그 발생! 타입이 달라졌다.

let b : boolean = "x" // 타입을 명시할 수 있다. 

let c = [1,2,3] // number 어레이라는 것을 추론함
let d : number[] = []
c.push("ll"); // 버그 발생
d.push("10");
const player = {
    name : "lee"
}
player.hello() // 버그. 없는 메소드를 호출함
player.name = 100 //버그. 스트링 형식을 추론했기에 넘버는 들어갈 수 없다.
