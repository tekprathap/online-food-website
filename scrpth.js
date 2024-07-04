var menu=document.querySelector('.menu');
var menulist=document.querySelector('.ul-list');
menu.addEventListener('click',()=>{
    menulist.classList.toggle('active')
})

//card select


// document.querySelector().
const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}
function loadContent() {

     //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
      input.addEventListener('change',changeQty);
    });


    var btncard=document.querySelectorAll('.btn-primary');
btncard.forEach((btn1) => {
    btn1.addEventListener('click',selectcard)

    
});

updateTotal();
}
//Remove Item
function removeItem(){
  if(confirm('Are Your Sure to Remove')){
    let titlecard=this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemlist=itemlist.filter(el=>el.titlecard!=titlecard);
    this.parentElement.remove();
    loadContent();
  }
}
//Change Quantity   
function changeQty(){
    if(isNaN(this.value) || this.value<1){
      this.value=1;
    }
    loadContent();
  }

let itemlist=[]
    //Add Cart
function selectcard(){
    let food=this.parentElement;
    let titlecard=food.querySelector('.card-title').innerHTML;
    let price=food.querySelector('.price').innerHTML;
    let imgSrc=food.querySelector('.card-img').src;
    
   let newproduct={titlecard,price,imgSrc}
// check product alerady
if (itemlist.find((el)=>el.titlecard==newproduct.titlecard)) {
    alert('already product add in card')
    return;
}
else{
    itemlist.push(newproduct)
}

   let newProductElement= createCartProduct(titlecard,price,imgSrc);
   let element=document.createElement('div');
   element.innerHTML=newProductElement;
   let cartBasket=document.querySelector('.cart-content');
   cartBasket.append(element);
   loadContent();
   }
   
   
   function createCartProduct(titlecard,price,imgSrc){
   
     return `
     <div class="cart-box">
     <img src="${imgSrc}" class="cart-img">
     <div class="detail-box">
       <div class="cart-food-title">${titlecard}</div>
       <div class="price-box">
         <div class="cart-price">${price}</div>
          <div class="cart-amt">${price}</div>
      </div>
       <input type="number" value="1" class="cart-quantity">
     </div>
     <ion-icon name="trash" class="cart-remove"> <i class="fa-solid fa-trash"></i></ion-icon>
   </div>
     `;
   }

   function updateTotal()
{
  var cartItems=document.querySelectorAll('.cart-box');
  var totalValue=document.querySelector('.total-price');

  let total=0;
 

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });
  

  totalValue.innerHTML='Rs.'+total;}

  const form = document.querySelector('#form')
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const cpassword = document.querySelector('#cpassword');
  const phonenumber = document.querySelector('#phonenumber');
  const count = document.querySelector('#count');
  
  form.addEventListener('submit',(e)=>{
      
      if(!validateInputs()){
          e.preventDefault();
      }
  })
  
  function validateInputs(){
      const usernameVal = username.value.trim()
      const emailVal = email.value.trim();
      const passwordVal = password.value.trim();
      const cpasswordVal = cpassword.value.trim();
      const phonenumberVal = phonenumber.value.trim();
      const countval = count.value.trim();
      let success = true
  
      if(usernameVal===''){
          success=false;
          setError(username,'Username is required')
      }
      else{
          setSuccess(username)
      }
      if(countval===''){
          success=false;
          setError(count,'address is required')
      }
      else{
          setSuccess(count)
      }
      

     
      if(phonenumberVal===''){
          success=false;
          setError(phonenumber,'phonenumber is required')
      }
      else{
          setSuccess(phonenumber)
      }
      if(isNaN(phonenumberVal)){
          success=false;
          setError(phonenumber,'ether the number')
      }
      
  
      if(emailVal===''){
          success = false;
          setError(email,'Email is required')
      }
      else if(!validateEmail(emailVal)){
          success = false;
          setError(email,'Please enter a valid email')
      }
      else{
          setSuccess(email)
      }
    
  
      if(passwordVal === ''){
          success= false;
          setError(password,'Password is required')
      }
      else if(passwordVal.length<8){
          success = false;
          setError(password,'Password must be atleast 8 characters long')
      }
      else{
          setSuccess(password)
      }
  
      if(cpasswordVal === ''){
          success = false;
          setError(cpassword,'Confirm password is required')
      }
      else if(cpasswordVal!==passwordVal){
          success = false;
          setError(cpassword,'Password does not match')
      }
      else{
          setSuccess(cpassword)
      }

    
     
  
      return success;
  
  }
  //element - password, msg- pwd is reqd
  function setError(element,message){
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error')
  
      errorElement.innerText = message;
      inputGroup.classList.add('error')
      inputGroup.classList.remove('success')
  }
  
  function setSuccess(element){
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error')
  
      errorElement.innerText = '';
      inputGroup.classList.add('success')
      inputGroup.classList.remove('error')
  }
  
  const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };


    

var conformorder =document.querySelector('#btnconform');
 

conformorder.addEventListener('click',orderconform)

function orderconform() {
  if (itemlist==0) {
    alert('hi')
  }
  else{
   
    alert('order is conform')
    
  }
}


