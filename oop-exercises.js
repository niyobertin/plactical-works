console.log('oop woks result');
//1the cat
//creation of propreties that represent the cat
class Animal {
    constructor(name,tiredness,hunger,lonliness,happiness){
        this.name=name;
     this.tiredness=tiredness;
      this.hunger=hunger;
     this.lonliness=lonliness;
      this.happiness=happiness;
    };
    sleeping(){
     this.tiredness--;
     return this.tiredness;
    };
    takingFood(){
         this.hunger++;
         return this.hunger;
    };
    living(){
        this.lonliness--;
        return this.lonliness;
    };
    
    gaming(){
        this.happiness++;
       return this.happiness;

    };
    startus(){
        if(this.tiredness > 50){
            console.log(`The ${this.name}  is strong now`);
        }else{
            console.log(`The ${this.name}  is  very tired`);
        };
        if(this.hunger < 50){
            console.log(`The ${this.name}  is very hungry`);
        }else{
            console.log(`The ${this.name} has get the food!!`);
        };
        if(this.lonliness < 50){
            console.log(`The ${this.name}  is lonely`);

        }else{
            console.log(`The ${this.name}  is have a family`);
        };
        if(this.happiness < 50){
            console.log(`The ${this.name}  is sud`);
        }else{
            console.log(`The ${this.name} is  very happy!`);
        };
    };
  
};


    // calling function
  
    let cat = new Animal('Kaboyi',49,39,60,10);
    cat.sleeping();
    cat.gaming();
    cat.takingFood();
    cat.living();
    cat.startus();



    //the leading list
    //An object-oriented book-list!

class BookList{
    constructor(numOfBookMarkedAsRed,numOfBookNotMarkedAsRed,nextBook,currentBook,[allBook]){
    this.numOfBookMarkedAsRed = numOfBookMarkedAsRed;
    this.numOfBookNotMarkedAsRed= numOfBookNotMarkedAsRed;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.allBook = [allBook];
}
addBook(book){
    this.newBook = newBook;
}
finishCurrentBook(){
    
}

}

class Book{
    constructor(title,genre,author, read,readDate){
        this.title = title;
        THIS.author = author;
        this.genre = genre;
        this.read = read;
        this.readDate = readDate;
    }
}



    

   