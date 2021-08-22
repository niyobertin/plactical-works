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
/*Add a new method to the Shape class's prototype, calcPerimeter(),
 which calculates its perimeter (the length of the shape's outer edge) 
and logs the result to the console.
Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the 
browser DevTools' console as expected.
Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.*/

class Shape {
    constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
        }
        calcPerimeter(){
            let perm = this.sides*this.sideLength;
            console.log("the perimeter of our "+ this.name + "is " + perm);
        }

  };
  
  
  /*We'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that 
  calculates the square's area.
   Also set up the constructor so that the name property of Square object instances is automatically set to square,
    and the sides property is automatically set to 4. When invoking the constructor, 
    you should therefore just need to provide the sideLength property.

  Create an instance of the Square class called square with appropriate property values, 
  and call its calcPerimeter() and calcArea() methods to show that it works ok.*/
   class Squares extends Shape{
       constructor(name, sides, sideLength){
           super(name, sides, sideLength);
       }
       calcArea(){
           let area = this.sideLength*this.sideLength;
           console.log('The area of our '+ this.name +' is ' +area);

       }
   };

   let triange = new Shape('triangle',3,4);
   let square = new Squares('square',4,3);
   square.calcArea();
   square.calcPerimeter();
   triange.calcPerimeter();
 
  



    

   