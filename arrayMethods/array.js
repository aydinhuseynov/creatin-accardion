// const items = [
//   { name: "bike", price: 100 },
//   { name: "TV", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Phone", price: 500 },
//   { name: "Computer", price: 1000 },
//   { name: "Keyboard", price: 25 },
// ];

//1.FILTER METHODS
/*
const filteredItems = items.filter((item) => {
    return item.price<=100;
});

console.log((filteredItems));
*/

//2. MAP
// const itemNames  = items.map((item)=>{
//     return item.name;
// })
// console.log(itemNames);

//3.FIND
// const itemNames  = items.find((item)=>{
//     return item.name === "Book";
// })
// console.log(itemNames);

// 4. forEach
// const itemNames = items.forEach((item)=>{
// console.log(item.price);
// })

// 5.SOME bize qaytarir true or false

// const hasInexpenseItem = items.some((item) => {
//   return item.price <=0;
// });

// console.log(hasInexpenseItem); //false

// 6.REDUCE

// const total = items.reduce((currentTotal,item)=>{
//   return item.price + currentTotal
// },0);

// console.log(total); //1840

//ICLUDE

// const numbers = [1,2,3,4,5];

// const includesTwo = numbers.includes(2);

// console.log(includesTwo);

/*const questionTop = document.getElementsByClassName("question-top");

const arrayacevrilme = Array.from(questionTop);

arrayacevrilme.forEach((birsual) => {
  birsual.addEventListener("click", function () {
    const questionBottomDivi = this.nextElementSibling;

    if (questionBottomDivi.style.maxHeight) {
      questionBottomDivi.style.maxHeight = null;
    } else {
      questionBottomDivi.style.maxHeight = questionBottomDivi.scrollHeight + "px";
    }
  });
});
*/

const topQuestionDiv = document.getElementsByClassName("question-top");

let cevrilmisElement = Array.from(topQuestionDiv);

cevrilmisElement.forEach((newElements) => {
  newElements.addEventListener("click", function () {
    const questionBottom = this.nextElementSibling;

    if (questionBottom.style.maxHeight) {
      questionBottom.style.maxHeight = null;
    } else {
      questionBottom.style.maxHeight = questionBottom.scrollHeight + "px";
    }
  });
});
