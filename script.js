const conterEl = document.getElementById('conter');
const incrementEl = document.getElementById('increment');
const resetEl = document.getElementById('reset');
const decrementEl = document.getElementById('decrement');

let num = 0;

incrementEl.addEventListener( 'click', ()=>{
  num++;
  conterEl.innerHTML = num;
})

decrementEl.addEventListener('click' , () => {
 if(num > 0){
  num--;
  conterEl.innerHTML = num;
 }
})

resetEl.addEventListener('click', () => {
  num = 0;
  conterEl.innerHTML = num;
})