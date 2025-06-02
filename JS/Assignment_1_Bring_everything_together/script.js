// script.js
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const commentTableBody = document.getElementById('tableBody');
    const nameInput = document.getElementById('name');
    const commentTextarea = document.getElementById('comment');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get values from the form fields
        const name = nameInput.value.trim();
        const comment = commentTextarea.value.trim();

        // Basic validation
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

        // Create a new row
        const newRow = commentTableBody.insertRow(); // Appends to the end of tbody

        // Create cells for Name and Comment
        const nameCell = newRow.insertCell();
        const commentCell = newRow.insertCell();

        // Populate the cells with data
        nameCell.textContent = name;
        commentCell.textContent = comment;

        // Clear the form fields after submission
        feedbackForm.reset();

        // Optional: Set focus back to the name field for easier multiple submissions
        nameInput.focus();
    });
});