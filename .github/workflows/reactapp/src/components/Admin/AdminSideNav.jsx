import './Sidenav.css'
import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav,Button} from 'react-bootstrap';
class SideNav extends Component{
    constructor(props)
  {
    super(props);
    this.state={
        admin: JSON.parse(localStorage.getItem('admin'))
      }
    this.log_out=this.log_out.bind(this);
    
  }
    log_out=(e)=>{
        this.setState({
            admin:null
          }) 
          
        localStorage.removeItem('admin')
        
       
     }
    render(){
        if(this.state.admin!=null)
        {
        return (
          <Nav className=" d-none d-md-block sidebar" expand="md" >
            
            <Nav.Item className="mb-3 ">
            <Link to ="/admin-home"> <Button variant="dark">Dashboard</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
            <Link to ="/admin"> <Button variant="dark">User</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
            <Link to ="/addProduct"> <Button variant="dark">Product</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
            <Link to ="/admin-orders"> <Button variant="dark">Orders</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3">
            <Link to ="/"> <Button variant="dark" onClick={this.log_out}>Logout</Button></Link>
            </Nav.Item>
            </Nav>
          
        )
        }
        else{
            return(
              <Link to="/"></Link>
            )
          }
    }
}
export default SideNav;