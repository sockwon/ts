//해시 맵
type Words = {
  [whatever: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  delete(term: string): void {
    if (this.words[term]) {
      const dead = delete this.words[term];
      console.log(dead)
    }
  }
  modify(term: string, what: string, content: string):void {
    if(what === "term"){
        this.words[content] = this.words[term]
        const dead = this.delete(term)
        console.log("term:", content, "def:", this.words[content], "delete:",dead)
    }else if(what === "def"){
        this.words[term] = content
        console.log("term:", term, "def:", this.words[term])
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const leeEle = new Word("leesockwon", "드셔주세요")

const dict = new Dict();

dict.add(kimchi);
console.log(dict.def("kimchi"))
console.log(dict.modify("kimchi","def","나는 김치가 좋아!"));
dict.add(leeEle);
console.log(dict.def("leesockwon"))
console.log(dict.delete("leesockwon"));
