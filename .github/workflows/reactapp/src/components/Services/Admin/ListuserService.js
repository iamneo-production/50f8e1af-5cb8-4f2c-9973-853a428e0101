import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/admin/users";
const USER_SERVICE_API2="http://localhost:8080/user";
const USER_SERVICE_API3="http://localhost:8080/user/update";
const USER_SERVICE_API4="http://localhost:8080/user/delete";
class ListUserService  {
    getUsers()
    {
        return axios.post(USER_SERVICE_API);
    }
    getuserByEmail(email)
    {
       
        return axios.get(USER_SERVICE_API2+'/'+email);
    }
    updateUser(user,email)
    {
        return axios.put(USER_SERVICE_API3+'/'+email,user);
    }
    deleteUser(email)
    {
        return axios.delete(USER_SERVICE_API4+'/'+email);
    }
   
}
export default new ListUserService()