function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(evenSizedString('Bangladesh'));
console.log(evenSizedString('Rajshahi'));
console.log(evenSizedString('Baya'));
console.log(evenSizedString('Chandropukur'));
console.log(evenSizedString('Balidanga'));

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
        
    }
    else{
        const result = number * 3;
        return result;
        
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

function numberOfElements(number){
    const len =  number.length
    return len;
}
numberOfElements([12, 21, 44, 54, 32]);

//an object propertu access function
function getAge(person){
    const age = person.age;
    return age;
}  

function sumOfNumber (numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const sum = sumOfNumber([1,2,3,4,5,6,7,8,9]);
console.log(sum)


//GPT  5!=5×4×3×2×1=120
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(10))

function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers.";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(-5)); // Output: Factorial not defined for negative numbers.


function factorialIterative(n) {
    if (n === 0 || n === 1) return 1; // Base case
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiply each number
    }
    return result;
}
console.log(factorialIterative(5)); // Output: 120
