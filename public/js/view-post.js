async function viewPostHandler(event) {
    event.preventDefault();
    
    // this won't work to get the id of the post need to find a different means of getting the post id
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/post/${id}`, {
        method: 'get',
        body: JSON.stringify({
            post_title,
            post_data
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(response);

    if (response.ok) {
        console.log('request submitted');
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-link').addEventListener('click', viewPostHandler);