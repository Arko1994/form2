window.onload = function() {
    var items = document.querySelector('[name="tovars"]');
    var number = document.querySelector('[name="items-number"]');
    var resetButton = document.querySelector('[type="reset"]');
    var price = document.querySelector('#price');
    var delivery = document.querySelectorAll('[name="delivery"]');

    items.addEventListener('change', itemsChange);
    number.addEventListener('change', numberChange);
    resetButton.addEventListener('click', resetAll);
    
    for(var i = 0; i < delivery.length; i++) {
        delivery[i].addEventListener('change', deliveryPlus);
    }
    
    function itemsChange() {
        var selectedItem = items.options[items.selectedIndex];
        var itemsNumber = document.querySelector('[name="items-number"]').value;
        var deliveryThis = document.querySelector('[type="radio"]:checked').dataset.price;
        if(selectedItem.value !== 'empty') {
            console.log(selectedItem.dataset.price);
            console.log(itemsNumber);
            var result = parseFloat(selectedItem.dataset.price) * parseFloat(itemsNumber);
             price.innerHTML = result.toFixed(10);
        }   else {
            price.innerHTML = '0';
        }
        price.innerHTML = parseFloat(price.innerHTML) + parseFloat(deliveryThis);
    }

    function numberChange() {
        itemsChange(); 
    }

    function resetAll() {
        price.innerHTML = '0';
    }
    
    function deliveryPlus() {
        itemsChange(); 
    }  
}