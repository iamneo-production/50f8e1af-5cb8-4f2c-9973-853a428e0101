import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import SideNav from './AdminSideNav'
import './EditUser.css';
import ListuserService from '../Services/Admin/ListuserService';


class EditUser extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            emailpara:this.props.match.params.email,
            email:"",
            username:"",
            mobileNumber:"",
            role:"",
            active:"",
            status:""
             }
       
        this.cancelUser=this.cancelUser.bind(this);
        this.updateUser=this.updateUser.bind(this);
        this.restUser=this.restUser.bind(this);
        this.usernameChange=this.usernameChange.bind(this);
        this.emailChange=this.emailChange.bind(this);
        this.mobileChange=this.mobileChange.bind(this);
        this.roleChange=this.roleChange.bind(this);
        this.activeChange=this.activeChange.bind(this);
    }
    componentDidMount()
    {
        ListuserService.getuserByEmail(this.state.emailpara).then((res)=>{
            let user=res.data;
            
           this.setState({
               email:user.email,
               username:user.username,
               role:user.role,
               mobileNumber:user.mobileNumber,
               active:user.active
           })
        })
    }
    cancelUser()
    {
        this.props.history.push("/admin");
    }
    restUser(e)
    {
        ListuserService.getuserByEmail(this.state.emailpara).then((res)=>{
            let user=res.data;
            
           this.setState({
               email:user.email,
               username:user.username,
               role:user.role,
               mobileNumber:user.mobileNumber,
               active:user.active,
               status:""
           })
        })
    }
    updateUser=(e)=>
    {
      e.preventDefault();
      let user={
          username:this.state.username,
          mobileNumber:this.state.mobileNumber,
          email:this.state.email,
          role:this.state.role,
          active:this.state.active
      };
      console.log(user);
      ListuserService.updateUser(user,this.state.email).then((res)=>{
        this.setState({
            status:"Successfully updated!"
        });
           this.props.history.push(`/admin-edituser/${this.state.email}`)
           
      })
    }

    usernameChange=(event)=>{
        this.setState({
            username: event.target.value
         });
    }
    mobileChange=(event)=>{
        this.setState({
            mobileNumber: event.target.value
         });
    }
    emailChange=(event)=>{
        this.setState({
            email: event.target.value
         });
    }
    roleChange=(event)=>{
        this.setState({
            role: event.target.value
         });
    }
    activeChange=(event)=>{
        this.setState({
            active: event.target.value
         });
    }
    render(){

        return (
            <Container fluid>
                <Row> 
                    <Col xs ="2" id ="sidebar-wrapper" className="bg-dark">
                      <SideNav/>
                    </Col>
                  <Col  xs ="10">
                  <div>
                      <h1 align ="center"> Edit User Details</h1>
                  </div>
                  <div>
                    <Form >
                    <Form.Group className="mb-3" controlId="username" >
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text"  value={this.state.username} onChange={this.usernameChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mobile"  >
                    <Form.Label>Enter Mobile number</Form.Label>
                    <Form.Control type="text"   value={this.state.mobileNumber} onChange={this.mobileChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email"  >
                    <Form.Label>Enter email</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.emailChange} />
                    </Form.Group>
                   
                    <Form.Group className="mb-3" controlId="role"  >
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text"  value={this.state.role} onChange={this.roleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="active"  >
                    <Form.Label>Active</Form.Label>
                    <Form.Control type="text"  value={this.state.active} onChange={this.activeChange} />
                    </Form.Group>

                   </Form>    
                       
                  </div>
                  <div>
                  <Col>
                    <Button variant ="success" type="submit" inline id="save" onClick={this.updateUser}> Save </Button>
                    <Button variant ="primary" type="reset" inline id="reset" onClick={this.restUser}> Reset </Button>
                    <Button variant ="danger" type="cancel" inline id="cancel" onClick={this.cancelUser}> Back </Button>
                  </Col>
                  </div>
                  <p style={{color:'green'}}>{this.state.status}</p>
                  </Col>
                  
                    
              </Row>


            </Container>
        )
    }
}
export default EditUser;