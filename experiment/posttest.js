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
      question: "While conducting testing on the single phase transformer, one of the student tries to measure the resistance by putting an ammeter across one terminal of primary and other to secondary, the reading obtained will be",  ///// Write the question inside double quotes
      answers: {
        a: "infinite",                  ///// Write the option 1 inside double quotes
        b: "zero",                  ///// Write the option 2 inside double quotes
        c: "finite",                  ///// Write the option 3 inside double quotes
        d: "negative finite"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "While estimating voltage regulation of a transformer, keeping",  ///// Write the question inside double quotes
      answers: {
        a: "secondary voltage constant",                  ///// Write the option 1 inside double quotes
        b: "primary voltage constant",                  ///// Write the option 2 inside double quotes
        c: "voltage changes constant at primary",                  ///// Write the option 3 inside double quotes
        d: "all of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

    {
      question: "The efficiency of a 20 KVA, 2000/200 V, single phase transformer at unity pf is 98%. The the total losses at this condition is",  ///// Write the question inside double quotes
      answers: {
        a: "408W",                  ///// Write the option 1 inside double quotes
        b: "4.08kW",                  ///// Write the option 2 inside double quotes
        c: "204W",                  ///// Write the option 3 inside double quotes
        d: "2.04kW"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },    


    {
      question: "The efficiency of a 20 KVA, 2000/200 V, single phase transformer at unity pf is 98%. The given total losses at full load is 200 W. The pu resistance is",  ///// Write the question inside double quotes
      answers: {
        a: "0.1",                  ///// Write the option 1 inside double quotes
        b: "0.01",                  ///// Write the option 2 inside double quotes
        c: "1.0",                  ///// Write the option 3 inside double quotes
        d: "0.0196"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },    



    {
      question: "Transformer operating in parallel will share a common load in the best possible manner if",  ///// Write the question inside double quotes
      answers: {
        a: "leakage impedances are proportional to their kVA rating",                  ///// Write the option 1 inside double quotes
        b: "leakage impedances are equal",                  ///// Write the option 2 inside double quotes
        c: "pu leakage impedances are equal",                  ///// Write the option 3 inside double quotes
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