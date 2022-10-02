// Nhập vào 1 số n dương bất kỳ, in ra các số nguyên tố từ 0 -> n
const a = parseInt(prompt('Mời bạn nhập a: '));

// Số nguyên tố là số chia hết cho 1 và chính nó
// Ý tưởng giải:
// Dùng 2 vòng lặp, vòng lặp 1 là để in ra các số từ 1->n
// Vòng lặp 2 là để kiểm lặp từ 1 đến số đó xem số đó chia hết cho mấy số
// Nếu vòng lặp 2 chạy từ 1 -> số đó mà chỉ chia hết được cho 2 số thì thỏa mãn điều kiện

for (let number = 1; number <= a; number++) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(number);
  }
}
