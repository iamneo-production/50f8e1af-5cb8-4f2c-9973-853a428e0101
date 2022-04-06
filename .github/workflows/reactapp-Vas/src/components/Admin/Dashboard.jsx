import './Sidenav.css';
import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import Image from 'react';
import SideNav from './AdminSideNav';
class Dashboard extends Component{
      render(){
          return (
              <div>
                  <Container fluid >
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
                              <section>
                              <Form>
                                      <Form.Group className="mb-3 " ControlId="SearchDashboard">
                                      <Form.Control type="text" placeholder ="Search dashboard" className="search"/>
                                      </Form.Group>
                                  </Form>

                              </section>
                              

                              
                              
                          </Col>
                      </Row>

                  </Container>
              </div>
          )
      }
}
export default Dashboard;
