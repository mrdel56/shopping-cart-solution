function updateProductNumber(product, isIncreasing, price,){
    const productInput = document.getElementById(product + '-number');
   let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal =document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal ;
    const tax = subtotal / 10 ;
    const total = subtotal + tax ;
    // update on the HTML
    document.getElementById('subtotal-amount').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}

// handle phone increase- decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
     updateProductNumber('phone', true, 1219);    
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
});
// handle case increase- decrease events
document.getElementById('case-plus').addEventListener('click', function()  {
    updateProductNumber('case', true , 59);    
});
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', false , 59);
});


