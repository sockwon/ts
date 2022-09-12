"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear() {
        this.storage;
    }
}
const stringStorage = new LocalStorage();
stringStorage.get("flfl");
stringStorage.set("엄마", "밥줘");
const booleanStorage = new LocalStorage();
booleanStorage.get("false");
booleanStorage.set("hello", false);
