async function viewPostHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/post/${id}`, {
        method: 'get',
        body: JSON.stringify({
            post_title,
            post_data,
            postedAt,
            user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log('request submitted');
        // document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-link').addEventListener('click', viewPostHandler);