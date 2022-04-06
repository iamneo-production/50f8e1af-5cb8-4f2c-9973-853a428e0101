import {Component} from 'react';
import ViewcartService from '../Services/Cart/ViewcartService';
class IncDec extends Component{
    constructor(props) {
        super(props);
        this.state = {
          quantity:this.props.data.quantity ,
          show: true,
          max: 10,
          min: 1,
          
          id:this.props.data.cartItemID,
         
        };
        console.log(this.state.id)
       this.IncrementItem=this.IncrementItem.bind(this);
       this.DecreaseItem=this.DecreaseItem.bind(this);
       this.ToggleClick=this.ToggleClick.bind(this);
       this.handleChange=this.handleChange.bind(this);
      }

    
      IncrementItem = () =>{

     this.setState(prevState => {
          if(prevState.quantity <9) {
            return {
              quantity: prevState.quantity +1,
             
            }
          } else {
            return null;
          }
        });
        
        let cart={
          quantity:this.state.quantity+1
        }
        ViewcartService.increamentQuant(this.state.id,cart).then((res)=>{
          console.log(cart)
          console.log(res.data)
        })
             
        
      }
      DecreaseItem = () => {
        this.setState(prevState => {
          if(prevState.quantity> 1) {
            return {
              quantity: prevState.quantity - 1
              
            }
           
          } else {
            return null;
          }
        });
        let cart={
          quantity:this.state.quantity-1
        }
        ViewcartService.increamentQuant(this.state.id,cart).then((res)=>{
          console.log(cart)
          console.log(res.data)
        })
      
      }
      ToggleClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
      handleChange = (event) => {
        this.setState({
          
          quantity: event.target.value,
          
           
          
         
      });
      
     
       
      }
    
      render() {
    
        return ( <div>
          <button  className="border" onClick={this.IncrementItem}>+</button>
          <input size={1} className="border" value={this.state.quantity}  onChange={this.handleChange}/>
          <button  className="border" onClick = {this.DecreaseItem}>-</button>
          </div>
        );
      }
}
export default IncDec;