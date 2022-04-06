import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/signup";
class Signupuser  {
    createUser(user)
    {
        return axios.post(USER_SERVICE_API,user);
    }
   
}
export default new Signupuser()