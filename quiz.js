var currentQuestion = 0;
var score = 0;
var xmlDoc;

// Load the XML file  // kat9ra lxml mn lfile
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "questions.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;


//kathez les question mn xml ot7thom lik fl html 
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
    optionInput.setAttribute("value", optionText);
    optionsDiv.appendChild(optionInput);

    var optionLabel = document.createElement("label");
    optionLabel.innerHTML = optionText;
    optionsDiv.appendChild(optionLabel);

    optionsDiv.appendChild(document.createElement("br"));
  }
}

//kat7seeb lik kola so2al jbtih s7iz
function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var userAnswer = selectedOption.value;
    var questions = xmlDoc.getElementsByTagName("question");
    var correctAnswer = questions[currentQuestion].getElementsByTagName("option")[0].childNodes[0].nodeValue;

    if (userAnswer === correctAnswer) {
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
// katbyen lik ch7al jbti
function displayResult() {
  var resultDiv = document.getElementById("question");
  resultDiv.innerHTML = "Quiz completed! Your score: " + score + " out of " + xmlDoc.getElementsByTagName("question").length;
  document.getElementById("options").innerHTML = "";
}

// hadi kat3ayt 3la lfonction displayQuestion() mni katcharja lpage bach t7t lik l2as2ila f html
document.addEventListener("DOMContentLoaded", () => {
  displayQuestion()
});
