var sum = 0;                                //Num:1, Sum:1
for(var i = 1; i <= 5; i++){                //Num:2, Sum:3
    sum+= i;                                //Num:3, Sum:6
    console.log("Num:" + i,"Sum:" + sum);   //Num:4, Sum:10
}                                           //Num:5, Sum:15
return sum;