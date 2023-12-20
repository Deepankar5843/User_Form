
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

        console.log('Deleting user:', this.name, this.email);

        var userId = userItem.dataset.userId;

        userItem.parentNode.removeChild(userItem);
        // localStorage.removeItem(this.email);

        var userEmail = this.email;

        console.log('User email to delete:', userEmail);

        // Send a DELETE request to the server
        axios.delete(`https://crudcrud.com/api/af57f2a594a04cf681d8ccd3048fc5ce/Usersdata/${userId}`)
            .then((response) => {
                console.log('Delete:', response);
            })
            .catch((err) => {
                console.log('Getting Error:', err);
            });


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
        // localStorage.removeItem(this.email);




    }

    saveChanges(userItem, newName, newEmail) {
        // Update user information
        this.name = newName;
        this.email = newEmail;

        // Update the user item content
        userItem.textContent = 'Name: ' + this.name + ', Email: ' + this.email;

        // Save changes to Cloud Storage

        var userId = userItem.dataset.userId;

        localStorage.setItem(this.email, JSON.stringify({ Name: this.name, Email: this.email }));

        console.log(userId);

        console.log('Name:', this.name, 'Email:', this.email);

        axios.put(`https://crudcrud.com/api/af57f2a594a04cf681d8ccd3048fc5ce/Usersdata/${userId}`, {
            Name: `${this.name}`,
            Email: `${this.email}`
        })
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
        // localStorage.setItem(email, make);
        axios.post("https://crudcrud.com/api/af57f2a594a04cf681d8ccd3048fc5ce/Usersdata", ans)
            .then((response) => {
                console.log(response);
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            })

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
    } else {
        alert('Please enter both name and email.');
    }
}



function fetchData() {
    axios.get('https://crudcrud.com/api/af57f2a594a04cf681d8ccd3048fc5ce/Usersdata')
        .then((res) => {
            updateUser(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
}

function updateUser(userData) {

    var userList = document.getElementById('users');
    userList.innerHTML = '';

    userData
        .forEach(element => {
            var user = new User(element.Name, element.Email);
            var userItem = user.createUserItem();
            userItem.dataset.userId = element._id;
            userList.appendChild(userItem);
        });
}


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});



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




// QUESTION 1


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// // z();



// var num = { obj: 2 };
// var a = 9;

// function f(n) {
//     return this.a + n;
// }

// var d = f(3);

// console.log(d);



// function x() {

//     for (var i = 0; i < 7; i++) {
//         function g(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000)
//         }
//         g(i);
//     }
// }
// x();







// function y() {



//     for (let i = 1; i < 6; i++) {

//         setTimeout(() => console.log(i), i * 1000)

//     }

//     console.log('Done Coding')



// }

// y();









// function x() {

//     let a = 10;

//     function y() {

//         console.log(a);

//     }

//     a = 50;

//     return y;

// }



// const z = x()

// console.log(z());









// function x() {

//     let a = 10;

//     function y() {

//         console.log(a);

//     }

//     return y;

// }



// const z = x()

// console.log(z());

