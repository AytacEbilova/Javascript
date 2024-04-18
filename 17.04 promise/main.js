import { BASE_URL } from "./constant.js";
import { deleteSupplierByID } from "./category.js";
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
      <tr id="data-id">
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
    
    const editBtn = document.querySelectorAll("#editBtn");
    const deleteBtn = document.querySelectorAll("#deleteBtn");
    //delete btn

      deleteBtn.forEach((btn)=>{
        btn.addEventListener('click',function(){
          this.closest("tr").getAttribute("data-id");
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              deleteSupplierByID(element.id);
              this.closest("tr").remove();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        })
        

      })
      // editBtn.forEach((btn)=>{
      //   btn.addEventListener('click',function(){

      //   })
      // })
    })
  };







