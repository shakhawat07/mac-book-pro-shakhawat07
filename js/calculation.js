function memoryCostField(amount) {
    // debugger;
    console.log(amount);
    const memoryCostField = document.getElementById('extra-memory-cost');
    const memoryCostText = memoryCostField.innerText;
    // const memoryCost = parseFloat(memoryCostText);
    memoryCostField.innerText = amount;
    return amount;
};

function storageCostField(amount) {
    const storageCostField = document.getElementById('extra-storage-cost');
    const storageCostText = storageCostField.innerText;
    const storageCost = parseFloat(storageCostText);
    storageCostField.innerText = amount;
    return amount;
}
function deliveryOptionField(amount) {
    const deliveryOptionField = document.getElementById('delivery-charge');
    const deliveryOptionText = deliveryOptionField.innerText;
    const deliveryOptionCost = parseFloat(deliveryOptionText);
    deliveryOptionField.innerText = amount;
}

function bestPriceField() {
    const bestPriceField = document.getElementById('best-price');
    const bestPriceText = bestPriceField.innerText;
    const bestPrice = parseFloat(bestPriceText);
    return bestPrice;
}


function updateTotalPriceField(newMemoryCost) {
    // debugger;
    const totalPriceField = document.getElementById('total-price');
    const totalPriceText = totalPriceField.innerText;
    const previousTotalPrice = parseFloat(totalPriceText);

    const bestPrice = bestPriceField();

    const memoryCost = parseFloat(newMemoryCost);
    if (memoryCost == 0) {
        const finalTotalPrice = bestPrice + 0;
        totalPriceField.innerText = finalTotalPrice;
    }
    else if (memoryCost == 180) {
        const finalTotalPrice = bestPrice + 180;
        totalPriceField.innerText = finalTotalPrice;
    }
};


// memory
// handle memory 8gb event handler
document.getElementById('btn-memory-8gb').addEventListener('click', function () {
    const newMemoryCost = memoryCostField(0);
    updateTotalPriceField(newMemoryCost);

});
// handle memory 16gb event handler
document.getElementById('btn-memory-16gb').addEventListener('click', function () {
    const newMemoryCost = memoryCostField(180);
    updateTotalPriceField(newMemoryCost);
});

// storage 
// handle storage 256gb event handler
document.getElementById('btn-storage-256gb').addEventListener('click', function () {
    const newStorageCost = storageCostField(0);
    // updateTotalPriceField(newStorageCost);
});
// handle storage 512gb event handler
document.getElementById('btn-storage-512gb').addEventListener('click', function () {
    const newStorageCost = storageCostField(100);
    // updateTotalPriceField(newStorageCost);
});
// handle storage 1tb event handler
document.getElementById('btn-storage-1tb').addEventListener('click', function () {
    const newStorageCost = storageCostField(180);
    // updateTotalPriceField(newStorageCost);
});

// delivery option 
// handle free prime delivery event handler
document.getElementById('btn-prime-delivery').addEventListener('click', function () {
    const newDeliveryCost = deliveryOptionField(0);
    // updateTotalPriceField(newStorageCost);
});
// handle delivery charge $20 event handler
document.getElementById('btn-delivery-charge').addEventListener('click', function () {
    const newDeliveryCost = deliveryOptionField(20);
    // updateTotalPriceField(newStorageCost);
});
