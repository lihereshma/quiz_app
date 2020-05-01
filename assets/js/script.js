let start = document.querySelector('.start');
start.addEventListener('click', showQuiz);
function showQuiz() { 
  let name = document.getElementById('userName').value;
  if(name === '') {
    alert('First enter your name...');
  } else {
    sessionStorage.setItem('name', name);
    location.href = "quiz.html";
  }  
}