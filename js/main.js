const allInputs = document.querySelectorAll('input')
const allBtn = document.querySelectorAll('.btn')
const allErrorsP = document.querySelectorAll('.input__error')
const wrapperRight = document.querySelector('.wrapper__right')
const monthBtns = document.querySelector('.month__div-btn')

const checkInputs = () => {
	for (let i = 0; i < allInputs.length; i++) {
		if (allInputs[i].value == '') {
			allErrorsP[i].classList.add('error-message')
			allInputs[i].classList.add('error-background')
		} else {
			allErrorsP[i].classList.remove('error-message')
			allInputs[i].classList.remove('error-background')
		}
	}

	const wrongInputs = document.querySelectorAll('.error-background')
	console.log(wrongInputs)

	if (wrongInputs.length == 0) {
		addSchedule()
	}
}

const clearInputs = () => {
	allInputs.forEach(input => {
		input.value = ''
		input.classList.remove('error-background')
	})
	allErrorsP.forEach(p => {
		p.classList.remove('error-message')
	})
	wrapperRight.textContent = ''
	monthBtns.classList.remove('show-btn')
}

const addSchedule = () => {
	wrapperRight.textContent = ''
	const startDate = new Date(allInputs[0].value)
	const startDateMonth = startDate.getMonth()
	const startDateYear = startDate.getFullYear()
	const endDate = new Date(allInputs[1].value)
	const endDateMonth = endDate.getMonth()
	const endDateYear = endDate.getFullYear()
	let diffMonth = 0
	let diffYear = endDateYear - startDateYear
	const billingValue = allInputs[2].value
	console.log(startDateYear)
	console.log(endDateYear)
	if (endDateYear - startDateYear == 1) {
		diffMonth = 12 - startDateMonth + endDateMonth + 1
		console.log(diffMonth)
	} else if (endDateYear - startDateYear > 1) {
		diffMonth = 12 * diffYear + 12 - startDateMonth + endDateMonth + 1
		console.log(diffMonth)
	} else {
		diffMonth = endDateMonth - startDateMonth + 1
	}

	for (let i = 0; i < diffMonth; i++) {
		const newDiv = document.createElement('div')
		newDiv.classList.add('month__wrapper')
		const dateInput = document.createElement('input')
		dateInput.classList.add('month__input', 'month__date')
		dateInput.setAttribute('type', 'date')
		const amountInput = document.createElement('input')
		amountInput.classList.add('month__input', 'month__amount')
		amountInput.value = parseFloat(billingValue / diffMonth).toFixed(2)
		newDiv.appendChild(dateInput)
		newDiv.appendChild(amountInput)
		wrapperRight.appendChild(newDiv)
	}

	monthBtns.classList.add('show-btn')
}

const addMonthLine = () => {
	const newDiv = document.createElement('div')
	newDiv.classList.add('month__wrapper')
	const dateInput = document.createElement('input')
	dateInput.classList.add('month__input', 'month__date')
	dateInput.setAttribute('type', 'date')
	const amountInput = document.createElement('input')
	amountInput.classList.add('month__input', 'month__amount')
	newDiv.appendChild(dateInput)
	newDiv.appendChild(amountInput)
	wrapperRight.appendChild(newDiv)
	const billingValue = allInputs[2].value

	const allMonthInputs = document.querySelectorAll('.month__amount')

	allMonthInputs.forEach(input => {
		input.value = parseFloat(billingValue / allMonthInputs.length).toFixed(2)
	})
}

const removeMonthLine = () => {
	const billingValue = allInputs[2].value
	wrapperRight.removeChild(wrapperRight.lastChild)
	const allMonthInputs = document.querySelectorAll('.month__amount')

	allMonthInputs.forEach(input => {
		input.value = parseFloat(billingValue / allMonthInputs.length).toFixed(2)
	})
}

allBtn[0].addEventListener('click', checkInputs)
allBtn[1].addEventListener('click', clearInputs)
allBtn[2].addEventListener('click', addMonthLine)
allBtn[3].addEventListener('click', removeMonthLine)
allBtn[4].addEventListener('click', checkMonths)

// This is first function adding billing schedule but it was working only within one year

// const addSchedule = () => {
// 	wrapperRight.textContent = ''
// 	const startDate = new Date(allInputs[0].value)
// 	const startDateMonth = startDate.getMonth()
// 	const startDateYear = startDate.getFullYear()
// 	const endDate = new Date(allInputs[1].value)
// 	const endDateMonth = endDate.getMonth()
// 	const endDateYear = endDate.getFullYear()
// 	const diffMonth = endDateMonth - startDateMonth + 1
// 	const billingValue = allInputs[2].value

// 	for (let i = 0; i < diffMonth; i++) {
// 		const newDiv = document.createElement('div')
// 		newDiv.classList.add('month__wrapper')
// 		const dateInput = document.createElement('input')
// 		dateInput.classList.add('month__input', 'month__date')
// 		dateInput.setAttribute('type', 'date')
// 		const amountInput = document.createElement('input')
// 		amountInput.classList.add('month__input', 'month__amount')
// 		amountInput.value = parseFloat(billingValue / diffMonth).toFixed(2)
// 		newDiv.appendChild(dateInput)
// 		newDiv.appendChild(amountInput)
// 		wrapperRight.appendChild(newDiv)
// 	}

// 	monthBtns.classList.add('show-btn')
// }
