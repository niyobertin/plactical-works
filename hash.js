class HashTable {
    constructor(){
        this.values = {};
        this.length = 0;
        this.size = 0;
    }
    // hash function
    calculateHash(key){
        return key.toString().length % this.size;
    }
    //adding key values in hash

    add(key,value){
        const hash = this.calculateHash(key);

        if(!this.values.hasOwnProperty(hash)){
            this.values[hash] = {};
        }

        if(!this.values[hash].hasOwnProperty(key)){
            this.length++;
        }
        this.values[hash][key] = value;
    }
    search(key){
        const hash = this.calculateHash(key);

        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
            return this.values[hash][key];
        
        }else{
            return null;
        }
    }
}

//create an object of type hash

const ht = new HashTable();
ht.add('nikuze','2004')
ht.add('niyonkuru','2001');
ht.add('aline bertin','3');

//serching 

console.log(ht.search("nikuze"));
console.log(ht.search("niyonkuru"));
console.log(ht.search("aline bertin"));