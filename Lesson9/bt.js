const listNumber = [1, 5, 9, 29, 10, 2, 6, 4];
// Tính tích của các phần tử trong mảng
// let result = 1;
// for (const abc of listNumber) {
//   result = result * abc;
// }

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// + Tìm được các số chia hết cho 2 (rồi truyền vào 1 mảng)
// + Tìm phần tử có giá trị nhỏ nhất trong mảng mới
// const newArr = [];
// for (let number of listNumber) {
//   if (number % 2 === 0) {
//     newArr.push(number);
//   }
// }
// let min = newArr[0];
// for (let number of newArr) {
//   if (number < min) {
//     min = number;
//   }
// }
// console.log(min);

// Tính giá trị trung bình của mảng
// +Tính được tổng của các phần tử trong mảng
// +trung bình cộng = tổng / độ dài của mảng
let sum = 0;
for (let number of listNumber) {
  sum = sum + number;
}
const avg = sum / listNumber.length;

// Lọc ra số nguyên tố trong mảng
// Số nguyên tố là số chia hết cho 1 và chính nó

for (let j = 0; j < listNumber.length; j++) {
  let count = 0;
  for (let i = 1; i <= listNumber[j]; i++) {
    if (listNumber[j] % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(listNumber[j]);
  }
}
