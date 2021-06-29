//1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive 
//integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).



function sigma(num) {
    //Need variable to store the sum value
    var sum = 0;
    //Need to iterate from one to the given number.
    for(var i = 1; i <= num; i++){
    //Add the valiue of i to sum
        sum += i;
    }
    // Not part of question but helps me determine if im right.
    console.log("Sum:",sum); 
}
sigma (3);

//2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) 
//of all positive integers from 1 up to the given number (inclusive).  
//For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num) {
    //Create a variable to store the product
    var product = 1;
    //Need to iterate from 1 to to the given number
    for(var i = 1; i <= num; i++){
    //multiply i by the value of prodcut    
        product *= i;
        
    }
    //console.log to see if outcome is correct
    console.log(product);
    //Returnt value back to the function
    return product;
}
factorial(5);

//3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence,
// each number is the sum of the previous two, starting with values 0 and 1.  

function fibonacci(num) {
    //Create var to hold  an array with the first two numbers of the given value
    var arr = [0,1];
    //Create another variable that the individual values of a and b 
    var a,b;
    //Create a loop to iterate from given i to num
    for(var i = 2; i<=num; i++){
    //Store the previous value nest to num in the arr    
        a = arr[i-1];
    //Store the previous value before var a
        b = arr[i-2];
    //Add the values of a and b and push it arr    
        arr.push(a + b);
    }
    console.log(arr);
    //Retrun arr to function
    return arr[arr.lenght-1];
} 
fibonacci(15);

//4. Array: Second-to-Last: Return the second-to-last element of an array. 
//Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondLast(arr) {
//Check to see that arr is not too short     
    if(arr.length < 2){
    //if two short return null   
        return null; 
    }
    //If array is lnog enough, return the second to last value of the given array
    return arr[arr.length-2];
}
//console.log a short arr and long enought arr to make sure working properly
console.log(secondLast([42, true, 4, "Liam", 7]))
console.log(secondLast([1]));


//5. Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  
//If the array is too short, return null.

function nth(arr,num) {
//Check to see if array is not too short    
    if(arr.length <= 2){
    //If array is too short, return null    
        return null; 
    }
    //If array is long enough, return value of the proposed index
    return arr[arr.length-num]
}    
//Console.log to see if funtion is working properly
console.log(nth([5,2,3,6,4,9,7],3));
console.log(nth([5,2],2))


//6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.
//If the array is too short, return null.

function secondLargest(arr) {
    //First test to see if arr is long enough, if not return null
    if(arr.length < 2){
        return null;
    }
    //create a var to store max
    var max = arr[0];
    //create var to store secondMax
    var secondMax = arr[0];
    //iterate the arr to test values
    for(var i = 1; i < arr.length; i++){
        //check to if arr[i] is larger than max, if is, secondMax is now the value of max, 
        //and max has the value of arr[i]
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        //check if arr[i] is smaller than secondMax and max, if it is secondMax equal to arr[i] 
        else if(arr[i] > secondMax && arr[i] < max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest([1,42,4,3.14,7]));
console.log(secondLargest([2,3]))

//7. Double Trouble: Create a function that changes a given array to list each existing element twice,
// retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false]. 

function doubleTrouble () {
    var arrNew = [4, "Ulysses", 42, false];
    //Splice out arr[1] and replace  with the value 4
    arrNew.splice(1, 0, 4);
    //console.log(arrNew); 
    //Splice out arr[3] and replace with the string 'ulysses'
    arrNew.splice(3,0,'ulysses');
    //console.log(arrNew);
    //Splice out arr[5] and replace with the value 42
    arrNew.splice(5,0, 42);
    //console.log(arrNew);
    //Splice out arr[6] and replace with the string 'false'
    arrNew.splice(6,0,false);
    //console.log arrNew ensure it worked properly
    console.log(arrNew)
}
doubleTrouble();