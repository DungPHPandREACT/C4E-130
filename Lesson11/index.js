// document.getElementById("tenId")
// ID: trả về 1 phần tử
const testId = document.getElementById('text');
// document.getElementsByClassName("tenClass");
const testClass = document.getElementsByClassName('text');
// document.getElementsByTagName("tenTag")
// className và tagName trả về 1 mảng chứa các phần tử hợp lệ

// document.querySelectorAll("tenTag tenId tenClass")
const testQuery = document.querySelectorAll('#text.text');
// querySelectorAll trả về 1 mảng chứa các phần tử hợp lệ
console.log(testQuery);

// document.querySelector("tenTag tenId tenClass")
// querySelector trả về duy nhất 1 phần tử hợp lệ đầu tiên thỏa mãn điều kiện

// dom.innerHTML = "Nội dung mới"

// document.getElementById('text').innerHTML = 'Đây là nội dung mới';
// document.getElementById('test').innerHTML = 'Thay nội dung';

document.getElementById('btn').onclick = function () {
  //   document.getElementById('text').classList.add('change-color');
  //   document.getElementById('text').classList.remove('text');
  document.getElementById('text').classList.toggle('change-color');
  //   lấy giá trị trong ô input
  //   const getValue = document.getElementById('input-value').value;
  //   gán giá trị cho ô input
  //   document.getElementById('input-value').value = 'Đây là nội dung thử nghiệm';
  //   console.log(getValue);
};

document.getElementById('input-value').onchange = function () {
  const getValue = document.getElementById('input-value').value;
  console.log(getValue);
};
