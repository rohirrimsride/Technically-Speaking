async function updatePostHandler(event) {
    event.preventDefault();
    
    const post_title = document.querySelector('input[name="update-post-title"]').value;
    const post_data = document.querySelector('textarea[name="update-post-body"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    console.log(post_title, post_data);
    const response = await fetch(`/api/posts/${id}`, {
        method: 'put',
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

document.querySelector('.update-post').addEventListener('submit', updatePostHandler);