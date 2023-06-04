var currentQuestion = 0;
var score = 0;
var xmlDoc;

// Load the XML file
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "questions.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

/** display questions in the page 'index.html' **/
function displayQuestion() {
  var questions = xmlDoc.getElementsByTagName("question");
  var question = questions[currentQuestion].getElementsByTagName("text")[0].childNodes[0].nodeValue;
  var options = questions[currentQuestion].getElementsByTagName("option");

  var questionDiv = document.getElementById("question");
  questionDiv.innerHTML = question;

  var optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (var i = 0; i < options.length; i++) {
    var optionText = options[i].childNodes[0].nodeValue;
    var optionInput = document.createElement("input");
    optionInput.setAttribute("type", "radio");
    optionInput.setAttribute("name", "option");
    optionInput.setAttribute("value", i); // Store the index as the value
    optionsDiv.appendChild(optionInput);

    var optionLabel = document.createElement("label");
    optionLabel.innerHTML = optionText;
    optionsDiv.appendChild(optionLabel);

    optionsDiv.appendChild(document.createElement("br"));
  }
}

/** check the correct answers **/
function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var userAnswerIndex = parseInt(selectedOption.value); // Parse the index as an integer
    var questions = xmlDoc.getElementsByTagName("question");

    // Store the user's selected answer in the XML file
    questions[currentQuestion].getElementsByTagName("userAnswer")[0].childNodes[0].nodeValue = userAnswerIndex;

    var correctAnswerIndex = parseInt(questions[currentQuestion].getAttribute("correctAnswer")); // Get the correct answer index

    if (userAnswerIndex === correctAnswerIndex) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

/** display the result **/
function displayResult() {
  var resultDiv = document.getElementById("question");
  resultDiv.innerHTML = "Quiz completed! Your score: " + score + " out of " + xmlDoc.getElementsByTagName("question").length;
  document.getElementById("options").innerHTML = "";

  var questions = xmlDoc.getElementsByTagName("question");
  var feedbackDiv = document.getElementById("feedback");
  feedbackDiv.innerHTML = "Feedback:<br>";

  for (var i = 0; i < questions.length; i++) {
    var questionText = questions[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;
    var options = questions[i].getElementsByTagName("option");
    var correctAnswerIndex = parseInt(questions[i].getAttribute("correctAnswer")); // Get the correct answer index
    var userAnswerIndex = parseInt(questions[i].getElementsByTagName("userAnswer")[0].childNodes[0].nodeValue); // Get the user's answer index

    var correctAnswer = options[correctAnswerIndex].childNodes[0].nodeValue;
    var userAnswer = options[userAnswerIndex].childNodes[0].nodeValue;

    feedbackDiv.innerHTML += "<br>Question " + (i + 1) + ": " + questionText + "<br>";
    feedbackDiv.innerHTML += "Correct Answer: " + correctAnswer + "<br>";

    if (userAnswerIndex === correctAnswerIndex) {
      feedbackDiv.innerHTML += "Your Answer: " + userAnswer + " (Correct)<br>";
    } else {
      feedbackDiv.innerHTML += "Your Answer: " + userAnswer + " (Incorrect)<br>";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayQuestion();
});
