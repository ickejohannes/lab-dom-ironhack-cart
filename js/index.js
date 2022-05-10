// ITERATION 1

function updateSubtotal(product) {

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector(`.quantity input`);
  const subTotal =
    parseFloat(priceElement.innerHTML) * parseInt(quantityElement.value);

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let totalValue = 0; 
  for (let iterator = 0; iterator < products.length; iterator += 1) {
    totalValue += updateSubtotal(products[iterator]);
  }

  const totalElement = document.getElementById("total-value");
  const spanInTotalElement = totalElement.querySelector("span");
 
  spanInTotalElement.innerHTML = totalValue;

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  event.currentTarget.parentNode.removeChild;
  const eventParentNode = target.parentNode;
  const productToRemove = eventParentNode.parentNode;
  const tableBodyToRemoveFrom = productToRemove.parentNode;
  console.log({tableBodyToRemoveFrom});
  tableBodyToRemoveFrom.removeChild(productToRemove);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn btn-remove");
  for (let iterator = 0; iterator < removeButtons.length; iterator  += 1) {
    removeButtons[iterator].addEventListener('click', removeProduct);
  }
});
