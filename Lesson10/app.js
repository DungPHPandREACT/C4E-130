// const id = Number(prompt('Mời bạn nhập id'));
// let isCheckExist = true;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].id === id) {
//     console.log(users[i]);
//     isCheckExist = false;
//   }
// }
// if (isCheckExist === true) {
//   console.log('Không tìm thấy');
// }

// const keyword = prompt('Mời bạn nhập keyword: ');
// for (let i = 0; i < users.length; i++) {
//   if ((users[i].first_name + users[i].last_name).includes(keyword)) {
//     console.log(users[i].email);
//   }
// }

// let count = 0;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 50) {
//     count++;
//   }
// }
// console.log(count);

// let countMarried = 0;
// let countUnMarried = 0;
// for (let i = 0; i < users.length; i++) {
//   if (users[i].is_married === true) {
//     countMarried++;
//   } else {
//     countUnMarried++;
//   }
// }

function countJob(job) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].job === job) {
      count++;
    }
  }
  return count;
}
const countDentist = countJob('Dentist');
console.log(countDentist);
