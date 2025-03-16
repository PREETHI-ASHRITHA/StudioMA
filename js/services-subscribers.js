
const scriptURL = 'https://script.google.com/macros/s/AKfycbzuLbav0Uun7zLJdI_4rtwk0DqFYLlEp9GWLWPo9FSRxIhhkigAEi_qzJouZaNkpxqB/exec'
const form = document.forms['subscribe_form']
const successMsg = document.getElementById("successMsg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        successMsg.innerHTML = "Thanks for Subscribing! <br>You'll now be added to our list and will recieve our updates!"
        setTimeout(function(){
          successMsg.innerHTML = "<br> <br>"
        }, 8000)
        form.reset()
        })

    .catch(error => console.error('Error!', error.message))
})
