"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    delete(term) {
        if (this.words[term]) {
            const dead = delete this.words[term];
            console.log(dead);
        }
    }
    modify(term, what, content) {
        if (what === "term") {
            this.words[content] = this.words[term];
            const dead = this.delete(term);
            console.log("term:", content, "def:", this.words[content], "delete:", dead);
        }
        else if (what === "def") {
            this.words[term] = content;
            console.log("term:", term, "def:", this.words[term]);
        }
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "한국의 음식");
const leeEle = new Word("leesockwon", "드셔주세요");
const dict = new Dict();
kimchi.def = "fff"; //읽기 전용 속성으로 전환해서 public 이라도 수정할 수 없게 만들었다. 
dict.add(kimchi);
console.log(dict.def("kimchi"));
console.log(dict.modify("kimchi", "def", "나는 김치가 좋아!"));
dict.add(leeEle);
console.log(dict.def("leesockwon"));
console.log(dict.delete("leesockwon"));
