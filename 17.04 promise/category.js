import { BASE_URL } from "./constant.js";

const endpoint='/suppliers';

export async function deleteSupplierByID(id){
   let response=null;
   await axios.delete(BASE_URL +endpoint+`/${id}`)
    .then((res)=>{
    response=res;
   }).catch((err)=>{
    response=err;
   })
    return response;
}
export async function getOneSupplier(){
    let obj={
        supplier:null,
        error:null
    }
    await axios.get(BASE_URL+endpoint+`/${id}`)
    .then((res)=>{
        obj.supplier=res.data;
    }).catch((err)=>{
        obj.error=err;
    })
    return obj;
}
export async function postSupplier(newSupplier){
    let response=null;
    await axios.post(BASE_URL+endpoint, newSupplier)
    .then((res)=>{
        response=res;
    }).catch((err)=>{
        response=err;
    })
    return response;
}
