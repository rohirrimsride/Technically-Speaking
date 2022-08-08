async function newPostHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('input[name="new-post-title"]').value;
    const post_data = document.querySelector('textarea[name="new-post-body"]').value;
    
    console.log(post_title, post_data);
    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            post_title,
            post_data,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.create-post').addEventListener('submit', newPostHandler);