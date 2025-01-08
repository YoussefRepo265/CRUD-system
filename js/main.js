var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var upateBtn = document.getElementById("upateBtn");
// console.log(productCategoryInput , productDescInput , productNameInput , productPriceInput)
var productContainer = [];
if (localStorage.getItem("productsInfo") != null) {
  productContainer = JSON.parse(localStorage.getItem("productsInfo"));
  display(productContainer);
}
function addProduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  // console.log(product);
  productContainer.push(product);
  localStorage.setItem("productsInfo", JSON.stringify(productContainer));
  display(productContainer);
  clearForm();
}
function display(arr) {
  var cartona = ``;
  for (var i = 0; i < arr.length; i++) {
    cartona += ` <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].desc}</td>
        <td><button onclick="btnDelete(${i})" class="btn btn-outline-danger">Delete</button></td>
        <td><button onclick="UpadteProduct(${i})" class="btn btn-outline-warning">Update</button></td>
    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productDescInput.value = "";
  productCategoryInput.value = "";
}
function btnDelete(index) {
  productContainer.splice(index, 1);
  display(productContainer);
  localStorage.setItem("productsInfo", JSON.stringify(productContainer));
}
function searchInput(term) {
  var matchedProduct = [];
  for (var i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      matchedProduct.push(productContainer[i]);
    }
  }
  display(matchedProduct);
  console.log(productContainer[i]);
}

function UpadteProduct(i) {
  addBtn.classList.replace("d-block", "d-none");
  upateBtn.classList.replace("d-none", "d-block");
  productNameInput.value = productContainer[i].name;
  productPriceInput.value = productContainer[i].price;
  productDescInput.value = productContainer[i].desc;
  productCategoryInput.value = productContainer[i].category;
}

function updateList(i) {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  productContainer.push(product);
  display(productContainer);
}
