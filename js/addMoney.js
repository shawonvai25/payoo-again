
document.getElementById('btn-add-money').addEventListener('click',function(event){
 event.preventDefault()
 


// const addMoney = getInputFieldValueById();
// console.log('add money value:',addMoney);

const addMoney = getInputFieldValueById('input-add-money')
const pinNumber = getInputFieldValueById('input-pin-number')
console.log('pin number is:', pinNumber);
console.log('add money with parameter:', addMoney);



})