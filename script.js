// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get values from the input fields
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const address = document.getElementById('address').value;
//     const email = document.getElementById('email').value;

//     // Create a user object
//     const user = {
//         name: name,
//         age: age,
//         address: address,
//         email: email
//     };

//     // Get existing users from local storage or create an empty array if none exist
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Add the new user to the array
//     users.push(user);

//     // Save the updated users array back to local storage
//     localStorage.setItem('users', JSON.stringify(users));

//     // Clear the form inputs after submission
//     document.getElementById('userForm').reset();

//     // Render the updated user list in the table
//     renderUserList();
// });

// // Function to render user list in the table
// function renderUserList() {
//     const userList = document.getElementById('userList');
//     userList.innerHTML = ''; // Clear the table body

//     // Get existing users from local storage
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Iterate over users and create table rows
//     users.forEach((user, index) => {
//         const row = document.createElement('tr');
        
//         // Create and append cells to the row
//         row.innerHTML = `
//             <td>${user.name}</td>
//             <td>${user.age}</td>
//             <td>${user.address}</td>
//             <td>${user.email}</td>
//             <td>
//                 <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
//             </td>
//         `;
        
//         userList.appendChild(row);
//     });
// }

// // Function to delete a user
// function deleteUser(index) {
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     users.splice(index, 1); // Remove user at the specified index
//     localStorage.setItem('users', JSON.stringify(users)); // Update local storage
//     renderUserList(); // Re-render the user list
// }

// // Call renderUserList on page load to display existing users
// window.onload = function() {
//     renderUserList();
// };




let editIndex = -1; // Variable to track the index of the user being edited

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from the input fields
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    // Create a user object
    const user = {
        name: name,
        age: age,
        address: address,
        email: email
    };

    // Get existing users from local storage or create an empty array if none exist
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (editIndex === -1) {
        // Add new user
        users.push(user);
    } else {
        // Update existing user
        users[editIndex] = user;
        editIndex = -1; // Reset editIndex after editing
    }

    // Save the updated users array back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear the form inputs after submission
    document.getElementById('userForm').reset();

    // Render the updated user list in the table
    renderUserList();
});

// Function to render user list in the table
function renderUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the table body

    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Iterate over users and create table rows
    users.forEach((user, index) => {
        const row = document.createElement('tr');

        // Create and append cells to the row
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-warning" onclick="editUser(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        
        userList.appendChild(row);
    });
}

// Function to edit a user
function editUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];

    // Populate the form with user data
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('address').value = user.address;
    document.getElementById('email').value = user.email;

    editIndex = index; // Set editIndex to the index of the user being edited
}

// Function to delete a user
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Remove user at the specified index
    localStorage.setItem('users', JSON.stringify(users)); // Update local storage
    renderUserList(); // Re-render the user list
}

// Call renderUserList on page load to display existing users
window.onload = function() {
    renderUserList();
};
