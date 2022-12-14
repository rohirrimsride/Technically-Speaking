async function viewPostHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/post/${id}`, {
        method: 'get',
        body: JSON.stringify({
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);

    if (response.ok) {
        console.log('request submitted');
        document.location.replace(`/post-single/${id}`);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-link').addEventListener('click', viewPostHandler);