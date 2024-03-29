/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Transformers with high leakage impedance is used in",  ///// Write the question inside double quotes
      answers: {
        a: "power generating terminals",                  ///// Write the option 1 inside double quotes
        b: "power distribution",                  ///// Write the option 2 inside double quotes
        c: "arc welding",                  ///// Write the option 3 inside double quotes
        d: "none of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
     question: "If the per unit leakage impedance for the primary of a transformer is ‘x’ on the given rated base value. If the voltage and volt-amperes are halved, then the changed per unit impedance will be",  ///// Write the question inside double quotes
      answers: {
        a: "0.5x",                  ///// Write the option 1 inside double quotes
        b: "2x",                  ///// Write the option 2 inside double quotes
        c: "4x",                  ///// Write the option 3 inside double quotes
        d: "x"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

{
      question: "The voltage regulation for transformer is given by",  ///// Write the question inside double quotes
      answers: {
        a: "(E2-V2)/E2",                  ///// Write the option 1 inside double quotes
        b: "(E2-V2)/V2",                  ///// Write the option 2 inside double quotes
        c: "(V2-E2)/E2",                  ///// Write the option 3 inside double quotes
        d: "(V2-E2)/V2"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: "A 2000/1000/500 three winding transformer is to be used as auto transformer with supply of 3000 V. Two loads of 1050 kVA at 3500V, and other one at 180 kVA at 1000V. The total kVA supplied will be",  ///// Write the question inside double quotes
      answers: {
        a: "1150 kVA",                  ///// Write the option 1 inside double quotes
        b: "1440 kVA",                  ///// Write the option 2 inside double quotes
        c: "1680 kVA",                  ///// Write the option 3 inside double quotes
        d: "1230 kVA"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },


    {
      question: "Two single phase transformers A and B are operating in parallel having same impedance. But the x/r ratio of them are not equal. Then total kVA output will be",  ///// Write the question inside double quotes
      answers: {
        a: "equal to sum of kVA of A and B",                  ///// Write the option 1 inside double quotes
        b: "more than sum of kVA of A and B",                  ///// Write the option 2 inside double quotes
        c: "less than sum of kVA of A and B",                  ///// Write the option 3 inside double quotes
        d: "any of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////