import React from "react";
import { render } from '@testing-library/react';
import axios from "axios";

class Register extends React.Component {
  state={
    username:'',
    password:"",
    email:'',
}


fcn=()=>{ 
  if(this.state.email !== '' && this.state.password !== '' && this.state.username !== ''){
    axios.post("http://localhost:4000/users",this.state)
    .then(alert("You account is ready now click in login"))
  }else{
    console.log('you have a problem');
  }
}


    render() {
      return(
      
        <header align="center" className="App-header" >
        <h1>Register </h1>
        
     <img src={'LOG.png'} className="image"></img>

    
        <form>
        
        <input type="text" placeholder="username"   onChange={(e)=>this.setState({username:e.target.value})} required /><br/>
        <input type="email"placeholder="email"  onChange={(e)=>this.setState({email:e.target.value})} required/><br/>
        <input type="password" placeholder="password"  onChange={(e)=>this.setState({password:e.target.value})} required/><br/>
        {/* <input type="password" placeholder="confirm password"  onChange={(e)=>this.setState({usepasswordrname:e.target.value})}required/><br/> */}
        <input type="submit"  value="REGISTER"  onClick={this.fcn} /><br/>
        </form>

       
        
        
      </header>


    );
}}
export default Register;