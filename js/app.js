'use strict';

// intero : 
let count = 0;
let Name = prompt("Before we start please put your name");
alert("Welcome " + Name + "i hope you are ok , lets start the gusseing game ");

// if states for yes or no 
// if for Q1:
let Q1 = prompt("Do you smoke?");
if (Q1.toLowerCase() == 'yes' || Q1.toLowerCase() == 'y') {
    alert("wish you would stop smoking");
    console.log("Q1,yes ans");
    count++;

} else if (Q1.toLowerCase() == 'no' || Q1.toLowerCase() == 'n') {
    alert("GOOD for you");
    console.log("Q1,no ans");

}
// if for Q2 : 
let Q2 = prompt("Do you like vanilla ice cream?");
if (Q2.toLowerCase() == 'yes' || Q2.toLowerCase() == 'y') {
    alert("like me ");
    console.log("Q2,yes ans");
    count++;
} else if (Q2.toLowerCase() == 'no' || Q2.toLowerCase() == 'n') {
    alert("I Prefer Vanilla Ice Cream ");
    console.log("Q2,no ans");

}
// if for Q3 : 
let Q3 = prompt("Have you ever seen a ghost?");
if (Q3.toLowerCase() == 'yes' || Q3.toLowerCase() == 'y') {
    alert("Oh no !! Bad for you");
    console.log("Q3,yes ans");
    count++;
} else if (Q3.toLowerCase() == 'no' || Q3.toLowerCase() == 'n') {
    alert("lucky ");
    console.log("Q3,no ans");

}
// if for Q4 : 
let Q4 = prompt("Have you eaten yet?");
if (Q4.toLowerCase() == 'yes' || Q4.toLowerCase() == 'y') {
    alert("Bon appetit");
    console.log("Q4,yes ans");
    count++;

} else if (Q4.toLowerCase() == 'no' || Q4.toLowerCase() == 'n') {
    alert("i am hungry too ");
    console.log("Q4,no ans");

}

// if for 5:
let Q5 = prompt("Are you feeling better today?");
if (Q5.toLowerCase() == 'yes' || Q5.toLowerCase() == 'y') {
    alert("Thnaks god ");
    console.log("Q5,yes ans");
    count++;

} else if (Q5.toLowerCase() == 'no' || Q5.toLowerCase() == 'n') {
    alert(" get well soon ");
    console.log("Q5,no ans");
}

let guess = 16;
for (let i = 0; i < 4; i++) {
    let x = prompt('try to guess my birthday?');
    if (x == guess) {
        alert('you guess it right');
        count++;
        break;
    } else if (x < guess) {
        alert('You too low try again');
    } else {
        alert("you're too high");
    }
    if (i == 3) {
        alert('The corret answer was 16')
    }

}
let FavMovie = ['action ', 'comedy', 'adventure'];
let hints = ['love to laugh', 'not boring', 'alot of sound', 'some of ppl think its annyoing', 'not love story', 'can watch them 3d'];
for (let i = 1; i <= 6; i++) {
    let movie = prompt('try to know my favourite type of movie');

    if (movie == FavMovie[0] || movie == FavMovie[1] || movie == FavMovie[2]) {
        alert('Thats right i suggest you to see knives out movie');
        break;
    } else if (movie !== FavMovie[0] || movie !== FavMovie[1] || movie !== FavMovie[2]) {

        alert(hints[i]);
    }
    if(i==6) {
        alert('THE correct answer is :action,comedy and adventure');
    }

}





alert("You look great today." + Name + "i wish you had fun here in my guessing game your total result was"  + count +  "hope something good happen to you today.");