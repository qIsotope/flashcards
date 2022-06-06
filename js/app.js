let addQuestion = document.getElementById('show-btn')
let questionCard = document.querySelector('.question-card')
let closeQuestionCard = document.querySelector('.fa-window-close')
let feedback = document.querySelector('.feedback')
// open/close questionCard

addQuestion.addEventListener('click', () => {
	questionCard.classList.add('showItem')
})
closeQuestionCard.addEventListener('click', () => {
	questionCard.classList.remove('showItem')
})

// save quest-answerCard
let saveQuestion = document.querySelector('.submitBtn')
let questionsList = document.getElementById('questions-list')
let questionInput = document.getElementById('question-input')
let answerInput = document.getElementById('answer-input')
saveQuestion.addEventListener('click', (event) => {
	event.preventDefault()
	let question = event.target.parentElement.children[1].children[0].value
	let answer = event.target.parentElement.children[3].children[0].value
	console.log(question)
	if (!question || !answer) {
		feedback.innerHTML = 'Cannot added empty values'
		feedback.classList.add('alert-danger')
		feedback.classList.add('showItem')
		questionInput.addEventListener('input', () => {
			feedback.classList.remove('showItem')
		})
		answerInput.addEventListener('input', () => {
			feedback.classList.remove('showItem')
		})
	}

	else {

		questionsList.insertAdjacentHTML('beforeend', `<div class="col-md-4">
	 <div class="card card-body flashcard my-3">
<h4 class="text-capitalize">${question}</h4>
<a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
<h5 class="answer mb-3">${answer}</h5>
<div class="flashcard-btn d-flex justify-content-between">
<a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
<a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
</div>`)
	}
	questionInput.value = ''
	answerInput.value = ''
})


// quest-answerCard buttons

questionsList.addEventListener('click', (event) => {
	event.preventDefault()
	if (event.target.classList.contains('show-answer')) {
		event.target.nextElementSibling.classList.toggle('showItem')
		console.log(event.target.nextElementSibling)
	}
	else if (event.target.classList.contains('delete-flashcard')) {
		event.target.closest('.col-md-4').remove()
	}
	else if (event.target.classList.contains('edit-flashcard')) {
		questionInput.value = event.target.parentElement.parentElement.children[0].innerHTML
		event.target.closest('.col-md-4').remove()
	}
})

