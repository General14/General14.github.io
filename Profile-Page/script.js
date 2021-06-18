debug.console
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
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