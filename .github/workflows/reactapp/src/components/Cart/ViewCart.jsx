import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import NavigationBar from '../nav/NavigationBar';
import IncDec from './InDec';
import ViewcartService from '../Services/Cart/ViewcartService';
import OrderService from '../Services/Orders/OrderService';


class ViewCart extends Component{
    constructor(props){
        super(props);
        this.state={
            items : [],
            user:JSON.parse(localStorage.getItem('user'))
        }
        this.deleteItem=this.deleteItem.bind(this);
        this.addToOrders=this.addToOrders.bind(this);
       
    }
    componentDidMount(){
        if(this.state.user)
        {
            ViewcartService.getCartItems(this.state.user.email).then((res)=>{
                console.log(res.data)
                this.setState({
                    items:res.data
                })
            })
        }
       
       
       
        
    }
    deleteItem(cartItemId)
    {
        console.log(cartItemId);
        ViewcartService.deleteCartItem(cartItemId).then((res)=>{
            this.props.history.go(0);
            window.alert("item deleted");
            
        })
    }
    addToOrders(){
        let orders=[]
        let order=[]
        this.state.items.map(item=>
          order.push(
              {
              "productName":item.productName,
              "price":item.price,
              "userId":item.userId.id.toString(),
              "totalPrice":(item.quantity*(parseInt(item.price))).toString(),
              "quantity":item.quantity,
              "status":"Un paid"
              }
          )
          
        )
        console.log(order)
        OrderService.addToOrders(this.state.user.id.toString(),order).then((res)=>{
            this.props.history.push("/orders");
        })
       
    }
    
    render(){
        if(this.state.user)
        {

        if(this.state.items.length===0){
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
                        <h3><strong>Your Cart is Empty</strong></h3>
                        <h4>Add something to make me happy :)</h4> 
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
                    <Col>
                    <NavigationBar/>
                    </Col>
                </Row>
                <Container className='px-4 py-5 mx-auto'>
              
                <Row className='d-flex justify-content-center main align-items-center'>
                    
                <Row>
                   <Col>
                   <h4 className="heading">Shopping Cart</h4>
                   </Col>
                   <Col className='heading align-self-center text-right text-muted'>
                     <h6> {this.state.items.length} items </h6>
                   </Col>
               </Row>
                    
                    <Col className='col-15'>
                    <Table className=' border-bottom main align-items-center' >
                    <thead>
                      <tr>
                          <th>Product Name</th>
                          <th >Price</th>
                          <th>Quantity</th>
                          <th>Remove</th>
                      </tr>
                    
                    </thead>
                    <tbody className='border-top border-bottom main '>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.cartItemID} >
                                <td className="text-break text-break  text-wrap">{item.productName}</td>
                                <td className="text-break text-break  text-wrap">{item.price}</td>
                                <td><IncDec data={item}/> </td>
                                <td><button onClick={()=>this.deleteItem(item.cartItemID)} style={{marginLeft: "10px"}} className="btn btn-danger">Remove</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                <Button className='align-items-center' variant="primary" onClick={()=>this.addToOrders()}>Place Order</Button>
                </Container>
                
               
                </div>  
           
        );
                    }
                    }
        else{
            return(
                <Link to="/"></Link>
            )
        }            
    }
}
export default ViewCart;