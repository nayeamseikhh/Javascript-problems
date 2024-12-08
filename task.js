//task 1
function multiply (a, b, c, d){
    const multy = a * b * c * d;
    return multy;
}
console.log(multiply (2, 3, 5, 6));
console.log(multiply (20, 3, 5, 6));

//task 2 
function isEvenOrOdd (num){
    if(num % 2 !==0){
        return num*2;
    }
    else{
        return num/2;
    }
}
console.log(isEvenOrOdd(32));

//task 3
function make_avg(number){
    let sum = 0;
    for( let i=0; i< number.length; i++){
        sum += number[i];
    }
    return sum/number.length;
}

const number = [12, 22, 23, 43, 23, 44];
console.log(make_avg(number));

// task 4
function count_zero(binary){
      // Validate if the string contains only '0' and '1'
      if (!/^[01]+$/.test(binary)) {
        return "Invalid binary string. The string must contain only '0' and '1'.";
    }
    let count = 0;
    for(let char of binary){
        if(char === '0'){
            count++;
        }
    }
        return count;
    
}
const binary = "0112010100";
console.log("Number of 0's:", count_zero(binary))