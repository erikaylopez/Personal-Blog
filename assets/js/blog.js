const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');


  
function renderLastPost() {
    const lastPost = JSON.parse(localStorage.getItem('post'));
    
    if (lastPost !== null) {
      document.getElementById('.username').innerHTML = lastPost.username;
      document.getElementById('.title').innerHTML = lastPost.title;
      document.getElementById('.content').innerHTML = lastPost.content;  
    }
  }

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    savelastPost();
    renderLastPost();
  });
  
  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastPost();
  }
  init();