import { BASE_URL } from "./constant.js";

const url = new URLSearchParams(window.location.search);
const id = url.get("id"); 

console.log(id);

const wrapper = document.querySelector(".wrapper");

async function getDetails(endpoint, id) {
  const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
  const data = await response.json();
  drawDetailPage(data);
}

function drawDetailPage(data) {
  wrapper.innerHTML = ''; 
  wrapper.innerHTML=`
  <div class="card-body">
    <h5 class="card-title">${data.companyName}</h5>
    <p class="card-text">${data.contactTitle}</p>
    <p class="card-text">${data.address.city},${data.address.country}</p>
    <a href="index.html" class="btn btn-primary">Go back</a>
  </div>
  `

  };

getDetails("suppliers", id); 

