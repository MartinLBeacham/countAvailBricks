function countAvailBricks() {

return Array.from(document.querySelectorAll("[data-test=pab-quantity-in-set]")).reduce((acc, curr)=>{
curr = curr.innerText
curr = parseInt(curr.replace('Qty in set: ',''))
return acc+curr;
},0)
  
}
