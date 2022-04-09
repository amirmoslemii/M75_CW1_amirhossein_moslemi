let user = [
    { name: 'amir', family: 'moslemi', age: 25 },
    { name: 'taha', family: 'akbari', age: 15 },
    { name: 'ali', family: 'amiri', age: 25 },
]

function fullName() {
    for (let i = 0; i < user.length; i++) {
        console.log(user[i].name, user[i].family)
    }
}
fullName()




// or


// let inputUser = prompt('enter name and family')
// let inputUserSplit = inputUser.split(' ')
// let user = []
// user.push(inputUserSplit)
// // console.log(user);
// function fullName() {
//     if (inputUser.length < 1) {
//         alert('oh!!\nYou did not fill the box')
//         prompt('enter name and family')
//     } else {
//         for (let i = 0; i < user.length; i++) {
//             alert(user)
//         }
//     }
// }
// fullName()