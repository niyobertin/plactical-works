//1. Write a JavaScript program to list the properties of a JavaScript object
let  teacher = {
    name:"Kanyemera",
    age:23,
    gender:'male',
    degree:"A2"
};
    console.log(Object.keys(teacher));

    //2. Write a JavaScript program to delete the rollno property from the following object.
    // Also print the object before or after deleting the property. 
    let student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    };
    console.log( student);
    delete student.rollno;
    console.log(student);

    //3. Write a JavaScript program to get the length of a JavaScript object.
  
    console.log('JavaScript program to get the length of a JavaScript object.');
    let adimin = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    };
    let size = Object.keys(adimin).length;
    console.log('the size of my object is :' +size);

    //4. Write a JavaScript program to display the reading status
    // (i.e. display book name, author name and reading status) of the following books.
    
     class library{
         constructor(author,title,readingStatus){
             this.author = author;
             this.title = title;
             this.readingStatus = readingStatus;
         }
     }
     let book1 = new library('Bill Gates.','The Road Ahead.',true);
     let book2 = new library('Steve Jobs.','Walter Isaacson.',true);
     let book3 = new library('Suzanne Collins.','Mockingjay: The Final Book of The Hunger Games.',false);
     console.log("1) Book title :"+book1.title+" Author :" +book1.author+" Reading status :"+book1.readingStatus);
     console.log("2) Book title :"+book2.title+" Author :" +book2.author+" Reading status :"+book2.readingStatus);
     console.log("3) Book title :"+book3.title+" Author :" +book3.author+" Reading status :"+book3.readingStatus);

/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder*/

class Cylinder {
    constructor(diameter,height){
        this.diameter = diameter;
        this.height = height;
    }
    volume(){
        let radius = this.diameter/2;
        return Math.PI *this.height * radius * radius;
    }
}

let myVolume = new Cylinder(7,4);
myVolume.volume();

/*6. Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/

let bubble = {
    myData:[6,4,0,3,-2,1],
    bubbleSolt:function(lowestInt,compere,solution){
         lowestInt = this.myData[0];
    
        for(i = 0; i < this.myData.length ; i++){
            
              
        }
    }
}
bubble.bubbleSolt();


/*7. Write a JavaScript program which returns a subset of a string. Go to the editor
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]*/

String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("dog".sub_String());

//8. Write a JavaScript program to create a Clock. Go to the editor
//Note: The output will come every second.


function my_Clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  //12clock.run();

//9. Write a JavaScript program to calculate the area and perimeter of a circle.
//Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

class Circle {
    constructor(radi){
        this.radi = radi;
    }
    calcurationArea(){
        return Math.PI * this.radi * this.radi;
    };
    calcurationPerimeter(){
        return 2 * Math.PI  * this.radi;
    }
}
let myCircle = new Circle(prompt('please enter the radius'));
myCircle.calcurationArea();
myCircle.calcurationPerimeter();

//10. Write a JavaScript program to sort an array of JavaScript objects.

let person =[{
  name: 'kagabo',
  gender:'Male',
  age:12
},
{
  name: 'Irene',
  gender:'Male',
  age:15
},
{name: 'Yolanda',
gender:'Female',
age:20}];


function myArray(){
  console.log(person.reverse());
};

myArray();

//11. Write a JavaScript function to print all the methods in an JavaScript object.

let myObject = Array.prototype;

console.log(Object.getOwnPropertyNames(myObject).filter(function(y){
  return typeof myObject[y] ==='function'
}));






