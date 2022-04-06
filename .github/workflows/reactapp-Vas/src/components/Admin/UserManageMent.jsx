import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import Image from 'react';
import SideNav from './AdminSideNav';
import ListUserService from '../Services/Admin/ListuserService';
import './Sidenav.css';
class UserManagement extends Component{
    constructor(props){
        super(props);
        this.state ={
              users: []
        }
        this.editUser=this.editUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
    }
    editUser(email)
    {
             
             this.props.history.push(`/admin-edituser/${email}`);
    }
    deleteUser(email)
    {
             
             ListUserService.deleteUser(email).then((res)=>{
                this.props.history.go(0);
                 window.alert("user succefully deleted ");
                
             })
            
    }
    componentDidMount(){
        ListUserService.getUsers().then((res)=>{
           this.setState({
               users:res.data
           });
        });
    }
      render(){
          return (
              <div>
                  <Container fluid>
                      <Row>
                          <Col xs ="2" id="sidebar-wrapper" className="bg-dark">
                              <div>
                              <h2 className="text-light">
                                  Admin 
                              </h2>
                                 <SideNav/>
                              </div>
                              
                          </Col>
                          <Col xs ="10">
                             <h2 className="text-center"> Users List</h2>
                                <div>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>User Name</th>
                                                 <th>User Email ID </th>
                                                <th>User Mobile Number</th>
                                                <th> User Status</th>
                                                <th> Role</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.users.map(
                                                    user=>
                                                    <tr key={user.id}>
                                                    
                                                   <td>{user.username}</td>
                                                   <td>{user.email}</td>
                                                   <td>{user.mobileNumber}</td>
                                                   <td>{user.active.toString()}</td>
                                                   <td>{user.role}</td>
                                                   <td>
                                                       <button onClick={()=>this.editUser(user.email)} className="btn btn-info">Update</button>
                                                       <button onClick={()=>this.deleteUser(user.email)} style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                                                   </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>

                                </div>
                        </Col>
                      </Row>

                  </Container>
              </div>
          )
      }
}
export default UserManagement;