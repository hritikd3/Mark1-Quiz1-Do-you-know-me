var readlineSync=require('readline-sync');
var userAnswer=readlineSync.question("whats your name ");

console.log("Welcome :"+userAnswer);
console.log("=====")

//play function
var score=0;
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
   if (userAnswer===answer)
   {
     console.log("you are right");
score=score+1;
console.log(score)
   }else
   {
     console.log("you are wrong");
     score=score-1;
console.log(score)
   }
   console.log("-------------")
}

play ("where do you live ","indore");
play ("do you like programming ","yes");


// /array of objects
var questions=[{
  question:"so where do you work",
  answer:"home"

},{
  question:"you like tea",
  answer:"yes"
  }];

//loop
  for(var i=0;i<questions.length;i++)
  { var currentQuestion=questions[i];

    play(currentQuestion.question,currentQuestion.answer)
  }

  console.log("hurrey you scored ",score);

