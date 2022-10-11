function register() {
  const first_name = prompt('Mời bạn nhập first name: ');
  const last_name = prompt('Mời bạn nhập last name: ');
  const email = prompt('Mời bạn nhập email: ');
  const password = prompt('Mời bạn nhập password: ');
  let checkEmail = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      checkEmail = true;
    }
  }
  if (checkEmail === false) {
    const newUser = {
      id: users.length + 1,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    users.push(newUser);
    // đẩy lên API
  } else {
    alert('Email bạn nhập đã tồn tại');
  }
}

register();
