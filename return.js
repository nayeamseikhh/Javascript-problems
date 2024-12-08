function tenTimes(number){
    const result = number * 10;
    return result;
}
tenTimes(5);

const output = tenTimes(50);
console.log("OutPut", output);

const bigNumber = tenTimes(234);
console.log(bigNumber);

// add
function add (price1, price2){
    return price1 + price2;
}
console.log(add(10,15));

//math
function doMath (num1 , num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}
console.log(doMath(45, 15));
console.log(doMath(45, 25));
console.log(doMath(465, 55));
console.log(doMath(4785, 785));
console.log(doMath(465, 85));

//function condition
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(6));

function isOdd(number){
    if(number % 2 !== 0){
        return true;
    }
    else{
        return false
    }
}
console.log(isOdd(5))
console.log(isOdd(6))