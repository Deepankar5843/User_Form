// var currentTimeInSeconds = Math.floor(Date.now() / 1000);
// console.log(currentTimeInSeconds);

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

//         // Store data in sessionStorage and localStorage


//         localStorage.setItem('Name' + currentTimeInSeconds, name);
//         localStorage.setItem('Email' + currentTimeInSecond, email);

//         // Clear the input fields
//         nameInput.value = '';
//         emailInput.value = '';
//     } else {
//         alert('Please enter both name and email.');
//     }
// }




function addUser() {
    var nameInput = document.getElementById('userName');
    var emailInput = document.getElementById('userEmail');
    var userList = document.getElementById('users');

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    if (name && email) {
        // Create a new list item for the user
        var userItem = document.createElement('li');
        userItem.textContent = 'Name: ' + name + ', Email: ' + email;

        // Append the new user item to the user list
        userList.appendChild(userItem);

        let ans =
        {
            name: nameInput.value,
            Email: emailInput.value
        };

        let make = JSON.stringify(ans)

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
