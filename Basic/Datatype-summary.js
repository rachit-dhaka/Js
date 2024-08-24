// type of datatype

// primitive datatype : 7
/*
-Strings 
-Numbers
-Boolean
-NULL
-Undined
-Symbol
-Big int



Non primitive data type
array , ojects , functions 

ARRAY : 

 */


// array 
const skills=["C++","js","sql"]
// objects 
let myobj={
 name :"rachit ",
 age:22,
}

// fuctions
const myFunctions=function(){
    console.log("hello world");
    
}

// ------------------------------------------------Memory notes -------------------------------------------
// stack memory (primitive ) and heap memory (non primitive )
// stack memory -> copy create ki jathi hai 
// head memory -> pass by refrence -> direct value me change kiya jatha hai 

let myname="rachit"
let myotherName=myname
myotherName="chai or cp"
console.log(myname);
console.log(myotherName);





// fuction me sidha original value me change hotha hai 
let user={
    email:"rachitdhaka29@gmail.com",
    contact:"9176647509",
}
let user2=user
user2.email="rachitdhaka07@gmail.com"

// console.log(user.email);
// console.log(user2.email);
// console.log(user.contact);




