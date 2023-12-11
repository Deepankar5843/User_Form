class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    createUserItem() {
        // Create a new list item for the user
        var userItem = document.createElement('li');
        userItem.textContent = 'Name: ' + this.name + ', Email: ' + this.email;

        // Create a delete button for the user
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', () => this.deleteUser(userItem));

        // Append the delete button to the user item
        // userItem.insertBefore(deleteButton, userItem.firstChild);
        userItem.insertBefore(deleteButton, userItem.firstChild.nextSibling);

        // userItem.insertBefore(userItem.firstChild, deleteButton);


        return userItem;
    }

    deleteUser(userItem) {
        // Remove the user item from the user list
        userItem.parentNode.removeChild(userItem);

        // Remove the user from local storage based on email
        localStorage.removeItem(this.email);

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





// function addUser() {
//     var nameInput = document.getElementById('userName');
//     var emailInput = document.getElementById('userEmail');
//     var userList = document.getElementById('users');

//     var name = nameInput.value.trim();
//     var email = emailInput.value.trim();

//     if (name && email) {
//         // Create a new list item for the user
//         var userItem = document.createElement('li');
//         userItem.textContent = 'Name: ' + name + ', Email: ' + email;

//         // Append the new user item to the user list
//         userList.appendChild(userItem);

//         var deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.className = 'deleteButton';
//         deleteButton.addEventListener('click', () => this.deleteUser(userItem));


//         // Updated feature of local Storage where we by adding new user

//         let ans =
//         {
//             name: nameInput.value,
//             Email: emailInput.value
//         };

//         let make = JSON.stringify(ans)

//         // Use a consistent key for storage, like the email
//         localStorage.setItem(email, make);

//         // Clear the input fields
//         nameInput.value = '';
//         emailInput.value = '';
//     } else {
//         alert('Please enter both name and email.');
//     }
// }






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
