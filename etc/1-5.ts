let aa : unknown;

let bb = aa+1; //안됨

if (typeof aa === 'number'){
    let bb = aa+1;
}// 됨!

//void 는 아무것도 없음을 뜻한다.
//never 는 함수가 절대 리턴하지 않을 때 쓰인다. 

function hello():never{
    return 100; //리턴 못한다.
}

function heee() : never {
    throw new Error("xnxn") //throw 는 never 도 가능
}

function hara(name:string | number){
    if(typeof name === "string"){
        name
    }else if(typeof name === "number"){
        name
    }else{
        name // never 가 type 이다. 이 명령문은 절대 실행되지 말아야 한다는 의미.
    }
}