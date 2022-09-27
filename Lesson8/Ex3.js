// Tính tổng các số chẵn trong đoạn từ [-30, 50]
let sum = 0;
for (let i = -30; i <= 50; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
console.log(sum);
