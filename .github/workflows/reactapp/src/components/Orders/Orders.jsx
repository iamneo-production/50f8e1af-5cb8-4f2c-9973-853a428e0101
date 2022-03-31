import {React,Component} from 'react';
import NavigationBar from '../nav/NavigationBar';
import OrderService from '../Services/Orders/OrderService';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


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

               <Col className='col-8'>
            <Container className='px-4 py-5 mx-auto'>

                <Row className='d-flex justify-content-center main align-items-center'>
                    <Row>
                    <Col>
                   <h4 className="heading">Your Orders</h4>
                   </Col>
                   <Col className='heading align-self-center text-right text-muted'>
                     <h6> {this.state.items.length} items </h6>
                   </Col>
                    </Row>
               

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
                </Row>
                <Button type ="submit" variant="primary"> Pay </Button>
            </Container>
            </Col>
                
            <Col>
                
            </Col>
            
            </div>
        );
                    }
    }
}
export default Order;