// script.js
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const commentTableBody = document.getElementById('tableBody');
    const nameInput = document.getElementById('name');
    const commentTextarea = document.getElementById('comment');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = nameInput.value.trim();
        const comment = commentTextarea.value.trim();


        if (name === '') {
            alert('Please enter your name.');
            nameInput.focus();
            return;
        }
        if (comment === '') {
            alert('Please enter your comments.');
            commentTextarea.focus();
            return;
        }


        const newRow = commentTableBody.insertRow(); 


        const nameCell = newRow.insertCell();
        const commentCell = newRow.insertCell();


        nameCell.textContent = name;
        commentCell.textContent = comment;


        feedbackForm.reset();


        nameInput.focus();
    });
});