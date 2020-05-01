// Quiz questions
let questions = [
  {
    question: "Javascript is ______ language.",
    answer: "Scripting",
    options: [
      "Application",
      "Scripting",
      "Programming",
      "None of these"
    ]
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answer: "style",
    options: [
      "font",
      "style",
      "class",
      "styles"
    ]
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets"
    ]
  },
  {
    question: "Who is making the Web standards?",
    answer: "W3C",
    options: [
      "W3C",
      "Mozilla",
      "Microsoft",
      "Google"
    ]
  },
  {
    question: "JavaScript is ______ Side Scripting Language.",
    answer: "Browser",
    options: [
      "Browser",
      "Server",
      "ISP",
      "None of these"
    ]
  },
  {
    question: "What is the correct HTML for adding a background color?",
    answer: '&lt;body style="background-color:yellow;"&gt;',
    options: [
      "&lt;background&gt;yellow&lt;/background&gt;",
      '&lt;body style="background-color:yellow;"&gt;',
      '&lt;body bg="yellow"&gt;',
      "None of these"
    ]
  },
];

window.onload = function() {
  show(question_count);
};

let question_count = 0;
let points = 0;
sessionStorage.setItem("points", points);
let total = questions.length;
sessionStorage.setItem("total", total);

// Button events
const buttonnxt = document.querySelector('.btn-next');
buttonnxt.addEventListener('click', next);
const buttonpre = document.querySelector('.btn-prev');
buttonpre.addEventListener('click', prev);
const buttonsub = document.querySelector('.btn-sub');
buttonsub.addEventListener('click', sub);

// Function for Next button
function next() { 
  question_count++;
  show(question_count);
  if(question_count === 1) {
    buttonpre.classList.add('enable');  
  } else if(question_count === questions.length - 1) {
    buttonnxt.classList.add('disable');
  }    
}

// Function for Previous button
function prev() {
  question_count--;
  show(question_count);
  if(question_count === 0) {
    buttonpre.classList.remove('enable');  
  } else {
    buttonnxt.classList.remove('disable');
  }    
}

// Function for Submit button
function sub() {
  let choice = confirm('Are you shure you want to submit this quiz?');
  if(choice === true){
    sessionStorage.setItem("time", t);
    clearInterval(userTime);
    location.href = "result.html"; 
  }
}

// Function to check whether user selection is correct not
function correctAnswer(user_answer) {
  for (let i = 0; i < questions.length; i++) {
    if (user_answer === questions[i].answer) {
      points++;
    }
  } 
  sessionStorage.setItem("points",points);
}

// Function to show quiz questions and options
function show(number) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[number].options;

  question.innerHTML = `
  <h3>Q${number + 1}. ${questions[number].question}</h3>
  <ul class="option-group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
  `;
  selectAnswer();
}

// Function to select answer
function selectAnswer() {
  let option = document.querySelectorAll(".option");
  for (let i = 0; i<option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i<option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
      let user_answer = option[i].innerHTML;
      correctAnswer(user_answer);
    };
  }
}