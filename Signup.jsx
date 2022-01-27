import {React,Component} from 'react';
import {Link} from 'react-router-dom';
class Signup extends Component{
   
    render(){
        return(
        
         <div class="container">
            <div class="row">
			  <div class="col-md-5 mx-auto">
			    <div id="first">
				    <div class="myform form ">
					   <div class="logo mb-3">
						     <div class="col-md-12 text-center">
							 <h1>Signup</h1>
						  </div>
					</div>
                   <form action="{()=>(){this.validateform()}}" method="post" name="login">
                           <div class="form-group">
                            <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                           </div>
                           <div class="form-group">
                            <input type="text" name="username"  class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter useranme"/>
                           </div>
                           <div class="form-group">
                            <input type="text" name="mobileNumber"  class="form-control" id="mobileNumber" aria-describedby="emailHelp" placeholder="Enter mobile number"/>
                           </div>
                           <div class="form-group">
                            <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                           </div>
                           <div class="form-group">
                            <input type="password" name="confirmPassword"  class="form-control" id="confirmPassword" aria-describedby="emailHelp" placeholder="Confirm Password"/>
                           </div>
                           <div class="form-group">
                              <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" id ="submitButton" class=" btn btn-block mybtn btn-primary tx-tfm">Submit</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or"/>
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           <div class="col-md-12 mb-3">
                              <p class="text-center">
                                 <a href="javascript:void();" class="google btn mybtn"><i class="fa fa-google-plus">
                                 </i> Signup using Google
                                 </a>
                              </p>
                           </div>
                           <div class="form-group">
                              <p class="text-center">Already a user? <Link to='/'> Login here</Link></p>
                           </div>
                        </form>     
				</div>
			</div>
            </div>
            </div>
            </div>
              
        )
    }
}
export default Signup;