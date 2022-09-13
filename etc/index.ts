import crypto from "crypto";

interface BlockShape {
    hash : string
    prevHash : string;
    height : number;
    data : string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ){
        this.hash = Block.calculateHash(prevHash, height, data)
    }

    static calculateHash(prevHash:string, height:number, data: string){
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class BlockChain {
    private blocks : Block[];
    constructor(){this.blocks = [];}

    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length-1].hash
    }

    public addBlock(data : string){
        const block = new Block(this.getPrevHash(), this.blocks.length+1, data);
        this.blocks.push(block)
    }

    public getBlocks(){
        return this.blocks // 해킹을 피하려면 [...this.blocks] 로 오직 데이터만 전달한다. 내부 프로퍼티에 접근할 수 없게 한다.
    }
}

const blockchain = new BlockChain();

blockchain.addBlock("첫");
blockchain.addBlock("블록");
blockchain.addBlock("체인");
blockchain.addBlock("기념");

const result = blockchain.getBlocks();
result.push(new Block("hi", 10, "HACKEDDDD"))
console.log(result)