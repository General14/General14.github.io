debug.console
function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
var myQuestions = [
	{
		question: "What is the capital of India?",
		answers: {
			a: 'Mumbai',
			b: 'New Delhi',
			c: 'Chennai'
		},
		correctAnswer: 'b'
	},
	{
		question: "Who invented the lightbulb?",
		answers: {
			a: 'Thomas Edison',
			b: 'Albert Einstein',
			c: 'Alexander Graham Bell'
		},
		correctAnswer: 'a'
	}
];
showQuestions(questions, quizContainer);
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
