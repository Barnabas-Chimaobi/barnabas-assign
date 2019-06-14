// let name = prompt('please enter your name')

// let customer = document.querySelector('.name')
// customer.innerHTML = (`welcome ${name}`)


//define ui parameter
const name = document.getElementById('product')
const price = document.getElementById('price')
const method = document.getElementById('delivery')
const submit = document.querySelector('.save')
let logout = document.querySelector('#logout');

logout.addEventListener('click', ()=>{
alert('thanks for your patronage');
location.replace('link.html')
})

submit.addEventListener('click', (e) => { 
  let pName = document.createElement('p')
  pName.appendChild(document.createTextNode(`name: ${name.value}`))
  let pPrice = document.createElement('p')
  pPrice.appendChild(document.createTextNode(`price: ${price.value}`))
  let pMethod = document.createElement('p')
  pMethod.appendChild(document.createTextNode(`delivery: ${method.value}`))
  let dove = document.createElement('div')
  dove.className = 'fly'
  dove.appendChild(pName)
  dove.appendChild(pPrice)
  dove.appendChild(pMethod)

  document.querySelector('#show').appendChild(dove)

let productObject = {
  pName: name.value,
  pPrice: price.value,
  pMethod: method.value
  };

  let product = [];
   
 if(localStorage.getItem('product') == null){
  product.push(productObject);
  localStorage.setItem('product', JSON.stringify(product))  
 }else{
   product = JSON.parse(localStorage.getItem('product'));
   product.push(productObject);
   localStorage.setItem('product', JSON.stringify(product))

 }


console.log(product)
// e.target = ""
e.preventDefault()
})

// function remain(){

//   let store;
//   if(localStorage.getItem('product') == null){
//     store = [];
//   }else{
//     store = JSON.parse(localStorage.getItem('product'))
//   }
//  store.forEach(element => {
//   let pName = document.createElement('p')
//   pName.appendChild(document.createTextNode(name.value))
//   let pPrice = document.createElement('p')
//   pPrice.appendChild(document.createTextNode(price.value))
//   let pMethod = document.createElement('p')
//   pMethod.appendChild(document.createTextNode(method.value))
//   let dove = document.createElement('div')
//   Div.className = 'fly'

//   dove.appendChild(pName)
//   dove.appendChild(pPrice)
//   dove.appendChild(pMethod)

//   document.querySelector('#show').appendChild(dove)
//   });   
// }


// //store items
// goods.innerHTML = ""
// cost.innerHTML = ""
// send.innerHTML = ""

// storeInputToLocalStorage(goods.value)
// goods.value = ""

// function storeInputToLocalStorage(product){
//   let products;
//  if(localStorage.getItem('products') === null){
//    products = [];
//  }else{ 
//    products = JSON.parse(localStorage.getItem('products'));
//  }

//  products.push(product);
//  localStorage.setItem('tasks',JSON.stringify(products));
// console.log(products)
// }

const chat = document.querySelector('.button')

chat.addEventListener('click', ()=>{
  document.querySelector('.contain').style.display = "flex"
})

const close = document.querySelector('.btn')

close.addEventListener('click', ()=>{
  document.querySelector('.contain').style.display = "none"
})