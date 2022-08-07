async function newPostHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('input[name="new-post-title"]').value;
    const post_data = document.querySelector('input[name="new-post-body"]').value;
    const post_url = document.querySelector('input[name="new-post-url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'post',
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