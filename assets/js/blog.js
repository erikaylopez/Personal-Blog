
const lastPostUsername = document.querySelector('#lastPost-username');
const lastPostTitle = document.querySelector('#lastPost-title');
const lastPostContent = document.querySelector('#lastPost-content');
const lastPostCountSpan = document.querySelector('#lastPost-count');

const LastPost = [];
console.log(mypost)
  
function renderLastPost() {
    lastPostContent.innerHTML = '';
    lastPostCountSpan.textContent = lastPost.length;

    for (let i = 0; i < lastPost.length; i++) {
        const lastPost = lastPost [i];

        const li = document.createElement('li');
        li.textContent = lastPost;
        li.setAttribute('data-index',i);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'complete' ;

        li.apprehendchild(button);
        lastPost.apprehendchild(li);

    }
}

function init () {

    const storedlastPost = JSON.parse(localStorage.getItem('lastPost'));

    if (storedlastPost !== null) {
        lastPost = storedlastPost;
    }

    renderLastPost();

}

function storedlastPost() {
    localStorage.setItem('lastPost', JSON.stringify(lastPost));

}

lastPostForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const lastPostText = lastPostInput.value.trim();

    if (lastPostText === '') {
        return;
    }

    lastPost.push(lastPostText);
    lastPostInput.value = '';

    storelastPost();
    renderLastPost();

});

lastPostList.addEventListener('click', function (event) {
    const element = event.target;
  
    // Checks if element is a button
    if (element.matches('button') === true) {
      // Get its data-index value and remove the todo element from the list
      const index = element.parentElement.getAttribute('data-index');
      todos.splice(index, 1);
    

storeTodos();
    renderTodos();
    }
});
// Calls init to retrieve data and render it to the page on load
init();



