import {React,Component} from 'react';
import NavigationBar from '../nav/NavigationBar';
import OrderService from '../Services/Orders/OrderService';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card,Image} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import './Orders.css';


class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            items : [],
            user:JSON.parse(localStorage.getItem('user'))
        }

    }
    componentDidMount(){
       OrderService.getUserOrders(this.state.user.id.toString()).then((res)=>{
           this.setState({
               items:res.data
              
           })
           console.log(res.data)
       })
       
        
    }
    
    render(){
        if(this.state.items.length===0)
        {
            return(
                <div>
                     <Row>
                    <Col>
                    <NavigationBar/>
                    </Col>
                </Row>
                <Container className='px-4 py-5 mx-auto'>
                <Row  className='d-flex justify-content-center'>
                <Col className="col-9">
                    <Card>
                        
                        <Card.Body>
                        
                        <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3"/>
                        <h3><strong>Your orders list is empty</strong></h3>
                        <h4>Add cart items to oderlist :-)</h4> 
                        <Link to="/home" ><Button className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Button> </Link>
                       
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>
               
                </div>
            )
        }
        else{
        return(
            <div>
                <Row>
                <NavigationBar/>
                </Row>
              
            <Container >
                
                   <h4 className="heading">Your Orders</h4>
                   
                   
                     <h6 className='heading align-self-center text-right text-muted'> {this.state.items.length} items </h6>
                   

                <Row className=' d-flex justify-content-center main '>

                    
               

                    <Col className='col-15'>
                    <Table className=' border-bottom main align-items-center'>
                    <thead>
                      <tr>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          
                      </tr>
                    
                    </thead>
                    <tbody className='border-top border-bottom main '>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.orderId}>
                                <td className="text-break text-break  text-wrap">{item.productName}</td>
                                <td className="text-break text-break  text-wrap">{item.price}</td>
                                <td className="text-break text-break  text-wrap">{item.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                    <Col className="col-4">
               <Card>
                   <Card.Title className="d-flex justify-content-between p-3 lead mb-0">Credit Card Payment Gateway</Card.Title>
                   <Container>
                           <Row>
                               <Col className="xs-12 col-md-6 col-md-offset-4">
                                <Row>
                                    <Card.Text>Payment Details</Card.Text>
                                     <div className="inlineimage">
                                          <Image className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"/>
                                          <Image className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png"/>
                                          <Image className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png"/>
                                          <Image className="img-responsive images" src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"/>
                                           
                                    </div>
                                </Row>
                                    
                               </Col>
                           </Row>
                       </Container>
                   <Card.Body>
                       <Form>
                           <Row>
                               <Col className="xs-12">
                                  <Form.Group>
                                    <Form.Label>Card Number</Form.Label>
                                      <Form.Control type=" tel" placeholder='Enter Card Number' />
                                  </Form.Group>
                               </Col>
                           </Row>
                           <Row>
                               <Col className="xs-7 col-md-7">
                                  <Form.Group>
                                    <Form.Label>EXPIRATION</Form.Label>
                                      <Form.Control type=" tel" placeholder='MM/YY' />
                                  </Form.Group>
                               </Col>
                               <Col className="xs-5 col-md-5 pull-right">
                                  <Form.Group>
                                    <Form.Label>CV CODE</Form.Label>
                                      <Form.Control type=" tel" placeholder='CVC' />
                                  </Form.Group>
                               </Col>
                           </Row>
                           <Row>
                               <Col className="xs-12">
                                  <Form.Group>
                                    <Form.Label>CARD OWNER</Form.Label>
                                      <Form.Control type=" teXT" placeholder='Enter Name' />
                                  </Form.Group>
                               </Col>
                           </Row>
                       </Form>
                   </Card.Body>
                   <Card.Footer>
                       <Row>
                           <Col className="xs-12">
                              <Button className=" btn btn-success btn-lg btn-block"> Confirm Payment</Button>
                           </Col>
                       </Row>
                   </Card.Footer>
               </Card>
            </Col>
                </Row>
                <Button type ="submit" variant="primary"> Pay </Button>
                
            </Container>

            

            
            </div>
        );
                    }
    }
}
export default Order