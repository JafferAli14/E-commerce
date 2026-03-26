import axios from "axios";

const apiclient= axios.create({
    baseURL:"https://fakestoreapi.com",
    headers:{'Content-Type':'application/json',

    }
})

export default {

getproducts(){
    return apiclient.get("/products")
},

getproductid(id){
    return apiclient.get(`/products/${id}`)
},

getcategories(){
    return apiclient.get('/products/categories')
}

}


