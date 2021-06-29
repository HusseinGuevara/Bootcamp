var sum = 0;                                            //Num:6 Sum:6
var testArr = [6,3,5,1,2,4]                             //Num:3 Sum:9
for(var i = 0; i < testArr.length; i++){                //Num:5 Sum:14
    sum += testArr[i];                                  //Num:1 Sum:15
    console.log("Num:" + testArr[i], "Sum:" + sum);     //Num:2 Sum:17
}                                                       //Num:4 Sum:21
return sum;