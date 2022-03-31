import  './App.css';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import {BrowserRouter as Router  ,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import {Link} from 'react-router-dom';
import UserManagement from './components/Admin/UserManageMent';
import Dashboard from './components/Admin/Dashboard';
import EditUser from './components/Admin/EditUser';
import ViewProduct from './components/Admin/ViewProduct'
import EditProduct from './components/Admin/EditProduct';
import AddProduct from './components/Admin/AddProduct';
import ViewCart from './components/Cart/ViewCart';
import Orders from './components/Orders/Orders';
import AdminOrders from './components/Admin/AdminOrder';

function App() {
  const user=JSON.parse(localStorage.getItem('user'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  if(user)
  {
  return (
    
    <div className ='App'> 
    <Router >
        <Switch>
        <Route exact path ='/' component ={Login}/>
         <Route path ="/signup" component={Home}/>
         <Route path ="/home" component={Home}/>
         <Route path ="/orders" component={Orders}/>
         <Route path ="/cart" component={ViewCart}/>
        </Switch>

      </Router>
      
    </div>
  );
  }

  else if(admin)
  {
    return(
      <div className ='App'>
      <Router >  
      <Switch>
      <Route exact path ='/' component ={Login}/>
         <Route path ="/signup" component={UserManagement}/>
         
    <Route  path ="/admin" component={UserManagement}/>
    <Route path ="/admin-home" component={Dashboard}/>
    <Route path ="/admin-edituser/:email" component={EditUser}/>
    <Route path ="/addProduct" component={ViewProduct}/>
    <Route path ="/addProduct-Editproduct/:id" component={EditProduct}/>
    <Route path ="/addProduct-addProduct" component={AddProduct}/>
    
    <Route path ="/admin-orders" component={AdminOrders}/>
   
    </Switch>
    </Router>
    </div>
    );
  }

  else{
    return(
     <Router >
        <Switch>
        <Route exact path ='/' component ={Login}/>
         <Route path ="/signup" component={Signup}/>
         
         <Route path ="/home" component={Login}/>
         <Route path ="/admin" component={Login}/>
         <Route path ="/admin-home" component={Login}/>
         <Route path ="/admin-edituser/:email" component={Login}/>
         <Route path ="/addProduct" component={Login}/>
         <Route path ="/addProduct-Editproduct/:id" component={Login}/>
         <Route path ="/addProduct-addProduct" component={Login}/>
         <Route path ="/cart" component={Login}/>
         <Route path ="/admin-orders" component={Login}/>
         <Route path ="/orders" component={Login} />
        
        </Switch>

      </Router>
    )
  }
}

export default App;
