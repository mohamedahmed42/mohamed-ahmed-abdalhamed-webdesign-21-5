
    var form = document.getElementById('userForm');
    var tableBody = document.querySelector('#userTable tbody');
    var editRow = null;

    window.onload = function () {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => {
            addUserToTable(user);
        });
    };

    function addUserToTable(user) {
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = user.name;
        row.insertCell(1).textContent = user.id;
        row.insertCell(2).textContent = user.balance;

        var action = row.insertCell(3);

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'btn btn-sm btn-warning me-2';
        editBtn.onclick = () => {
            document.getElementById('name').value = row.cells[0].textContent;
            document.getElementById('id').value = row.cells[1].textContent;
            document.getElementById('balance').value = row.cells[2].textContent;
            editRow = row;
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-sm btn-danger';
        deleteBtn.onclick = () => {
            let name = row.cells[0].textContent;
            tableBody.removeChild(row);
            removeFromStorage(name);
        };

        action.appendChild(editBtn);
        action.appendChild(deleteBtn);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value;
        var id = document.getElementById('id').value;
        var balance = document.getElementById('balance').value;

        if (editRow) {
            editRow.cells[0].textContent = name;
            editRow.cells[1].textContent = id;
            editRow.cells[2].textContent = balance;
            updateInStorage(name, id, balance);
            editRow = null;
        } else {
            let user = { name, id, balance };
            addUserToTable(user);
            saveToStorage(user);
        }

        form.reset();
    });

    function saveToStorage(user) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function removeFromStorage(name) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(user => user.name !== name);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function updateInStorage(name, id, balance) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let index = users.findIndex(user => user.name === name);
        if (index !== -1) {
            users[index] = { name, id, balance };
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
