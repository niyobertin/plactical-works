//Write a function that accepts an array of strings. Return the longest string.
function longestWord(words){
    let longestString = words[0].length;
    let finalString = words[0];
    for(a = 0; a < words.length; a++){
        if(typeof words[a]==="string"){
       
            for(i = 0;i < words.length;i++){
                let newString = words[i].length;
                if(newString > longestString){
                    finalString = words[i];
                    longestString = newString;
                }
            }
            return finalString;
       }else{
           return "The input must be a string!!!";
       }
    }
   
}
const solution=longestWord(["welcome",'nice lunning boy','orange','peaple']);
console.log(solution);



/*Write a function that takes a string, and returns the character that is most commonly
 used in the string*/


 const countingChars = (str) => {
    const charCount = {}; //Step 0
    let maxCharCount = 0;
    let maxChar = '';
    for(let i = 0; i < str.length; i++) { // Step 1.
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    for(let key in charCount) { //Step 2
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] //Step 3
            maxChar = key;
        }
    }

    return maxChar; //Step 4
}




//Given a string, write a function that will return whether or 
//not that string is a palindrome

const palindrome = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");
    return trimmed === trimmed.split('').reverse().join(''); // Steps 1-4
}



/*Given a string possibly containing three types of braces ({}, [], ()), 
write a function that returns a Boolean 
indicating whether the given string contains a valid nesting of braces.*/
const balancedbrackets = (str) => {
    const stack = [];
    let openers = ["{", "[", "("];
    let closers = ["}", "]", ")"];
    
    const dict = {
      "{" : "}",
      "[" : "]",
      "(" : ")"
    }
  
    for(let i = 0; i < str.length; i++) {
          let char = str[i];
          if(openers.includes(char)) {
              stack.push(char);
          }
          else if(closers.includes(char)) {
              //is our stack empty? 
  
              if(!stack.length) {
                  return false;
              }
              //does our popped element not match the corresponding element?
              else if(dict[stack.pop()] !== char) {
                  return false;
              }
          }
      }
      
      return stack.length === 0;
  
  }