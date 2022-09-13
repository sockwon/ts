import crypto from "crypto";

interface BlockShape {
  prevHash: string;
  height: number;
  hash: string;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.createHash(prevHash, height, data);
  }

  static createHash(prevHash: string, height: number, data: string) {
    return crypto
      .createHash("sha256")
      .update(`${prevHash}${height}${data}`)
      .digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }

  public verification(){
    for(let i=this.blocks.length-1; i>=1; i--){
        if(this.blocks[i].prevHash !== this.blocks[i-1].hash){
            return `false: height ${i}`
        }
    }
    return "true";
  }

  public addBlock(data: string) {
    const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(block);
  }

  public getBlockChain() {
    return [...this.blocks];
  }
}

const blockchain = new BlockChain();

blockchain.addBlock("first");
blockchain.addBlock("둘");
blockchain.addBlock("third");
blockchain.addBlock("fourth");

console.log(blockchain, blockchain.verification());
