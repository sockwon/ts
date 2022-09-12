//다형성: 서로 다른 형태를 지니는 함수 등, 오버로딩으로 여러개의 타입을 가질 수 잇음 
type SuperPrintF = {
    (arr: number[]): void
    (arr: string[]): void
    (arr: (number | string)[]): void
    (arr: (number|string|boolean)[]):void
}

const superPrintF : SuperPrintF=(arr)=>{
    console.log(arr)
}

superPrintF([1,2,3,4]);
superPrintF(["1","2","3","4"]);
superPrintF([1,2,"3","4"]); //일치하는 오버로드가 없다. 오버로드에 추가해줘야 한다. 추가해줌.
superPrintF([1,"2",true]); //일치하는 오버로드가 없다. 추가해줘야. 위와 같이 추가해주는 것은 별로다.

/*--------------------------------------------------------- */

type SuperPrintS = {
    <TypePlaceHolder>(arr : TypePlaceHolder[]) :void //제너릭을 사용함. 일일이 오버로드 추가해줄 필요가 없다.
}

const superPrintS : SuperPrintS=(arr)=>{
    console.log(arr);
}

superPrintS([1,2,3]);
superPrintS([1,"ggg"]);
superPrintS([1,"gg", false])