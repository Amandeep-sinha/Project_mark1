var read = require('readline-sync');
const c = require("chalk");
score=0;
var uname = read.question(c.bold.underline.red("Hey, May I have your name ? \n"));
console.log("Welcome "+ uname+" !" +"\n nice to see you here in the Game :) \n  " );
//var a= read.question(c.red("So, Are you prepared for this quiz   (yes/no)"));
//if (a.toLowerCase() === "yes" )

  console.log(c.blue("So, Lets see how much do you know about me. \n"));
  var q1={
    q :"\n\nwhat is my name\n",
    ans: "amandeep"}

    var q2={
    q :"which city i live \n",
    ans: "bokaro steel city"}

    var q3={
    q :"which college i am from? \n ",
    ans: "bit mesra"}

    var q4={
    q :"what's the thing i am passionate about ? \n",
    ans: "coding"}

    var q5={
    q :"what's my favourite food ?\n ",
    ans: "chicken biryani"}

    var q6={
    q :"how many siblings do i have ? \n",
    ans: "0"}

    var q7={
    q :"My stream in school  ? \n",
    ans: "science"}

    var q8={
    q :"My branch in college ? \n",
    ans: "bca"}

    var q9={
    q :"what do you think will u get full marks in this quiz ? \n",
    ans: "yes"}

    var q10={
    q :"Do u liked this quiz ? \n",
    ans: "yes"}

    function play(question,answer){
      var temp=read.question(c.red(question));
      if(temp.toLowerCase() === answer){
        console.log(c.green("You are Right!!!  you got 1 point for this\n"));
        score++;
      }
      else{
        console.log(c.yellow("OOps! You are Wrong,  you lost 1 point for this\n"));
        score--;
      }
    }

    var ar=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
    var n= ar.length;
    for(var i=0;i<n;i++){
      var cur = ar[i];
      play(cur.q,cur.ans);
    }

// else{
//   console.log("OK go prepare for the quiz We'll catchup later \n --------------Thanks------------");
// }
// if(a.toLowerCase()==="yes")
console.log("Thanks for playing the game, You scored ", score);