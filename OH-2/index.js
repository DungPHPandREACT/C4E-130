let action;
const storage = {
  name: 'MindX - Group 3',
  address: 'Nguyen Chi Thanh',
  owner: 'Hoang',
  items: [
    {
      id: 1,
      name: 'Product 1',
      category: 'Furniture',
      price: 20,
    },
  ],
};

function showStore() {
  // name
  // address
  // owner
  const newName = prompt('Mời bạn nhập tên mới cho kho: ');
  const newAddress = prompt('Mời bạn nhập địa chỉ mới');
  const newOwner = prompt('Mời bạn nhập người sở hữu mới');
  storage.name = newName;
  storage.address = newAddress;
  storage.owner = newOwner;
  console.log(storage);
}

function addProduct() {
  let newId = Number(prompt('Mời bạn nhập mã sản phẩm: '));
  for (let product of storage.items) {
    if (product.id === newId) {
      while (product.id === newId) {
        newId = Number(prompt('ID bạn nhập đã tồn tại, yêu cầu nhập id mới: '));
      }
    }
  }
  const newName = prompt('Mời bạn nhập tên cho sản phẩm');
  const newCategory = prompt('Mời bạn nhập loại sản phẩm');
  const newPrice = prompt('Mời bạn nhập giá sản phẩm');
  const newProduct = {
    id: newId,
    name: newName,
    category: newCategory,
    price: newPrice,
  };
  storage.items.push(newProduct);

  alert(newProduct.name);
}

function searchProduct() {
  const keyword = prompt('Mời bạn nhập nhập keyword:');
  let isExist = false;
  for (let product of storage.items) {
    if (
      product.name.toUpperCase().includes(keyword.toUpperCase()) &&
      keyword !== ''
    ) {
      alert(product.name);
      isExist = true;
    }
  }
  if (isExist === false || keyword === '') {
    alert('Không tìm thấy sản phẩm');
  }
}

function deleteProduct() {
  let id = prompt('Mời bạn nhập mã sản phẩm:');
  let checkExist = false;
  for (let i = 0; i <= storage.items; i++) {
    if (storage.items[i].id === id) {
      storage.items.splice(i, 1);
      checkExist = true;
    }
  }
  if (checkExist === false) {
    alert('ID không tồn tại');
  }
}

do {
  action = Number(prompt('Mời bạn nhập action: '));
  switch (action) {
    case 1:
      showStore();
      break;
    case 2:
      addProduct();
      break;
    case 3:
      searchProduct();
      break;
    case 4:
      deleteProduct();
      break;
  }
} while (action <= 4 && action >= 1);
