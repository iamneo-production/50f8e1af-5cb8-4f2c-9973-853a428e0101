import './Sidenav.css'
import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav,Button} from 'react-bootstrap';
class SideNav extends Component{
    render(){
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
            </Nav>
          
        )
    }
}
export default SideNav;