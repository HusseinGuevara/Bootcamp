var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];
    console.log(users[1].age); //Johns age
    console.log(users[0].name);//Micheal
    
      for(var i = 0; i < users.length; i++){
        console.log(users[i].name,"-",users[i].age);
      }










    //function people(user){
  //  for(var i = 0; i < user.length; i++){
    //    console.log(user[i].name);
      //  console.log(user[i].age);
    //}
    //return user;
//}
//people();