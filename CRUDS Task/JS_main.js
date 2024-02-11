var inputName = document.getElementById("prodctNameInput");
var inputPrice = document.getElementById("prodctPriceInput");
var inputCategory = document.getElementById("prodctCategoryInput");
var inputDescription = document.getElementById("prodctDescriptionInput");
var tableBody = document.getElementById('tableBody');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('UpdateBtn');

var productContainer;

LocalStore();

function LocalStore() {
    if (localStorage.length > 0) {
        productContainer = JSON.parse(localStorage.getItem("storedProducts"))
        displayProduct(productContainer);
    } else {
        productContainer = [];
    }
}

function addProduct() {

    if (validation()== true){
  var productInfo = {

        name: inputName.value,
        price: inputPrice.value,
        category: inputCategory.value,
        description: inputDescription.value
    }

    productContainer.push(productInfo);
    localStorage.setItem("storedProducts", JSON.stringify(productContainer));
    //console.log(localStorage.getItem("storedProducts"))
    clrearForm();
    displayProduct(productContainer);

    //console.log(productContainer)
}else{
    alert("Invalid")
}
}

function clrearForm() {
    inputName.value = "";
    inputPrice.value = "";
    inputCategory.value = "";
    inputDescription.value = "";
}

function displayProduct(productList) {
    var cartoona = ``;
    for (var i = 0; i < productList.length; i++) {
        cartoona += ` <tr>
<td>${i + 1}</td>
<td>${productList[i].name}</td>
<td>${productList[i].price}</td>
<td>${productList[i].category}</td>
<td>${productList[i].description}</td>
<td><button  onclick="displayUpdateForm(${i})"  class=" btn btn-outline-warning">Update</button></td>
<td><button  onclick="detelteProduct(${i})" class=" btn btn-outline-danger">Delete</button></td>
</tr>`
    }

    tableBody.innerHTML = cartoona;

}

function searchProduct(item) {
    var searchContainer = [];

    for (var i = 0; i < productContainer.length; i++) {

        if (productContainer[i].name.toLocaleLowerCase().includes(item.toLocaleLowerCase()) == true)
            searchContainer.push(productContainer[i])
    }
    displayProduct(searchContainer)
}

function detelteProduct(productIndex){
  productContainer.splice(productIndex,1);
  localStorage.setItem("storedProducts", JSON.stringify(productContainer));
  console.log(productContainer)
  displayProduct(productContainer);
}

function displayUpdateForm(updateIndex){
    
    inputName.value= productContainer[updateIndex].name;
    inputPrice.value= productContainer[updateIndex].price;
    inputCategory.value= productContainer[updateIndex].category;
    inputDescription.value= productContainer[updateIndex].description;
    updateBtn.classList.replace('d-none','d-inline-block');
    addBtn.classList.add('d-none');
    
}

function validation(){

    var regex = /[A-Z]{1}[a-z]{3,8}$/ ; 
    if (regex.test(inputName.value)== true){
        inputName.classList.replace('is-invalid','is-valid')
        return true
    }
    else{
        inputName.classList.add('is-invalid')
        return false
    }
}

// function updateProduct(index){
    
    
//      productContainer[index].name = inputName.value;
//      productContainer[index].price= inputPrice.value;
//      productContainer[index].category=inputCategory.value;
//      productContainer[index].description = inputDescription.value;
//      localStorage.setItem("storedProducts", JSON.stringify(productContainer));
//      console.log(productContainer);
// }
// updateProduct(3);


