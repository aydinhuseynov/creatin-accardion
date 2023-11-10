/*

<div class="vezife-item vezife-tamamlandi">
    <li class="vezife-tanitim">js elave et</li>
    <button class="vezife-btn vezife-btn-tamamlandi"><i class="fa fa-check" aria-hidden="true"></i></button>
    <button class="vezife-btn vezife-btn-sil"><i class=" fa fa-trash " aria-hidden="true"></i></button>
</div>
*/


const todoInputu = document.querySelector(".input-vezife");
const plusButtonu = document.querySelector('.btn-vezife-elaveet');
const ulElementi = document.querySelector(".vezife-siyahisi")

plusButtonu.addEventListener("click",todoElaveEt);

ulElementi.addEventListener("click",tapsiriqiDuzeltVeyaSil);

function todoElaveEt(){
  const tapsriqDivi = document.createElement("div");
  // tapsriqDivi.classList.add("vezife-tamamlandi");
  tapsriqDivi.classList.add("vezife-item");

  const todoLiElementi = document.createElement("li");
  todoLiElementi.classList.add("vezife-tanitim")
  todoLiElementi.innerText = todoInputu.value;
  tapsriqDivi.appendChild(todoLiElementi);

  ulElementi.appendChild(tapsriqDivi)


  const checkIconuButtonu = document.createElement("button"); 
  checkIconuButtonu.classList.add("vezife-btn");
  checkIconuButtonu.classList.add("vezife-btn-tamamlandi")
  checkIconuButtonu.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;

  const silmeButonu = document.createElement("button");
  silmeButonu.classList.add('vezife-btn')
  silmeButonu.classList.add('vezife-btn-sil');
  silmeButonu.innerHTML = `<i class=" fa fa-trash " aria-hidden="true"></i>`

  tapsriqDivi.appendChild(checkIconuButtonu)
  tapsriqDivi.appendChild(silmeButonu);






  todoInputu.value = '';
}


function tapsiriqiDuzeltVeyaSil(e){
const kililenenYer = e.target;
if(kililenenYer.classList.contains("vezife-btn-tamamlandi")){
kililenenYer.parentElement.classList.toggle('vezife-tamamlandi');
}
if(kililenenYer.classList.contains('vezife-btn-sil')){
  kililenenYer.parentElement.classList.add('delete')
}

}





