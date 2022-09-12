//다형성은 함수가 다양한 값을 가질 수 있게 해준다. 제너릭으로 다형성을 만들 수 있다. 다음은 그 사례다.
interface SStorage<T> {
    [key : string] : T
}


class LocalStorage<T> {
    private storage :SStorage <T>= {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage
    }
}


const stringStorage = new LocalStorage<string>()

stringStorage.get("flfl")
stringStorage.set("엄마", "밥줘");

const booleanStorage = new LocalStorage<boolean>()

booleanStorage.get("false")
booleanStorage.set("hello", false)