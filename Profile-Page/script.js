debug.console
function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
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