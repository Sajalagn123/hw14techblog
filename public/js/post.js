const commentFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the comment form
    const message = document.querySelector('#comment-message').value.trim();
    const post_id = document.querySelector('#comment-post_id').value.trim();
  
    if (message && post_id) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({ post_id,message }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  