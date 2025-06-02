document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('my-form');
    const submitButton = myForm.querySelector('.btn');
    const bodyElement = document.body;
    const itemList = document.querySelector('.items');

    if (submitButton) {
        submitButton.addEventListener('click', function(e) {

            e.preventDefault();
            console.log('Form submission prevented.');

            if (myForm) {
                myForm.style.backgroundColor = 'red';
                console.log('Form background changed to red.');
            }

            bodyElement.classList.add('bg-dark');
            console.log('bg-dark class added to body.');

            if (itemList) {
                const listItems = itemList.querySelectorAll('li');
                if (listItems.length > 0) {
                    const lastItem = listItems[listItems.length -1];
                    const newHeading = document.createElement('h1');
                    newHeading.textContent = 'Hello';
                    
                    lastItem.replaceWith(newHeading);
                    console.log('Last list item replaced with H1 "Hello".');
                } else {
                    console.log('No list items found to replace.');
                }
            }
        });
    } else {
        console.error('Submit button not found!');
    }
});