// Array of items
let cart = [];
let cartCost = [];

function AddToCart(item, cost){
    cart.push(item);
    cartCost.push(cost);
    console.log(`Added ${item} to cart`)
}

function displayTotal(){
    let total = null;
    for(let i = 0; i < cart.length; i++){
        total += cartCost[i];
    }
    let StateTax = total * 0.06
    console.log(`Sales Tax: $${StateTax.toFixed(2)}`)
    let GrandTotal = total + StateTax;
    console.log(`Total: $${GrandTotal.toFixed(2)}`);
    cart=[];
    cartCost=[];
}