// Based on Udemy course: https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/

var f = function() {
  const question = document.getElementById("question");
  const choices = Array.from(document.getElementsByClassName("choice-text"));
  const progressText = document.getElementById("progressText");
  const scoreText = document.getElementById("score");
  const progressBarFull = document.getElementById("progressBarFull");
  let currentQuestion = {};
  let acceptingAnswers = false;
  let score = 0;
  let questionCounter = 0;
  let availableQuesions = [];

  const questions = [
    {
      question: "Which part of Bender's apartment does Fry end up living in?",
      choice1: "Closet",
      choice2: "Garage",
      choice3: "Car",
      choice4: "Bathroom",
      answer: 1
    },
    {
      question: "Which robots form the Robot Mafia?",
      choice1: "Donbot, Clamps & Machinegun Andy",
      choice2: "Donbot, Clamps & Joey Mousepad",
      choice3: "Donbot, Clammps & Bender",
      choice4: "Donbot, Bender & Joey Mousepad",
      answer: 2
    },
    {
      question: "Who is Lrrr?",
      choice1: "The lizard King",
      choice2: "The Major of New New York",
      choice3: "The ruler of the planet Omicron Persei 8",
      choice4: "The ruler of the Universe",
      answer: 3
    },
    {
      question: "How is Professor Farnsworth related to Fry?",
      choice1: "He is his Uncle",
      choice2: "He is his clone",
      choice3: "He is his grandfather",
      choice4: "He is his nephew",
      answer: 4
    },
    {
      question:
        "In 'Attack of the Killer App' what type of phone is the crew using?",
      choice1: "An iPhone",
      choice2: "An Android 3000",
      choice3: "An eyePhone",
      choice4: "A holophone",
      answer: 3
    },
    {
      question: "What year did 'Futurama' first debut on FOX?",
      choice1: "1999",
      choice2: "2000",
      choice3: "2005",
      choice4: "1988",
      answer: 1
    },
    {
      question:
        "What did Fry do for a living before he accidentally froze himself?",
      choice1: "Cashier",
      choice2: "Pizza delivery boy",
      choice3: "Plumber",
      choice4: "Taxi driver",
      answer: 2
    },
    {
      question: "Why does Bender drink alcohol?",
      choice1: "To get drunk",
      choice2: "To recharge his fuel cells",
      choice3: "To sober up",
      choice4: "To boost his productivity",
      answer: 2
    },
    {
      question:
        "What is Fry's ATM pin? (Hint: It's the price of a cheese pizza and large soda at Panucci's Pizza)",
      choice1: "1215",
      choice2: "1150",
      choice3: "1077",
      choice4: "1212",
      answer: 3
    },
    {
      question: "What planet is Amy Wong from?",
      choice1: "Mars",
      choice2: "Earth",
      choice3: "Saturn",
      choice4: "Uranus",
      answer: 1
    },
    {
      question: "What class does Professor Farnsworth teach?",
      choice1: "Exploring Black Holes: General Relativity & Astrophysics",
      choice2: "Many-Body Theory for Condensed Matter Systems",
      choice3:
        "Selected Topics in Theoretical Particle Physics: Branes and Gauge Theory Dynamics",
      choice4: "Mathematics of Quantum Neutrino Fields",
      answer: 4
    },
    {
      question:
        "What did Professor Farnsworth's Smell-o-Scope locate in space?",
      choice1: "Smelly Planet",
      choice2: "Ball of Garbage",
      choice3: "Socks",
      choice4: "Cheese",
      answer: 2
    },
    {
      question: "What's Fry's favorite pizza topping?",
      choice1: "Sausages",
      choice2: "Pepperoni",
      choice3: "Cheese",
      choice4: "Anchovies",
      answer: 4
    },
    {
      question: "Where does Fry first meet Bender?",
      choice1: "Bank",
      choice2: "Suicide booth",
      choice3: "Restaurant",
      choice4: "Phone booth",
      answer: 2
    }
  ];

  //CONSTANTS
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 10;

  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
  };

  getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem("mostRecentScore", score);
      //go to the end page
      return window.location.assign("../src/end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
  };

  choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];

      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if (classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
      }

      selectedChoice.parentElement.classList.add(classToApply);

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 300);
    });
  });

  incrementScore = num => {
    score += num;
    scoreText.innerText = score;
  };

  startGame();
};
f();
