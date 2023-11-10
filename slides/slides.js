
const divElementi = document.querySelector(".main-div")




/*async function myData() {
  try {
    const myFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    const chanceToJson = await myFetch.json();

    for (let i = 0; i < chanceToJson.length; i++) {

divElementi.innerHTML +=`

<table class="table >
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Username</th>
    <th scope="col">Gmail</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">${chanceToJson[i].id}</th>
    <td>${chanceToJson[i].name}</td>
    <td>${chanceToJson[i].username}</td>
    <td>${chanceToJson[i].email}</td>
  </tr>
</tbody>
</table>

`
    }
  } catch (error) {
    console.log(error);
  }
}

myData();
*/

function myFunction(){

fetch("https://jsonplaceholder.typicode.com/users")
.then(response =>response.json())
.then(data =>{

  for(let i=0;i<data.length;i++){

    divElementi.innerHTML +=`

    
<table class="table >
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Username</th>
    <th scope="col">Gmail</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">${data[i].id}</th>
    <td>${data[i].name}</td>
    <td>${data[i].username}</td>
    <td>${data[i].email}</td>
  </tr>
</tbody>
</table>


`
  }



})
.catch(error =>console.log(console.error()))



}

myFunction();






