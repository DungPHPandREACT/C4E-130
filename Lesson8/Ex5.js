// Nhập vào 3 số a,b,x (a<b).Tìm trong khoảng a,b số nhỏ nhất mà chia hết cho x
let a = 3;
let b = 50;
let x = 10;

for (let i = a + 1; i < b; i++) {
  if (i % x === 0) {
    console.log(i);
    break;
  }
}
