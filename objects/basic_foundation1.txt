function a(){       //35
    return 35;
}
console.log(a())

function a(){       //8
    return 4;
}
console.log(a()+a());

function a(b){      //6
    return b;
}
console.log(a(2)+a(4));

function a(b){          //3
        console.log(b); //9
        return b*3;
}
console.log(a(3));

function a(b){      //10 *wrong     //On my first run my outcome was wrong. After the return statement the funtion 
    return b*4;     //40            //ends and does not run line 24. 
    console.log(b); 
}                   //40 *correct
console.log(a(10));

function a(b){      //4
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

function a(b,c){    //10, 3 *wrong      //My outcome sytex was wrong. I expected 10, 3. Correct was 10 3, no comma. 
    return b*c;     //30
}
console.log(10,3);      //10 3 
console.log( a(3,10) ); //30

function a(b){                  //0 *wrong      //The function never gets called so the for loop does no get
    for(var i=0; i<10; i++){    //1             //initiated. 
        console.log(i);         //2             //3 *correct
    }                           //3             //4
    return i;                   //4  
}                               //5
console.log(3);                 //6
console.log(4);                 //7
                                //8
                                //9    
                                //3
                                //4

function a(){                   //2
    for(var i=0; i<10; i++){    //5
        i = i +2;               //8
        console.log(i);         //11
    }
}
a();

function a(b,c){                //0
    for(var i=b; i<c; i++) {    //1
        console.log(i);         //2
    }                           //3
    return b*c;                 //4
}                               //5
a(0,10);                        //6
console.log(a(0,10));           //7
                                //8  
                                //9
                                //0
                                //1
                                //2
                                //3
                                //4
                                //5
                                //6
                                //7
                                //8
                                //9
                                //0

function a(){                   //0  *wrong     //I actually did a T diagram for the code. Failed to reaalize 
    for(var i=0; i<10; i++){    //1             //faile to realize it never got called.
        for(var j=0; j<10; j++){//2
            console.log(j);     //3
        }                       //4
        console.log(i);         //5
    }                           //6
}                               //7
                                //8
                                //9
                                //0
                                
function a(){                   //Funtion never gets called so it never ran.
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

var z = 10;             //10    Function never gets ran so it only console.log(10) 
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

var z = 10;         //15
function a(){       //10
    var z = 15;
    console.log(z);
}
a();
console.log(z);

var z = 10;         //15
function a(){       //15
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

                                