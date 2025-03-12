const scriptURL = 'https://script.google.com/macros/s/AKfycbyS8E4jhApn2gucwJfepMMcIsOTGZFjvjDN8DafE9kIepDL5ae9TT4RhwG_RaTVrs4J/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})