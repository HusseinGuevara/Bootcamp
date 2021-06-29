function newArr() {
    var numArr = [];
    for(var i = 1; i <= 255; i++){
        numArr.push(i);
    }
    console.log(numArr);
    return numArr;
}
newArr();

function sum_of_num() {
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i%2===0){
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}
sum_of_num();


function sum_of_odds () {
    var sum = 0;
    for(var i = 1; i<= 5000; i++){
        if(i%2!==0){
            sum += i;
        }
    }
    console.log(sum);
}
sum_of_odds();


function iterateArr(Arr1) {
    var sum = 0; 
    for(var i = 0; i < Arr1.length; i++){
        sum += Arr1[i];
        
    }
    
    console.log(sum);

}
iterateArr([1,2,5]);
iterateArr([-5,2,5,12]);

function find_max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);

}
find_max([-3,3,5,7]);

function average(arr) {
    var avg = 0; 
    for(var i = 0; i < arr.length; i++){
        avg += arr[i];
    }
    return avg/arr.length;
    
}
console.log(average([1,3,5,7,20]));
average([1,3,5,7,20]);

function arr_odd() {
    var arr = [];
    for(var i = 1; i <= 50; i++){
        if(i%2!==0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(arr_odd());
arr_odd();

function greaterY(arr, Y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]>Y){
            count += 1;
        }
    }
    console.log(count);
    return count;
}
greaterY([1, 3, 5, 7], 3);

function square(arr) {
    for(var i = 0; i <arr.length; i++){
        arr[i] = arr[i] * arr[i]; 
    }
    console.log(arr);
}
square([1,5,10,-2]);

function negative(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
    return arr;
}
negative([1,5,10,-2]);


function maxAvg (arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum/arr.length;
    var newArr = [max, min, avg];
    console.log(newArr);
    return newArr;
}
maxAvg([1,5,10,-2]);

function swap_values(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr);
}
swap_values([1,5,10,-2]);

function string(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
    return arr;
}
string([-1,-3,2]);