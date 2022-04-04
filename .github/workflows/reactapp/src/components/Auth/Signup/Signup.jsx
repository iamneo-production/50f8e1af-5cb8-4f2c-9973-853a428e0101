import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import NavigationBar from '../../nav/NavigationBar';
import Signupuser from "../../Services/User/SignupService"
class Signup extends Component{
   constructor(props)
   {
       super(props);
       this.state={
           sstatus:"",
         semail:"",
         susername:"",
         smobile:"",
         spass:"",
         sconpass:"",
         
         semailerror:"",
         susernameerror:" ",
         smobileerror:"",
         spasserror:"",
         spasserror1:"",
         sconpasserror:"",
         
      
            }
       this.semailchange=this.semailchange.bind(this);
       this.susernamechange=this.susernamechange.bind(this);
       this.smobilechange=this.smobilechange.bind(this);
       this.spasschange=this.spasschange.bind(this);
       this.sconpasschange=this.sconpasschange.bind(this);
       
       this.svalidateform=this.svalidateform.bind(this);
   }
  semailchange=(event)=>{
      this.setState({
          semail: event.target.value
       });
  }
  susernamechange=(event)=>{
   this.setState({
       susername: event.target.value
   });
  }
  smobilechange=(event)=>{
   this.setState({
       smobile: event.target.value});
  }
  spasschange=(event)=>{
   this.setState({spass: event.target.value});
  }
  sconpasschange=(event)=>{
   this.setState({
       sconpass: event.target.value});
  }
  
  svalidateform=(e)=>
  {
   e.preventDefault();
   document.getElementById('email').style.border="";
   document.getElementById('username').style.border="";
   document.getElementById('mobileNumber').style.border="";
   document.getElementById('password').style.border="";
   document.getElementById('confirmPassword').style.border="";
  
   this.setState({semailerror: ""})
   this.setState({susernameerror: ""})
   this.setState({smobileerror: ""})
   this.setState({spasserror: ""})
   this.setState({sconpasserror: ""})
  
   
   if(this.state.semail==="")
   {
       this.setState({semailerror:"Email should not be empty"})
       document.getElementById('email').style.border="2px solid red";
   }
   else if(!this.state.semail.includes("@"))
   {
       this.setState({semailerror:"Enter a valid Mail"})
       document.getElementById('email').style.border="2px solid red";
   }
   else if(this.state.susername==="")
   {
       this.setState({susernameerror:"Username should not be empty"})
       document.getElementById('username').style.border="2px solid red";
   }
   else if(this.state.smobile==="")
   {
       this.setState({smobileerror:"Mobile should not be empty"})
       document.getElementById('mobileNumber').style.border="2px solid red";
   }
   else if(this.state.smobile.length<10)
   {
       this.setState({smobileerror:"Enter a valid Mobile Number"})
       document.getElementById('mobileNumber').style.border="2px solid red";
   }

   else if(this.state.spass==="")
   {
       this.setState({spasserror:"Password should not be empty"})
       document.getElementById('password').style.border="2px solid red";
   }
   else if(this.state.sconpass==="")
   {
       this.setState({sconpasserror:"Please confirm the password"})
       document.getElementById('confirmPassword').style.border="2px solid red";
   }
   else if(!this.state.spass.match("^(?=.*[0-9])"
     + "(?=.*[a-z])(?=.*[A-Z])"
     + "(?=.*[@#$%^&+=])"
     + "(?=\\S+$).{8,20}$"))
     { 
        document.getElementById('password').style.border="2px solid red";
         this.setState({spasserror:"Password policy : Atleast 8 length,Atleast one uppercase,Atleast one lowercase and a numeric,a special symbol "});
   }
   else if(this.state.sconpass!==this.state.spass)
   {
       this.setState({sconpasserror:"Password not matched!!"})
       document.getElementById('confirmPassword').style.border="2px solid red";
   }
   
   else
    {    
        let user={
            username:this.state.susername,
            email:this.state.semail,
            password:this.state.spass,
            mobileNumber:this.state.smobile
                  }
        console.log(user)
        
        Signupuser.createUser(user).then((res)=>{
            console.log(res)
            if(res.status===200)
            {
                this.setState({
                    sstatus:"Your registration is successfull!. Please Login !!"
                })
               
           this.props.history.push('/')
            }
          console.log(res);
        });
            
    
        
        
    }

    
   
  }
    render(){
        return(
        <div>
           <NavigationBar/>
           <div >
              <Container>
                 <Row>
                    <Col>
                      <div className=" text-dark p-5 p-lg-0 pt-lg-5 text-left p-2 h-100%" >
                      <div >
                              <h1>Sign Up</h1>
                              <Form id ="log-in-form" >
                              <Form.Group className="mb-3" controlId="email"  >
                              <Form.Control type="email" value={this.state.semail} onChange={this.semailchange} placeholder="Enter email"  />
                              </Form.Group>
                              <p style={{color: "red"}}>{this.state.semailerror}</p> 
                              <Form.Group className="mb-3" controlId="username"  >
                              <Form.Control type="text" value={this.state.susername} onChange={this.susernamechange} placeholder="Enter username"  />
                              </Form.Group>
                              <p style={{color: "red"}}>{this.state.susernameerror}</p> 
                              <Form.Group className="mb-3" controlId="mobileNumber"  >
                              <Form.Control type="text" value={this.state.smobile} onChange={this.smobilechange}  placeholder="Enter phone number"  />
                              </Form.Group>
                              <p style={{color: "red"}}>{this.state.smobileerror}</p> 
                              <Form.Group className="mb-3" controlId="password"  >
                              <Form.Control type="password" value={this.state.spass}  onChange={this.spasschange}  placeholder="Enter password"  />
                              </Form.Group>
                              <p style={{color: "red"}}>{this.state.spasserror}</p> 

                           <Form.Group className="mb-3" controlId="confirmPassword">
                              
                              <Form.Control type="password" value={this.state.sconpass} onChange={this.sconpasschange}  placeholder="Confirm password" />
                           </Form.Group>
                           <p style={{color: "red"}}>{this.state.sconpasserror}</p> 
                           
                           <p style={{color: "red"}}>{this.state.sstatus}</p> 
                           <Form.Group className="mb-2" controlId="Existing">
                              <Link to='/' >Already a user? Login</Link>
                           </Form.Group>
                           <Button onClick={this.svalidateform} variant="primary" type="submit" className="mb-4" id="submit">
                              Submit
                           </Button>
                           </Form>
                           </div>
  
                      </div>
                    </Col>
                     <Col>
                       <div className=" p-5 p-lg-0 pt-lg-5 text-left p-2  h-100% " >
                              
                       </div>
                     </Col>
                 </Row>
                 <Row>
                    <Col>
                     
                    </Col>
                 </Row>
              </Container>
           </div>
        </div>
              
        )
    }
}
export default Signup;