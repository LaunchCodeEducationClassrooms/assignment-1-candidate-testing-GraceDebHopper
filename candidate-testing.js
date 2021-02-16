const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';                                      

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';  
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';                       
let questions = ['Who was the first American woman in space? ','True or false: 5000 meters == 5 kilometers. ', '(5 + 3)/2 * 10 = ? ',"Given the array [8, 'Orbit',  'Trajectory', 45], what entry is at index 2? ",'What is the minimum crew size for the International Space Station (ISS)? '
];
//console.log(questions);                                         
let correctAnswers = ["Sally Ride","True","40","Trajectory","3"];
//console.log(correctAnswers);                    
let candidateAnswers = [];
//let numCorrect = 0;

function askForName() {                                       
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Please enter your name: '); 
}

function askQuestion() {                                      
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  for(i=0;i<questions.length;i++){
    candidateAnswers[i] = input.question(questions[i]);
  }
  //console.log(candidateAnswers);                
}

function gradeQuiz(candidateAnswers) {                        

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  /*if(candidateAnswer === correctAnswer){                    
    console.log('Your answer is correct.');                 
  } else {                                                  
    console.log('Your answer is not correct.')             
  }*/
  let numCorrect = 0;
  for(i=0;i<candidateAnswers.length;i++){
    console.log(`${i+1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
    if(candidateAnswers[i].toLowerCase()===correctAnswers[i].toLowerCase()){
      numCorrect = numCorrect + 1;
    }
  }
  //console.log(numCorrect);
    
  let grade = 0;
  grade = numCorrect/questions.length*100;                                                  
  //console.log(grade);

  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<<`);
  if(grade>=80){
    console.log(`>>> Status: PASSED <<<`);
  } else {
    console.log(`>>> Status: FAILED <<<`);
  }
  return grade;                                               
}

function runProgram() {                                     
  askForName();                                             
  // TODO 1.1c: Ask for candidate's name //
  //console.log('Candidate Name: ' + candidateName);       
  askQuestion();
  console.log('Candidate Name: ' + candidateName);
  gradeQuiz(this.candidateAnswers);                       
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};