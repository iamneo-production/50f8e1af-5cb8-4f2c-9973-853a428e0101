import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, Row,Col} from 'react-bootstrap';
import {Form,Button,Card} from 'react-bootstrap';
import LogiService from '../../Services/User/LogiService';

import NavigationBar from '../../nav/NavigationBar';

import './Login.css';



class Login extends Component{
  constructor(props)
  {
     super(props);
     this.state={
        email:"",
        pass:"",
        emailerror:"",
        passerror:"",
        user:JSON.parse(localStorage.getItem('user'))
     }
     this.validatefrom=this.validatefrom.bind(this);
     this.emailchange=this.emailchange.bind(this);
      this.changepass=this.changepass.bind(this);
  }
  componentDidMount()
  {
    if(this.state.user)
    {
      this.props.history.push("/home")
    }
  }
  emailchange=(event)=>
  {
   this.setState({
         email: event.target.value 
   });
   
  }
  changepass=(event)=>
  {
   this.setState({
         pass: event.target.value 
   });
   
  }



   validatefrom=(e)=>
   { 
      document.getElementById('email').style.border="";
      document.getElementById('password').style.border="";
      this.setState({emailerror :""})
      this.setState({passerror :""})
      e.preventDefault();
      if(this.state.email==="")
      {
          this.setState({emailerror:"Email should not be empty"})
          document.getElementById('email').style.border="2px solid red";
      }
      else if(this.state.email==="admin"&&this.state.pass==="admin")
      {
            this.props.history.push("/admin/listusers")
      }
      else if(!this.state.email.includes("@"))
      { 
         document.getElementById('email').style.border="2px solid red";
          this.setState({emailerror:"Enter valid mail"})
      }
      else if(!this.state.pass.match("^(?=.*[0-9])"
      + "(?=.*[a-z])(?=.*[A-Z])"
      + "(?=.*[@#$%^&+=])"
      + "(?=\\S+$).{8,20}$"))
      { 
         document.getElementById('password').style.border="2px solid red";
          this.setState({passerror:"Invalid password"});
      }
      else{
            let user={
          email:this.state.email,
          password:this.state.pass
         
                }
                
                LogiService.authUser(user).then((res)=>{
                  
                  localStorage.setItem('user', JSON.stringify(res.data))
                  console.log(res.data)
                  console.log(JSON.stringify(res.data))
                 
                  this.props.history.go(0);

                })     
      }
   
   }
   
    render(){
        return(
          
      <div  >
       <NavigationBar/> 
     
        
<div >
<Container >
  <Row>
    <Col>
<div className=" text-dark p-5 p-lg-0 pt-lg-5 text-left p-2 h-100%" >
 
    <div >
     <h1>LOG IN</h1>
      <p>  <Link to='/'>Forgotten Your Password??</Link></p>
     
      <Form id ="log-in-form" >
  <Form.Group className="mb-3" id="email"  >
  <Form.Control  type="email" value={this.state.email}  onChange={this.emailchange}  placeholder="Enter email"  >
  </Form.Control>
  
</Form.Group>
<p style={{color: "red"}}>{this.state.emailerror}</p> 

  <Form.Group className="mb-3" controlId="password">
    
    <Form.Control type="password" value={this.state.pass} onChange={this.changepass} placeholder="Password" />
  </Form.Group>
  <p style={{color: "red"}}>{this.state.passerror}</p> 
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to terms and conditions" />
  </Form.Group>
  <Button onClick={this.validatefrom} variant="primary" type="submit" className="mb-4">
    Submit
  </Button>
</Form>
  </div>
  
 </div>
 </Col>
 <Col>
 <div className=" p-5 p-lg-0 pt-lg-5 text-left p-2  h-100% " >
    <div className=" text-dark mb-3" >
    <h1 >JOIN THE COMMUNITY. GET REWARDED</h1> 
       <p>Join the Footlocker membership program:</p>
       <ul>
         <li >
         <span>Get coupons and exciting offers</span>
         </li>
         <li >
        <span>Earn access to shop limited edition products</span>
         </li>
         <li>
         <span>Level up for exclusive access to sport, yoga and music events</span>
         </li>
         <li>
         <span>Refer to more people and get personalized discounts</span>
         </li>
        </ul>
        <h6>Join now and start earning points to access new levels and rewards. It's time to unlock the best of adidas.</h6>
       <Link to='/signup'> <Button type="submit" className="gl-cta gl-cta--primary"  >Sign up</Button></Link>

    </div>
    </div>
    </Col>
    </Row>
    <Row>
      <Col >
    <Card className="card">
  <Card.Header className=" text-dark"><h3 align="center">Instant sign Up offer</h3></Card.Header>
  <Card.Body className=" text-dark">
    <Card.Title>E-footlocker Mega offers</Card.Title>
    <Card.Text>
      Join the community and get upto 15% discount on limited edition items
    </Card.Text>
    <Link to='/signup'> <Button type="submit" className="gl-cta gl-cta--primary"  >Sign up</Button></Link>
  </Card.Body>
  </Card>
  </Col>
    </Row>
        </Container>
        </div>
 
</div>
              
        )
    }
}
export default Login;