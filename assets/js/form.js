const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const title = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
      };

      localStorage.setItem('title', JSON.stringify(title));
  renderMessage();
});
  
function renderMessage() {
    const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
    if (lastGrade !== null) {
      document.querySelector('.message').textContent =
        lastGrade.student + ` received a/an ${lastGrade.grade}`;
    }
  }