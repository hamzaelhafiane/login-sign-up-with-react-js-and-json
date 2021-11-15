import React,{ Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { SetStateAction } from 'react';



class Login extends React.Component {
    state={username : "", password:""};
    
    fcn=(e)=>{
        
        e.preventDefault();
        axios.get("http://localhost:4000/users")
        .then(user=>{
                user.data.map(us=>{
                    if(us.username===this.state.username && us.password===this.state.password){
                        
                        localStorage.setItem("email",us.email);
                        window.location.reload();
                                        } 
                });
            }

        );
        console.log(this.state.username,this.state.password)       
   }
     
    render(){
        return(
<div align="center">
    <h1>Login </h1>
      <div className="image" >
     <img src={'LOG.png'} className="image"></img>

    </div>
    <form onSubmit={this.fcn} className="form">
    <input type="text" placeholder="username" required onChange={(e)=>this.setState({username:e.target.value})}/><br/>
    <input type="password" placeholder="password" required onChange={(e)=>this.setState({password:e.target.value})}/><br/>   
    <input type="submit"  value="LOGIN"/><br/>
    </form>
</div>



    );
}
}
export default Login;