import React from 'react';
 
function Dashboard(props) {

    const logout=()=>{
      localStorage.removeItem("email");
      localStorage.clear();
  }
 
  return (
    <div align="center">
    <h1>Welcome User! </h1><br /><br />
    <span>{localStorage.getItem("email")}</span><br /><br />
    <div className="image" >
     <img src={'LOG.png'} className="image"></img>

    </div>
    <a href="http://localhost:3000/Login"> <a onClick={logout} href="/">Logout</a> <br/> <img src='b.png' className="mg2" width="100px"></img> </a> 
    </div>
    
  );
}

 
export default Dashboard;