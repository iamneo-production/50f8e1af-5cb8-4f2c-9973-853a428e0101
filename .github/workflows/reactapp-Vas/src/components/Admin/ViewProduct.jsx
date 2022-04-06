import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row,Col,Table} from 'react-bootstrap';
import {Form, FormControl, Button,Card} from 'react-bootstrap';
import Image from 'react';
import SideNav from './AdminSideNav';
import './Sidenav.css';
import AddProduct from './AddProduct';
import ProductService from '../Services/Admin/ProductService';
class ProductList extends Component{
    constructor(props){
        super(props);
        this.state={
            products : []
        }
      this.editProduct=this.editProduct.bind(this);
      this.deleteProduct=this.deleteProduct.bind(this);

    }
   
    componentDidMount(){
        ProductService.getProducts().then((res)=>{
           this.setState({
               products:res.data
           }) 
           console.log(res.data)
        })
        
    }
    deleteProduct(id)
    {
             ProductService.deleteProduct(id).then((res)=>{
                this.props.history.go(0);
                window.alert("Product succefully deleted "); 
                
             })
             this.props.history.push("/addProduct");
            
    }
    editProduct(id)
    {
             
             this.props.history.push(`/addProduct-Editproduct/${id}`);
    }
    render(){
        return(<div>
           
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
                                  <div>
                                      <Container fluid>
                                          <Row>
                                            <Col>
                                            <h2 className="text-center"> Product List</h2>
                                            </Col>
                                            <Col>
                                               <Link to='/addProduct-addProduct'><Button style={{margin: "10px"} }type ="submit" variant ="primary" align="right">Add Product</Button></Link>        
                                            </Col>
                                          </Row>
                                            
                                      </Container>
                                  </div>
                                  <div>
                                      <Table className="text-center table table-striped" >
                                          <thead>
                                              <tr>
                                                  <th>Image</th>
                                                  <th>Product name</th>
                                                   <th>Price</th>
                                                  <th>Quantity</th>
                                                  <th>Description</th>
                                                  <th>Action</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {
                                                   this.state.products.map(
                                                       product =>
                                                       <tr key={product.productId}>
                                                         <td ><img src={product.imageUrl} style={{width:"200px",height:"150px"}} className="rounded mx-auto d-block" alt="product image"></img>
                                                         </td>
                                                         <td className="text-break text-break text-center text-wrap">{product.productName}</td>
                                                         <td className="text-break text-break text-center text-wrap">{product.price}</td>
                                                         <td className="text-break text-break text-center text-wrap">{product.quantity}</td>
                                                         <td className="text-break text-break text-center text-wrap">{product.description}</td>

                                                         <td>
                                                         <button  style={{marginLeft: "10px",marginTop:"10px"}}className="btn btn-info" onClick={()=>this.editProduct(product.productId)}>Update</button>
                                                         <button  style={{marginLeft: "10px",marginTop:"10px",width:"78px"}} onClick={()=>this.deleteProduct(product.productId)} className="btn btn-danger">Delete</button>
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
        </div>);
        
    }
}
export default ProductList;