console.log('welcome to this QUIZ where we test how much : DO YOU KNOW HRITIK :)')
console.log("-------------------")


var readlineSync=require('readline-sync');
var userAnswer=readlineSync.question("whats your name ");


console.log("Welcome :"+userAnswer,"!! you loook so energetic today, Isn't It ? Lets start quiz ");
console.log("-------------")

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

play ("1)what is Hritik's hobbie ","coding");

play("2)How old is Hritik ","21")

console.log("      :lets make it more tricky, hahaha: ");

   console.log("-------------")

play ("3)If Hritik could wake up with a completely different permanent hair color,   what would it be? ","blue");




// /array of objects
var questions=[{
  question:"4)What is Hritik's favorite series on Netflix? ",
  answer:"you"

},{
  question:"5)If Hritik could be a cartoon character for a day, who would it be? ",
  answer:"shinchan"
  
  }];
//loop
  for(var i=0;i<questions.length;i++)
  { var currentQuestion=questions[i];

    play(currentQuestion.question,currentQuestion.answer)
  }

  console.log("hurrey your total score is= ",score);
  console.log("----------last-----------")
  var final=readlineSync.question("do you want your answers to send it to hritik");
  
  
console.log(":) Response updated, !! Thanks for answering this quiz")
  

