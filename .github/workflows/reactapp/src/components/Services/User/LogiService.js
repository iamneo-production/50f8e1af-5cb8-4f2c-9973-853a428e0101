import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/login";
const USER_SERVICE_API2="http://localhost:8080/logout";
class LoginUser  {
    authUser(user)
    {
        return axios.post(USER_SERVICE_API,user);
    }
    logoutUser(email)
    {
      return axios.post(USER_SERVICE_API2,email)
    }
   
}
export default new LoginUser()