// --------------------------------functions--------------------------------
// update each cost field
function costField(costFieldId, amount) {
    const costField = document.getElementById(costFieldId);
    costField.innerText = amount;
};
// getting each float amount 
function cost(costId) {
    const costField = document.getElementById(costId);
    const costFieldText = costField.innerText;
    const cost = parseFloat(costFieldText);
    return cost;
};
// calculate and update total price 
function updateTotalPriceField() {
    // getting each amount
    // debugger;
    const bestPrice = cost('best-price');
    const memoryCost = cost('extra-memory-cost');
    const storageCost = cost('extra-storage-cost');
    const deliveryCost = cost('delivery-charge');
    // total cost calculation 
    var totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
    // update total price field 
    costField('total-price', totalCost);
    costField('discount-total', totalCost);
};
function promoCode(promoCodeId, totalPrice) {
    // debugger;
    const promoCodeField = document.getElementById(promoCodeId);
    const promoCodeText = promoCodeField.value;
    // checking promo code 
    if (promoCodeText == 'stevekaku') {
        var discountPrice = (totalPrice * 0.80);
    }
    else {
        var discountPrice = totalPrice;
    }
    // update discount price field 
    costField('discount-total', discountPrice);
    // clear input field
    promoCodeField.value = '';
};

//--------------------------------event handler--------------------------------
//--------------------------------memory--------------------------------
// handle memory 8gb event handler
document.getElementById('btn-memory-8gb').addEventListener('click', function () {
    costField('extra-memory-cost', 0);
    updateTotalPriceField();

});
// handle memory 16gb event handler
document.getElementById('btn-memory-16gb').addEventListener('click', function () {
    costField('extra-memory-cost', 180);
    updateTotalPriceField();
});

//--------------------------------storage--------------------------------
// handle storage 256gb event handler
document.getElementById('btn-storage-256gb').addEventListener('click', function () {
    costField('extra-storage-cost', 0);
    updateTotalPriceField();
});
// handle storage 512gb event handler
document.getElementById('btn-storage-512gb').addEventListener('click', function () {
    costField('extra-storage-cost', 100);
    updateTotalPriceField();
});
// handle storage 1tb event handler
document.getElementById('btn-storage-1tb').addEventListener('click', function () {
    costField('extra-storage-cost', 180);
    updateTotalPriceField();
});
//--------------------------------delivery option-------------------------------- 
// handle free prime delivery event handler
document.getElementById('btn-prime-delivery').addEventListener('click', function () {
    costField('delivery-charge', 0);
    updateTotalPriceField()
});
// handle delivery charge $20 event handler
document.getElementById('btn-delivery-charge').addEventListener('click', function () {
    costField('delivery-charge', 20);
    updateTotalPriceField();
});
//--------------------------------discount--------------------------------
// handle discount event handler
document.getElementById('btn-promo-apply').addEventListener('click', function () {
    const totalPrice = cost('total-price');
    promoCode('promo-code', totalPrice);
});