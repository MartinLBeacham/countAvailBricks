function countAvailBricks() {

return Array.from(document.querySelectorAll("[data-test=pab-quantity-in-set]")).reduce((acc, curr)=>{
curr = curr.innerText
curr = parseInt(curr.replace('Qty in set: ',''))
return acc+curr;
},0)
  
}

function printPriceByBlock(){

	document.querySelectorAll(".ElementsList_leaf__3tVNf").forEach((item)=>{
	
	const count = parseInt(item.querySelector("[data-test=pab-quantity-in-set]").innerText.replace('Qty in set: ',''));
	
	const price = item.querySelector("[data-test=pab-item-price]").innerText.replace('$','');
	
	console.log(price*count);
})

} 

function totalPrice(){

	return Array.from(document.querySelectorAll(".ElementsList_leaf__3tVNf")).reduce((acc,curr)=>{
	
	const count = parseInt(curr.querySelector("[data-test=pab-quantity-in-set]").innerText.replace('Qty in set: ',''));
	
	const price = curr.querySelector("[data-test=pab-item-price]").innerText.replace('$','');
	
	return price*count+acc
},0)

} 
