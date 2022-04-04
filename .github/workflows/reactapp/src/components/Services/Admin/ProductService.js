import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/admin";
const USER_SERVICE_API2="http://localhost:8080/admin/addProduct";
const USER_SERVICE_API3="http://localhost:8080/admin/delete";
const USER_SERVICE_API4="http://localhost:8080/home";
const USER_SERVICE_API5="http://localhost:8080/admin/productEdit";


class ProductService  {
    addProduct(product)
    {
      return axios.post(USER_SERVICE_API2,product);
    }
    getProducts()
    {
        return axios.get(USER_SERVICE_API);
    }
    getProductsUser()
    {
        return axios.get(USER_SERVICE_API4);
    }
    getProductById(id)
    {
       
        return axios.get(USER_SERVICE_API5+'/'+id);
    }
    updateProduct(product,id)
    {
        return axios.put(USER_SERVICE_API5+'/'+id,product);
    }
    deleteProduct(id)
    {
        return axios.delete(USER_SERVICE_API3+'/'+id);
    }
   
}
export default new ProductService()