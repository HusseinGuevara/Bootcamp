var testArr = [6,3,5,1,2,4];                    //[0,3,10,3,8,20]
for(var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i]*i;
}
console.log(testArr);
return testArr;
