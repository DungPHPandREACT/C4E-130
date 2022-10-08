// function login() {
//   const email = prompt('Mời bạn nhập email: ');
//   const password = prompt('Mời bạn nhập password:');

//   if (email === '' || password === '') {
//     console.log('Hãy nhập đầy đủ thông tin');
//   } else {
//     let checkEmail = false;
//     let checkPassword = false;

//     for (let i = 0; i < users.length; i++) {
//       if (users[i].email === email) {
//         checkEmail = true;
//         if (users[i].password === password) {
//           checkPassword = true;
//           console.log(
//             'Xin chào ' + users[i].first_name + ' ' + users[i].last_name
//           );
//         }
//       }
//     }

//     if (checkEmail === false) {
//       console.log('Email bạn nhập chưa tồn tại');
//     }
//     if (checkEmail === true && checkPassword === false) {
//       console.log('Password bạn nhập chưa đúng');
//     }
//   }
// }

// login();
