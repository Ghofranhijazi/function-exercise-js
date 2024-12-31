console.log("q1:")
function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
        let digit = num % 10; 
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10); 
    }
    return reversed;
}


let x = 532443;
console.log(reverseNumber(x));
console.log("************")
console.log("q2:")
for(i=0;i<=15;i++){
    if(i%2 ==0){
        console.log(i+ " is even")
    }
    else{
        console.log(i+" is odd")
    }
}
console.log("************")
console.log("q3:")

let str = "orange";
let asciiCodes = [];
let result = '';


for (let i = 0; i < str.length; i++) {
    asciiCodes.push(str.charCodeAt(i));
}

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}



let sortedNumbers = bubbleSort(asciiCodes);


for (let i = 0; i < asciiCodes.length; i++) {

    result += String.fromCharCode(asciiCodes[i]);
}

console.log(result);


console.log("************")
console.log("q4:")
function insertdash(num)
{
    let str=num.sortString;
    let result =str[0];
    for(let i=1; i<str.length;i++){
        if(parseInt(str[i])%2===0 && parseInt(str[i-1])%2===0){
            result+= '-';

        }
        else{
            result += str[i]
        }

        return result;    
    }
}
console.log(insertdash("123456789"))


console.log("************")
console.log("q5:")
function AgeChecker(age) {
  return age >= 18 ? "The user is Adult" : "The user is Minor";
}

console.log(AgeChecker(20));
console.log(AgeChecker(15));
