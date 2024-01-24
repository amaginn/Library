let button = document.querySelector('#btn');
button.addEventListener('click', function(event) {
    event.preventDefault();

    // Retrieve form data
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    // Call addBookToLibrary function with form data
    addBookToLibrary(title, author, pages, read);
});

function addBookToLibrary(title, author, pages, read) {
    let row = document.createElement('tr');

    // Create and append table cells with the input values
    [title, author, pages].forEach(value => {
        let textCell = document.createElement('td');
        textCell.textContent = value;
        row.appendChild(textCell);
    });

    // Create and append the 'Read?' cell
    let readCell = document.createElement('td');
    readCell.textContent = read ? 'Yes' : 'No';
    row.appendChild(readCell);

    // Create and append the delete cell
    let deleteCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        row.remove();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell)


    // Append the row to the table body
    document.getElementById('table-body').appendChild(row);
};