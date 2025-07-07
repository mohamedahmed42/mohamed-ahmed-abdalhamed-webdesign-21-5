// function check(startNum , endNum , breakNum ,contNum){



// }

// check( 1, 20 , 11)
// function getName(){
//     return 'mohamed'
// }
// console.log(getName())
// var fullname=function(){
//     return 'mohamed'
// }
// console.log(fullname())
// var arr=["gchg" ,  true];
// arr.forEach((element , i ) => {
//     if (i == true )
//     console.log(i)
// });

// var NumberOfUser = () => {
//     var num = prompt('enter number of users')
//     for (var i = 0; i < num; i++) {
//         addUser()
//     }
// }
var users = []
function addUser() {
    var user = {
         name : prompt("Enter user's name:"),
         id : prompt("Enter user's ID:"),
         balance : (prompt("Enter user's balance:"))

    }

  
    users.push(user);
    console.log(users);
}
function NumberOfUser () {
    var num = (prompt('Enter number of users'));

  

    for (var i = 0; i < num; i++) {
        addUser();
    }
    
    console.log("All users:");
}
NumberOfUser();



function editUser() {
    var idToEdit = prompt("Enter ID of the user you want to edit:");

    var found = false;

    for (var i = 0; i < users; i++) {
        if (users[i].id === idToEdit) {
            found = true;   

            users[i].name = prompt("Enter new name:", users[i].name);
            users[i].balance = parseFloat(prompt("Enter new balance:", users[i].balance));
            console.table("User updated successfully.");
            
        }
    }


    console.table(users);
}

editUser();



