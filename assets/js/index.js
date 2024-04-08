
const redirectButton = document.getElementById('redirectButton');

//  l-blog/Personal-Blog/blog.html'; // Replace this URL with the desired destination
//   });

function savelastPost(username, title, content) {
  console.log(username, title, content)
  const lastPost = {
    username: username,
    title: title,

  };

  localStorage.setItem('lastPost', JSON.stringify(lastPost));

}

//<div id="error-message" style="color: red; display: none;">Please complete all fields.</div>


const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');

redirectButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  console.log("")
  savelastPost(username, title, content)
  if (!username || !title || !content) {
    window.alert("Please complete the form")
  
  } else {
    let blogs = JSON.parse(localStorage.getItem('userdetails'));
    const blogdetails = {
      username: username,
      title: title,
      content: content
    }
    if (blogs === null) {
      blogs = []
      blogs.push(blogdetails)

    } else {
      blogs.push(blogdetails)
    }


    localStorage.setItem("userdetails", JSON.stringify(blogdetails))
    window.location.href = './blog.html'

  }

});
