console.log('oop woks result');
//1the cat
//creation of propreties that represent the cat
class Animale {
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
         return this.tiredness;
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
            console.log(`The ${this.name}  is actuary strong now`);
        }else{
            console.log(`The ${this.name}  is actuary very tired`);
        };
        if(this.hunger < 50){
            console.log(`The ${this.name}  is actuary very hungry`);
        }else{
            console.log(`The ${this.name}  is actuary has get the food!!`);
        };
        if(this.lonliness < 50){
            console.log(`The ${this.name}  is actuary lonely`);

        }else{
            console.log(`The ${this.name}  is actuary have a family`);
        };
        if(this.happiness < 50){
            console.log(`The ${this.name}  is actuary sud`);
        }else{
            console.log(`The ${this.name} is actuary very happy!`);
        };
    };
  
};


    // calling function

    let cat = new Animale('Kaboyi',49,39,60,10);
    console.log(cat.startus());


    //the leading list
    //An object-oriented book-list!




    

   