import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import SideNav from './AdminSideNav'
import './EditUser.css';
import ProductService from '../Services/Admin/ProductService';

class EditProduct extends Component{
  constructor(props){
    super(props);
    this.state={
      id:this.props.match.params.id,
       sproductname : "",
       sproductprice :"", 
       sproductdescription:"",
       sproductimageurl: "",
       sproductquantity: "",
       sproductnameerror : "",
       sproductpriceerror :"", 
       sproductimageurlerror: "",
       sproductquantityerror: "",
       sproductdescriptionerror:"",
       status:""
    }
    this.sproductnamechange= this.sproductnamechange.bind(this);
    this.sproductpricechange = this.sproductpricechange.bind(this);
    this.sproductimageurlchange = this.sproductimageurlchange.bind(this);
    this.sproductquantitychange = this.sproductquantitychange.bind(this);
    this.sproductdescriptionchange=this.sproductdescriptionchange.bind(this);
    this.svalidateform = this.svalidateform.bind(this);
    this.restProduct=this.restProduct.bind(this);
    this.cancelProduct=this.cancelProduct.bind(this);
  }
  componentDidMount()
  {
    ProductService.getProductById(this.state.id).then((res)=>{
      let product=res.data;
       console.log(res.data)
       this.setState({
        sproductname :product.productName,
        sproductprice :product.price, 
        sproductdescription:product.description,
        sproductimageurl:product.imageUrl,
        sproductquantity:product.quantity,
       })

    })
  
  }

   sproductnamechange=(event)=>{
    this.setState({
      sproductname : event.target.value
    });
  }
  sproductpricechange=(event)=>{
    this.setState({
      sproductprice : event.target.value
    });
  }
  sproductimageurlchange=(event)=>{
    this.setState({
      sproductimageurl : event.target.value
    });
  }
   sproductquantitychange=(event)=>{
    this.setState({
      sproductquantity : event.target.value
    });
  }
  sproductdescriptionchange=(event)=>{
    this.setState({
      sproductdescription : event.target.value
    });
  }
 svalidateform =(e)=>{
  e.preventDefault();
  document.getElementById('enterProductName').style.border="";
   document.getElementById('enterProductPrice').style.border="";
   document.getElementById('enterProductImageUrl').style.border="";
   document.getElementById('enterProductQuantity').style.border="";
   document.getElementById('enterProductDescription').style.border="";
   this.setState({sproductnameerror: ""})
   this.setState({sproductpriceerror: ""})
   this.setState({sproductimageurlerror: ""})
   this.setState({sproductquantityerror: "",
  sproductdescriptionerror:"",status:""})

   
   if(this.state.sproductname==="")
   {
       this.setState({sproductnameerror:"Product name should not be empty"})
       document.getElementById('enterProductName').style.border="2px solid red";
   }
  else if(this.state.sproductprice==="")
   {
       this.setState({sproductpriceerror:"Product price should not be empty"})
       document.getElementById('enterProductPrice').style.border="2px solid red";
   }
   else if(this.state.sproductimageurl==="")
   {
       this.setState({sproductimageurlerror:"Product image url should not be empty"})
       document.getElementById('enterProductImageUrl').style.border="2px solid red";
   }
   else if(this.state.sproductquantity==="")
   {
       this.setState({sproductquantityerror:"Product quantity should not be empty"})
       document.getElementById('enterProductQuantity').style.border="2px solid red";
   }
   else if(this.state.sproductdescription==="")
   {
       this.setState({sproductdescriptionerror:"Product description should not be empty"})
       document.getElementById('enterProductDescription').style.border="2px solid red";
   }
   else{
     let product={
      description:this.state.sproductdescription,
      imageUrl:this.state.sproductimageurl,
      price:this.state.sproductprice,
     productName:this.state.sproductname,
      quantity:this.state.sproductquantity,

     }
      ProductService.updateProduct(product,this.state.id).then((res)=>{
        if(res.status===200)
        {
           this.setState({
             status:"Successfully added!"
           })
           
           
        }
        else{
          this.setState({
            status:"Error to added! Try again Later!"
          })
        }
      })
   }

  




  }
   
     restProduct=(e)=>{
      
      this.setState({sproductnameerror: ""})
   this.setState({sproductpriceerror: ""})
   this.setState({sproductimageurlerror: ""})
   this.setState({sproductquantityerror: "",
  sproductdescriptionerror:"",status:""})
        ProductService.getProductById(this.state.id).then((res)=>{
          let product=res.data;
           console.log(res.data)
           this.setState({
            sproductname :product.productName,
            sproductprice :product.price, 
            sproductdescription:product.description,
            sproductimageurl:product.imageUrl,
            sproductquantity:product.quantity,
           })
    
        })
      
      
        document.getElementById('enterProductName').style.border="";
        document.getElementById('enterProductPrice').style.border="";
        document.getElementById('enterProductImageUrl').style.border="";
        document.getElementById('enterProductQuantity').style.border="";
        document.getElementById('enterProductDescription').style.border="";
}
cancelProduct=(e)=>{
  this.props.history.push("/addProduct");
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
                      <h1 align ="center">Edit product Details</h1>
                  </div>
                  <div>
                    <Form >
                    <Form.Group className="mb-3" controlId="enterProductName" >
                    <Form.Label>Enter product name</Form.Label>
                    <Form.Control type="text" value={this.state.sproductname} onChange={this.sproductnamechange}   />
                    </Form.Group>
                    <p style={{color: "red"}}>{this.state.sproductnameerror}</p> 
                    <Form.Group className="mb-3" controlId="enterProductPrice"  >
                    <Form.Label>Enter price</Form.Label>
                    <Form.Control type="text" value={this.state.sproductprice} onChange={this.sproductpricechange} />
                    </Form.Group>
                    <p style={{color: "red"}}>{this.state.sproductpriceerror}</p> 
                    <Form.Group className="mb-3" controlId="enterProductImageUrl"  >
                    <Form.Label>Enter url of the image</Form.Label>
                    <Form.Control type="text"  value={this.state.sproductimageurl} onChange={this.sproductimageurlchange}  />
                    </Form.Group>
                    <p style={{color: "red"}}>{this.state.sproductimageurlerror}</p> 

                    <Form.Group className="mb-3" controlId="enterProductQuantity"  >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text"  value={this.state.sproductquantity} onChange={this.sproductquantitychange} />
                    </Form.Group>
                    <p style={{color: "red"}}>{this.state.sproductquantityerror}</p> 
                     
                    <Form.Group className="mb-3" controlId="enterProductDescription" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" rows={4} value={this.state.sproductdescription} onChange={this.sproductdescriptionchange} />
                    </Form.Group>
                    <p style={{color: "red"}}>{this.state.sproductdescriptionerror}</p> 
                    
                   </Form>    
                       
                  </div>
                  <div>
                  <Col>
                    <Button variant ="success" type="submit" onClick={this.svalidateform} style={{margin: "5px"}}> Save </Button>
                    <Button variant ="primary" type="reset" onClick={this.restProduct} style={{margin: "5px"}}> Reset </Button>
                    <Button variant ="danger" type="cancel" onClick={this.cancelProduct} style={{margin: "5px"}}> Back </Button>
                  </Col>
                  <p style={{color:'green'}}>{this.state.status}</p>
                  </div>
                  
                  </Col>   
                    
              </Row>
            

            </Container>
        )
    }
}
export default EditProduct;