
welcomepopup();

function welcomepopup(){
  let userName = prompt("Please enter your name:");
  if (userName != ''){
    document.getElementById('welcome-user').innerHTML = userName;
  }
}

function validateForm() {
 const nameInput = document.getElementById('name-input');

 if (nameInput.value === '') {
   alert('Please enter your name.');
   
 } else {
    document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value} for your message!`;
    nameInput.value = ''; // Clear the input field after submission
 }
}