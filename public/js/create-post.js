async function newPostHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_data = document.querySelector('input[name="new-post-data"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_data,
            post_url
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

document.querySelector('.create-post-btn').addEventListener('submit', newPostHandler);