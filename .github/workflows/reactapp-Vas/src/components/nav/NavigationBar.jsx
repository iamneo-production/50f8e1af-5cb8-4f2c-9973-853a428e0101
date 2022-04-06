import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import './navbar.css';

class NavigationBar extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user: JSON.parse(localStorage.getItem('user'))
    }
    this.log_out=this.log_out.bind(this);
    console.log(this.state.user)
  }
  
 
  log_out=(e)=>{
     this.setState({
       user:null
     }) 
     localStorage.removeItem('user')
    
  }
render(){
  if(this.state.user!=null)
  {
    return (
    <Navbar className="navbar navbar-dark bg-dark" expand="lg">
    <Container fluid>
      <Link to="/home"><Navbar.Brand>Footwear Store</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Item className="mb-3 itemDesign ">
            <Link to ="/home"> <Button className ="buttonDesign" variant="dark">Home</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3 itemDesign">
            <Link to ="/cart"> <Button className="buttonDesign" variant="dark">cart</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3 itemDesign">
            <Link to ="/orders"> <Button className="buttonDesign" variant="dark"> My orders</Button></Link>
            </Nav.Item>
           </Nav>
          <Nav>
          <Nav.Item className="mb-3">
             <Link to="/"><Button variant="dark" onClick={this.log_out}>Logout</Button></Link>
            </Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
  }
  else{
    return(
      <Link to="/"></Link>
    )
  }
 }


}
export default NavigationBar;