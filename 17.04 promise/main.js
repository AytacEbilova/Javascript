import { BASE_URL } from "./constant.js";
const loadingOverlay=document.getElementById("loading-overlay")
async function getData(endpoint) {
  
  try{
    loadingOverlay.classList.remove("d-none");
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
     drawLists(data);
  } catch(error){
  }finally{
    loadingOverlay.classList.add("d-none")
  }
 
    
  
 
}

console.log(getData("suppliers"));

const lists = document.querySelector(".lists");

function drawLists(array) {
  array.forEach((element) => {
    lists.innerHTML += `
      <tr>
        <th scope="row">${element.id}</th>
        <td>${element.companyName}</td>
        <td>${element.address.street}</td>
        <td>${element.address.phone}</td>
        <td>${element.address.city}</td>
        <td><a href="details.html?id=${element.id}" class="btn btn-primary">Details</a></td>
        <td><a href="" class="btn btn-success" id="editBtn">Edit</a></td>
        <td><button class="btn btn-danger" id="deleteBtn">Delete</button></td>
      </tr>
    `;
  });
}

const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");



