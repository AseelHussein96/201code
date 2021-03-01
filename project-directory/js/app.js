'use strict';

// intero : 
let Name=prompt("before we start please put your name");
alert("Welcome " + Name + "i hope you oki i will ask you some yes or no question ");

// if states for yes or no 
// if for Q1:
let Q1=prompt ("Do you smoke?");
if (Q1.toLowerCase() == 'yes'||Q1.toLowerCase()=='y') {
   alert("wish you would stop smoking");
    console.log("Q1,yes ans");
   
}else if (Q1.toLowerCase() == 'no'||Q1.toLowerCase()=='n') 
{
    alert("GOOD for you");
    console.log("Q1,no ans");
    
}
// if for Q2 : 
let Q2=prompt ("Do you like vanilla ice cream?");
if (Q2.toLowerCase() == 'yes'||Q2.toLowerCase()=='y') {
    alert("like me ");
    console.log("Q2,yes ans");
}else if (Q2.toLowerCase() == 'no'||Q2.toLowerCase()=='n') 
{
    alert("i Prefer Vanilla Ice Cream ");
    console.log("Q2,no ans");

}
// if for Q3 : 
let Q3=prompt ("Have you ever seen a ghost?");
if (Q3.toLowerCase() == 'yes'||Q3.toLowerCase()=='y') {
    alert("Oh no !! Bad for you");
    console.log("Q3,yes ans");
}else if (Q3.toLowerCase() == 'no'||Q3.toLowerCase()=='n') 
{
    alert("lucky ");
    console.log("Q3,no ans");   

}
// if for Q4 : 
let Q4=prompt ("Have they eaten yet?");
if (Q4.toLowerCase() == 'yes'||Q4.toLowerCase()=='y') {
    alert("Bon appetit");
    console.log("Q4,yes ans");

}else if(Q4.toLowerCase() == 'no'||Q4.toLowerCase()=='n') 
{
    alert("i am hungry too ");
    console.log("Q4,no ans");

} 

// if for 5:
let Q5=prompt ("Are you feeling better today?");
if (Q5.toLowerCase() == 'yes'||Q5.toLowerCase()=='y') {
    alert("Thnaks god ");
    console.log("Q5,yes ans");

} else if (Q5.toLowerCase() == 'no'||Q5.toLowerCase()=='n') {
    alert(" get well soon ");
    console.log("Q5,no ans");
}

alert("All the best"+ Name +"wish you all the best in your life.")