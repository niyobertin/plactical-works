// Exercise 1 - Fill and Print an array.
// Write a program that reads in 10 integers from the keyboard storing 
// them in an array. Once they are all read in, print them to the screen.
// HINT This will need two for loops one after the other - the first reads them in, 
// the second reads them out.
window.onload = function(){
let numbers =[];
let container = document.querySelector('#int');
for(let i = 1;i<=10;i++){
     //numbers.push(prompt('Enter any integer number'));
    
}

for (const ele of numbers) {
    let myInt = document.createElement('p');
    myInt.textContent = ele;
    container.appendChild(myInt);
}


// Exercise 2 - Reverse
// Read in 10 integers from the keyboard storing them in an array.
//  Then print out the same integers in reverse order of input.

let integersToReverse = [];
let container2 = document.querySelector("#int2");
for(let i = 1;i<=10;i++){
    //integersToReverse.push(prompt('Enter any integer number'));
}
    let inputInt = document.createElement('p');
    inputInt.textContent = `My integer numbers from keyboard before reversed: ${integersToReverse}`;
    container2.appendChild(inputInt);
    let reversedInput = document.createElement('p');
    reversedInput.textContent =`Numbers after reversed: ${integersToReverse.reverse()}`;
    container2.appendChild(reversedInput);



// Exercise 3 - PrettyPrint Part 1
// Write a program that prints an array in a table with the array positions above
//  the contents of the array.
//    0    1    2    3    4    5    6    7    8    9
// |   1|   8|  10|   7|   4| 112|  43| 144|  18|  11|
// HINT: This will need two for loops one after the other, 
// the first printing the indexes, the second printing the array contents.
//  Remember that aan extra integer argument can be given to write to tell it to
//   print its first argument in a fixed width size.

function prettyPrint(array){
   
             let table = '',
             column = array.length;
            table+='<tr>';
            for(let c = 0;c < column;c++){
               table +='<td>'+ c + '</td>';
             }
             table+='</tr>';
             table+='<tr>';
             for(i= 0;i<column;i++){
                table+='<td>' + array[i]+"|" + '</td>';
            }
            table+='</tr>';
       
       document.getElementById('table').innerHTML='<table>'+ table +'</table>';
}
prettyPrint(['kaneza','nikuze','bertin','aline']);


/*Exercise 5 - Random array
Write a program that fills an array A of size 5 filled with random integers in 
the range 1 to 100 and prints it out (for testing purposes). 
Write programs that then after creating such a random array, do each of the following:
(a) Calculate the sum of the elements of A and print it out.
(b) Count the number of elements in A whose contents are less than 10.
(c) Create a new array B of size 5 such that for 
all B[i] (0<=i<=19), B[i] = A[0] + A[1] + ... + A[i]
Modify your code to have an arrays of size 20 
(so that you are filling an array A of size 20 with random integers...).
 If you cannot do this with a single edit, modify your program so that you can*/ 

function returningRandomNumber(min,max){
    let arrayA =[];
    for(let i =0;i < 5;i++){
        arrayA.push(Math.floor(Math.random()*(max - min+1) + min));
    }
    document.getElementById('random').innerHTML =`5 random number btn 1 and 100 are:${arrayA}`;
    //a)calculating ths sum of elememnts of A and print it out.
    let sum = 0;
    let numberOfALessThan10 =0;
    for(let j =0; j < arrayA.length;j++){
        sum+=arrayA[j];
        //b)counting the number of A whose content is less than 10.
        if(arrayA[j] <10){
            numberOfALessThan10++;
        }
        
    }
     document.getElementById('sum').innerHTML =`The sum of 5 random number btn 1 and 100 is  : ${sum}`;
   document.getElementById('number').innerHTML= `The number of A less than ten are : ${numberOfALessThan10}`;
}
returningRandomNumber(1,100);



// Exercise 6 - Copy and double
// Read  integers from the keyboard until zero is read,storing them in input order in an array A.
//  Then copy them to another array B doubling each integer 
// (i.e. after the copying of n integers and assuming you are using item 0 of the arrays, 
//     then for all i such that 0 <= i < n,  B[i] = A[i]*2 ). Then print B.

let array_A = [];
let array_B,a;
for(let i = 0;i<=array_A.length;i++){
    // a = prompt("Enter any number");
    if(a !=0){
        array_A.push(a);
    };
   
}
array_B = array_A.map((num)=>num*2);
document.getElementById('copy').innerHTML = `The copy of any number entered by user but multiplied by 2 : ${array_B}`;
};


// Exercise 7  - Searching an array for a given number
// Write a program that fills an array with 20 random integers.  Print out the array. 
// Then search the array to discover 
// whether or not it contains an integer input from the keyboard.

function searchArray(numb,test){
    console.log(numb); 
if(numb.includes(test)===true){
    alert(`The number you enterd contain ${test}`)
}else{
    alert(`The number you  enterd  does't contain ${test}`)
}
 
}
searchArray([1,2,3,45,67,0],1234);


 




