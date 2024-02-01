var readLineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;

var levelOne = [{
  question: "What is real name of spiderman? ",
  answer: "Peter Parker"
},
{
  question: "Where is he from? ",
  answer: "Queens"
},
{
  question: "What is the name of Peter's Uncle? ",
  answer: "Ben"
},
{
  question: "Can spiderman fly? ",
  answer: "No"
},
{
  question: "Can spiderman shoot webs? ",
  answer: "Yes"
},
{
  question: "Where do Spiderman shoot his webs from? ",
  answer: "Wrists"
}
];

var levelTwo = [{

  question: "Was spider-man involved in the civil war ? ",
  answer: "Yes"
},
{
  question: "Who gave spider-man his ultimate suit ? ",
  answer: "Iron Man"
},
{
  question: "Who was peter's best friend ? ",
  answer: "Ned"
},
{
  question: "Which newspaper did peter work for ? ",
  answer: "Daily Bugle"
}
]

var highScores = [
  {
    name: "Aryan",
    score: 18,
  },

  {
    name: "Harsh",
    score: 10,
  },
]

function begin() {
  var userName = readLineSync.question("HELLOOO, Who is this? ");

  console.log(chalk.underline.magenta("Ohh hey there " + userName + " ,do you think you know your FRIENDLY NEIGHBOURHOOD SPIDERMAN?" + "\n" + "Let's get started...." + "\n"));
}

console.log(chalk.italic.bold("Instructions : ") + chalk.italic("The game consists of two levels. Level One consists of 6 questions \n") + chalk.italic("and 4 questions in Level Two\n") + chalk.italic.bold.underline("Let's Go !!"));


function checking(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer === answer || userAnswer === answer.toLowerCase()) {
    console.log(chalk.green("you got that right!"));
    score += 2;

  } else {
    console.log(chalk.red("oops ! Wrong Answer"));
  }

  console.log("current score: " + score);
  console.log("-------------------------------------------------");
}

function processing() {
  for (var i = 0; i < (levelOne.length); i++) {
    checking(levelOne[i].question, levelOne[i].answer)
  }

  if (score < 6) {
    console.log(chalk.italic.bold.underline("You failed to clear Level One!"));
  }

  if (score >= 6) {
    console.log("NOICE, you have reached level 2");
    for (var j = 0; j < levelTwo.length; j++) {
      checking(levelTwo[j].question, levelTwo[j].answer)
    }
  }
}

function showScores() {
  console.log(chalk.inverse("You SCORED: " + score + "\n"));

  console.log(chalk.bold.blueBright(`These are the high scorers, if you should be there ping me and I'll update it`));

  highScores.map(score => console.log(score.name, " : ", score.score))
}

begin();
processing();
showScores();