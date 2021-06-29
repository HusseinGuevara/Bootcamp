function makeBig(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    console.log(arr);
    return arr;
}
makeBig([-1,3,5,-5]);

function lowHigh(arr) {
    var low = arr[0];
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        console.log(low);
        return max;
    }
}
lowHigh([1,2,3]);

function oneAnother(arr) {
    console.log(arr[arr.length-2]);
    for(var i = 0; i < arr.length; i++){
        if(i%2!==0){
            return i;
        }
    }
}
oneAnother([2,5,6,7,9]);

function doubleVision(arr) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
    return arr;
}
doubleVision([2,3,4,5]);

function countPositives(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count += 1;
        }
    }    
        arr.pop();
        arr.push(count);
        console.log(arr);
        return arr;
    
}
countPositives([-1,1,1,1]);

function evensOdds(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1 && arr[i+1] % 2 === 1 && arr[i+2] % 2 === 1){
            console.log("That's Odd!");
        }
        else if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0){
            console.log("Even more so!")
        }                           
    }
}
evensOdds([3,5,7,2,4,6]);

function increment(arr) {
    for(var i = 0; i < arr.length; i++){
        if(i%2===1){
            arr[i] += 1;
        }
    }
    console.log(arr);
    return arr;
}
increment([1,2,3,4,5,6]);

function previousLengths(arr) {
    for(var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    console.log(arr);
    return arr;
}
previousLengths(["hello","dojo","awesome"]);



function addSeven(arr) {
    var arrNew = [];
    for(var i = 0; i < arr.length; i++){
        arrNew.push(arr[i]+7);
    }
    console.log(arrNew);
    return arr;
}
addSeven([1,2,3]);

function reverseArr(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
    return arr;
}
reverseArr([3,1,6,4,2]);

function outlook(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr)
    return arr;
}
outlook([1,-3,5]);

function alwaysHungry(arr) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
        }
        else{
            console.log("Im hungry")
        }
    }
}
alwaysHungry([1,2,3,4,5,"food",3,5,6,2,"food"]);

function swap(arr) {
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    temp1 = arr[2];
    arr[2] = arr[arr.length-3];
    console.log(arr)
    
}
swap([2,4,6,8,10]);

function scaleArr(arr,num) {
    for(var i = 0; i <arr.length; i++){
        arr[i] = arr[i] * num;
    }
    console.log(arr);
}
scaleArr([100,200,300],10);