var form = document.getElementById('userForm');
var tableBody = document.querySelector('#userTable tbody');
var editRow = null;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var id = document.getElementById('id').value;
    var balance = document.getElementById('balance').value;

    if (editRow) {
        editRow.cells[0].textContent = name;
        editRow.cells[1].textContent = id;
        editRow.cells[2].textContent = balance;
    } 
    else {
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = id;
        row.insertCell(2).textContent = balance;

        var action = row.insertCell(3);

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => {
            document.getElementById('name').value = row.cells[0].textContent;
            document.getElementById('id').value = row.cells[1].textContent;
            document.getElementById('balance').value = row.cells[2].textContent;
            editRow = row;
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            tableBody.removeChild(row);
        };

        action.appendChild(editBtn);
        action.appendChild(deleteBtn);
    }

});