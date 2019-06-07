//listen for submit button
document.getElementById('forms').addEventListener('submit',function(e){
//Hide results 
document.querySelector('.result').style.display = 'none'

//show loader
document.querySelector('#loading').style.display = 'block'

setTimeout(calculateResults, 2000)

e.preventDefault()
})

//calculate results
function calculateResults(){
//ui variables
const amount = document.getElementById('loan')
const interest = document.getElementById('interest')
const years = document.getElementById('years')
const payment = document.getElementById('Monthly')
const total = document.getElementById('Total')
const profit = document.getElementById('Gain') 

const principal = parseFloat(amount.value)
const calculatedInterest = parseFloat(interest.value) /100 / 12
const calculatedPayments = parseFloat(years.value) * 12

//compute monthly payment

const x = Math.pow(1 + calculatedInterest, calculatedPayments)
const monthly = (principal*x*calculatedInterest)/(x-1)
if(isFinite(monthly)){
  payment.value = monthly.toFixed(2)
  total.value = (monthly * calculatedPayments).toFixed(2)
  profit.value = ((monthly * calculatedPayments)-principal).toFixed(2)

//show result
  document.querySelector('.result').style.display = 'block'
//hide loader
  document.querySelector('#loading').style.display = 'none'

}else {
  showError('please check your number')
}

}
//show error

function showError(error){
//Hide results 
document.querySelector('.result').style.display = 'none'

//show loader
document.querySelector('#loading').style.display = 'none'

  const errorDiv = document.createElement('div')

  //get elements
  const container = document.querySelector('.container')
  const heading = document.querySelector('.heading')

  //add class
 
  errorDiv.className = 'alert-danger'
  //create textnode and append to div

  errorDiv.appendChild(document.createTextNode(error))
  //insert error above  heading

  container.insertBefore(errorDiv, heading)

  //clear error after 3 seconds
  setTimeout(clearError, 3000)
}

//clear error
function clearError(){
  document.querySelector('.alert-danger').remove()
}

