async function updatePostHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('input[name="update-post-title"]').value;
    const post_data = document.querySelector('input[name="update-post-data"]').value;
    const post_url = document.querySelector('input[name="update-post-url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'put',
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

document.querySelector('.update-post-btn').addEventListener('submit', updatePostHandler);