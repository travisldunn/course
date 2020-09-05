class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0,
      PRIME = 31,
      value;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      value = key[i].charCodeAt(0) - 96;
      total *= (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let [mappedKey, value] of this.keyMap[index]) {
        if (mappedKey === key) return value;
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let arr of this.keyMap) {
      if (arr) for (let [key, value] of arr) keys.push(key);
    }
    return keys;
  }

  values() {
    let values = [];
    for (let arr of this.keyMap) {
      if (arr) {
        for (let [key, value] of arr) {
          if (!values.includes(value)) values.push(value);
        }
      }
    }
    return values;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

console.log(ht.get("maroon"));
console.log(ht.values());
console.log(ht.keys());

for (let key of ht.keys()) {
  console.log(ht.get(key));
}
