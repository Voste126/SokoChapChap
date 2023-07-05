//cart side view window variables
const carticon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart')
const cartremove = document.querySelector('#close-cart')

//add actions to the icons
//open cart
carticon.onclick = () => {
    cart.classList.add("active");
};
//close cart
cartremove.onclick = () => {
    cart.classList.remove("active");
};
//cart is working 
if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded",ready);
}else {
        ready()
}

//the ready  function
function  ready(){
    //remove items form cart
    let removeCartButtons = document.getElementsByClassName('cart-remove')

    //for loop
    for (let i = 0; i < removeCartButtons.length;i++){
        let button = removeCartButtons[i]
        button.addEventListener('click',removeCartItem)
    }
    //quntity changes
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length;i++){
        let input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }
    let addCart = document.getElementsByClassName('add-cart')
    for (let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener('click',addCartClicked);
    }
    document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked)
}
//buy now button
function buyButtonClicked(){
    alert('your order has been placed. Payment on delivary')
    let cartContent = document.getElementsByClassName('cart-content')[0]
    while ( cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal()

}

//function to remove the user cart item
function removeCartItem(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updatetotal()
}
//quantity changes
function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
  updatetotal()
}
//Add to cart
function addCartClicked(event){
    let button = event.target
    let shopproducts = button.parentElement
    let title = shopproducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopproducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopproducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title,price,productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    
    let cartBoxContent = `
      <img src="${productImg}" alt="" class="cart-img">
      <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
      </div>
      <i class='bx bxs-trash-alt cart-remove'></i>
    `;
    
    cartShopBox.innerHTML = cartBoxContent;
    
    let cartItems = document.getElementsByClassName('cart-content');
    let cartItemsNames = cartItems[0].getElementsByClassName('cart-product-title');
    
    for (let i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText === title) {
        alert('You have already added this item to the cart.');
        return;
      }
    }
    
    cartItems[0].append(cartShopBox);
    
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
  }
  
  

//update total
function updatetotal() {
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartboxes = cartContent.getElementsByClassName('cart-box');
    let total = 0;
  
    for (let i = 0; i < cartboxes.length; i++) {
      let cartBox = cartboxes[i];
      let priceElement = cartBox.getElementsByClassName('cart-price')[0];
      let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
      let price = parseFloat(priceElement.innerText.replace("$", ""));
      let quantity = quantityElement.value;
      total += price * quantity * 1000;
    }
  
    document.getElementsByClassName('total-price')[0].textContent = `$ ${total}`;
}

