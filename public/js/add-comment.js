async function commentPostHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/comments/${id}`, {
        method: 'post',
        body: JSON.stringify({
            comment_data,

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/post/${id}`)
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.')