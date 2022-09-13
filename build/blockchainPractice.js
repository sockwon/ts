"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
  constructor(prevHash, height, data) {
    this.prevHash = prevHash;
    this.height = height;
    this.data = data;
    this.hash = Block.createHash(prevHash, height, data);
  }
  static createHash(prevHash, height, data) {
    return crypto_1.default
      .createHash("sha256")
      .update(`${prevHash}${height}${data}`)
      .digest("hex");
  }
}
class BlockChain {
  constructor() {
    this.blocks = [];
  }
  getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  verification() {
    for (let i = this.blocks.length - 1; i >= 1; i--) {
      if (this.blocks[i].prevHash !== this.blocks[i - 1].hash) {
        return `false: height ${i}`;
      }
    }
    return "true";
  }
  addBlock(data) {
    const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(block);
  }
  getBlockChain() {
    return [...this.blocks];
  }
}
const blockchain = new BlockChain();
blockchain.addBlock("first");
blockchain.addBlock("둘");
blockchain.addBlock("third");
blockchain.addBlock("fourth");
console.log(blockchain, blockchain.verification());
