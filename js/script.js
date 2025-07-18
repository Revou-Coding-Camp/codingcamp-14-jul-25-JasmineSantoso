
welcomepopup();

function welcomepopup(){
  let userName = prompt("Please enter your name:");
  if (userName != ''){
    document.getElementById('welcome-user').innerHTML = userName;
  } else {
    alert('Please enter your name to continue');
    welcomepopup();
  }
}

function validateForm() {
 const nameInput = document.getElementById('name-input');
 const birthDateInput = document.getElementById('birth-date');
 const genderInput = document.getElementsByName('gender');
 const messageInput = document.getElementById('message-us');

 // Validate name
 if (nameInput.value === '') {
   alert('Please enter your name.');
   nameInput.focus();
   return;
   
 } 

 // Validate birth date
 if (birthDateInput.value === '') {
   alert('Please enter your birth date.');
   birthDateInput.focus();
   return;
 } 

 const birthDate = new Date(birthDateInput.value);
 const today = new Date();
 today.setHours(0,0,0,0); // Reset time to midnight for comparison

 // Validate gender
 let genderSelected = false;
 for (let gender of genderInput) {
    if (gender.checked) {
        genderSelected = true;
        break;
    }
 }
if (!genderSelected) {
   alert('Please select your gender.');
   return;
}

// Validate message
if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return;
} 

document.getElementById('message-output').innerHTML = `Thank you, ${nameInput.value} for your message!`;

// Clear form after submission
nameInput.value = '';
birthDateInput.value = '';
for (let gender of genderInput) {
    gender.checked = false;
}
messageInput.value = '';

}