import React, { Component } from 'react';
import ListUserService from '../Services/Admin/ListuserService';

class ListUser extends Component {
    constructor(props)
    {
         super(props)
         this.state={
              users:[]
         }
    }
    componentDidMount(){
        ListUserService.getUsers().then((res)=>{
           this.setState({
               users:res.data
           });
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>List of users</h2>
                <div className="row">
                    <table className="table table-striped table-bordered"> 
                     <thead>
                       <th>UserName</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Active</th>
                       <th>Role</th>
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
                                 </tr>
                             )
                         }
                     </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListUser;