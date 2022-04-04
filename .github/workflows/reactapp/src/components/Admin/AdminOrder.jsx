import {React,Component} from 'react';
import {Container, Row,Col,Table} from 'react-bootstrap';
import SideNav from './AdminSideNav';
import OrderService from '../Services/Orders/OrderService';

class AdminOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            items : []
        }
       
   

    }
    componentDidMount(){
        OrderService.getAdminOrders().then((res)=>{
            this.setState({
                items:res.data
            })
        })
        
         
     }
    
    render(){
        return(
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
                        <h2 className="text-center">Order List</h2>
                    <Table>
                    <thead>
                      <tr>
                          <th>Order-Id</th>
                          <th>User-Id</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          
                      </tr>
                    
                    </thead>
                    <tbody>
                        {
                            this.state.items.map(
                                item=>
                                <tr key ={item.productId}>
                                <td className="text-break text-break text-center text-wrap">{item.orderId}</td>
                                <td className="text-break text-break text-center text-wrap">{item.userId}</td>
                                <td className="text-break text-break text-center text-wrap">{item.productName}</td>
                                <td className="text-break text-break text-center text-wrap">{item.price}</td>
                                <td className="text-break text-break text-center text-wrap">{item.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                    </Col>
                </Row>
                
            </Container>
           
            </div>
        );
    }
}
export default AdminOrder;