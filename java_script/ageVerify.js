
// Closes the Modal
document.querySelector('.close').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

// Verifies age
document.querySelector('.thanksAge').addEventListener('click',
function() {
  var age = document.getElementById('ageCheck').value;
  if (age < 18) {
    window.alert("You are too young for this site.");
    location.href("http://google.com");
  }
  else if (age > 18 && age < 101) {
    window.alert("Welcome!");
    document.querySelector('.bg-modal').style.display = 'none';
  }
});




