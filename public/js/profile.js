const title = document.getElementById('project-name');
const content = document.getElementById('project-desc');


const submit = document.getElementById('post-form');
submit.addEventListener('submit', (event) => {
    event.preventDefault();

    const newPost = {
        title: title.value,
        content: content.value
    }

    fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data from server: ", data);
            // after a successful creation we redirect to another VIEW
            document.location.replace('/profile')
        })
        .catch(err => {
            throw err;
        })
})