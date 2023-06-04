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
    var userAnswerIndex = null;

    for (var j = 0; j < options.length; j++) {
      if (options[j].childNodes[0].nodeValue === questions[i].getElementsByTagName("userAnswer")[0].childNodes[0].nodeValue) {
        userAnswerIndex = j;
        break;
      }
    }

    var correctAnswer = options[correctAnswerIndex].childNodes[0].nodeValue;
    var userAnswer = userAnswerIndex !== null ? options[userAnswerIndex].childNodes[0].
