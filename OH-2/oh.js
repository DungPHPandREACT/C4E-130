const email = prompt('Nhập tài khoản');
const password = prompt('Nhập mật khẩu');

function checkLogin() {
  let check = true;
  if (email.length === 0 || password.length === 0) {
    check = false;
  }

  if (check === false) {
    console.log('Hãy nhập đủ thông tin');
  }
}

function showName() {
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      if (password === users[i].password) {
        console.log(
          'Xin chào ' + users[i].first_name + ' ' + users[i].last_name
        );
      } else {
        console.log('Sai mật khẩu');
      }
    } else {
      console.log('Sai tài khoản');
    }
  }
}

checkLogin();
showName();
