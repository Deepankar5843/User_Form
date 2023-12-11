
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    createUserItem() {
        var userItem = document.createElement('li');
        userItem.textContent = 'Name: ' + this.name + ', Email: ' + this.email;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', () => this.deleteUser(userItem));

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'editButton';
        editButton.addEventListener('click', () => this.editUser(userItem));


        userItem.insertBefore(editButton, userItem.firstChild.nextSibling);
        userItem.insertBefore(deleteButton, userItem.firstChild.nextSibling);

        return userItem;
    }

    deleteUser(userItem) {
        userItem.parentNode.removeChild(userItem);
        localStorage.removeItem(this.email);
    }

    editUser(userItem) {
        // Create a form for editing user information
        var editForm = document.createElement('form');

        var nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = this.name;

        var emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.value = this.email;

        var saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', () => this.saveChanges(userItem, nameInput.value, emailInput.value));

        editForm.appendChild(nameInput);
        editForm.appendChild(emailInput);
        editForm.appendChild(saveButton);

        // Replace the user item content with the edit form
        userItem.innerHTML = '';
        userItem.appendChild(editForm);
        localStorage.removeItem(this.email);
    }

    saveChanges(userItem, newName, newEmail) {
        // Update user information
        this.name = newName;
        this.email = newEmail;

        // Update the user item content
        userItem.textContent = 'Name: ' + this.name + ', Email: ' + this.email;

        // Save changes to local storage
        localStorage.setItem(this.email, JSON.stringify({ Name: this.name, Email: this.email }));
    }
}




function addUser() {
    var nameInput = document.getElementById('userName');
    var emailInput = document.getElementById('userEmail');
    var userList = document.getElementById('users');

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    if (name && email) {
        // Create a new User instance
        var user = new User(name, email);

        // Create user item and append it to the user list
        var userItem = user.createUserItem();
        userList.appendChild(userItem);

        // Store data in localStorage


        var ans =
        {
            Name: name,
            Email: email
        };

        var make = JSON.stringify(ans)

        // Use a consistent key for storage, like the email
        localStorage.setItem(email, make);




        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
    } else {
        alert('Please enter both name and email.');
    }
}


// Added features for storing the json fromat of object


let obj =
{
    name: "Bina",
    age: 44
};
console.log(obj);

localStorage.setItem('myobj', obj);
console.log(localStorage.getItem('myobj'));

let obj1 = JSON.stringify(obj);
localStorage.setItem('mys', obj1);
console.log(localStorage.getItem('mys'));


// here we parsed the json format

let objClear = JSON.parse(localStorage.getItem('mys'));
console.log(localStorage.getItem('mys'));
console.log(objClear);
