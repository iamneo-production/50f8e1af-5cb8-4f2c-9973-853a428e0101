import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/home";
const USER_SERVICE_API2="http://localhost:8080/cart";
const USER_SERVICE_API3="http://localhost:8080/cart/delete";
const USER_SERVICE_API4="http://localhost:8080/home";
const USER_SERVICE_API5="http://localhost:8080/admin/productEdit";


class ViewcartService  {
    addItemToCart(id,cartItem)
    {
      return axios.post(USER_SERVICE_API+"/"+id,cartItem);
    }
                                                                
   getCartItems(id)
   {
       return axios.get(USER_SERVICE_API2+"/"+id)
   }
   
   deleteCartItem(id)
   {
       return axios.delete(USER_SERVICE_API3+"/"+id)
   }
   increamentQuant(id,quantity)
   {
       return axios.put(USER_SERVICE_API2+"/update/"+id,quantity)
   }
   
}
export default new ViewcartService()