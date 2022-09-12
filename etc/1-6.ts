//오버로딩, 콜 사인, 제너릭, 콜 시그니쳐
//프로그램을 구상하면서 타입을 디자인 하고 나서 코드를 구현함.
//다형성
type Add = {
     (a: number, b:number):number
     (a: number, b:string):number
     (a: number, b:number, c:number):number
}
//콜 시그니쳐, 함수에 마우스 포인터를 올려둘 경우 보여준다.
//복수의 콜 시그니쳐가 있음. 오버로딩을 잘 보여주는 사례. 오버로딩은 콜 시그니쳐가 여러개 있는 함수일 뿐이다.
//아래의 함수에서 오버로딩이 나타나지 않는다. 이유를 모르겠음=>콜 시그니쳐가 나타나지 않을 뿐 제대로 작동한다. 
const add:Add = (a,b,c?:number)=>{
    if(typeof b ==="string") return a;
    if(c) return a+b+c
    return a+b
}
console.log(add(1,2), add(11,2,3))
console.log(add(10, "a"))

//아래는 오버로딩의 실사용 예시
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if(typeof config === "string"){console.log(config)}
    else{
        console.log(config.path)
    }
}

function multiple(a:number, b:number):number;
function multiple(a:number, b:string):number;

function multiple(a:any,b:any):any{
    return a*b
} 
