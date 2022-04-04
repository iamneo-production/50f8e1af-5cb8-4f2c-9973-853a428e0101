import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/orders";
const USER_SERVICE_API1="http://localhost:8080/admin/orders";
const USER_SERVICE_API2="http://localhost:8080/saveOrder";

class OrderService  {
   getUserOrders(id)
   {
       return axios.post(USER_SERVICE_API+'/'+id)
   }
   getAdminOrders()
   {
       return axios.get(USER_SERVICE_API1)
   }
   addToOrders(id,orders)
   {
       return axios.post(USER_SERVICE_API2+"/"+id,orders)

   }
}
export default new OrderService()