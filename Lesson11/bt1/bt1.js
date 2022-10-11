// document.getElementById("mainimage").setAttribute("alt", "My new Alt");

document.getElementById('url').onchange = function () {
  const url = document.getElementById('url').value;
  document.getElementById('image').setAttribute('src', url);
};

document.getElementById('width').onchange = function () {
  const width = document.getElementById('width').value;
  document.getElementById('image').style.width = width + 'px';
};

document.getElementById('height').onchange = function () {
  const height = document.getElementById('height').value;
  document.getElementById('image').style.height = height + 'px';
};

document.getElementById('radius').onchange = function () {
  const radius = document.getElementById('radius').value;
  document.getElementById('image').style.borderRadius = radius + 'px';
};

document.getElementById('alt').onchange = function () {
  const alt = document.getElementById('alt').value;
  document.getElementById('image').setAttribute('alt', alt);
};
