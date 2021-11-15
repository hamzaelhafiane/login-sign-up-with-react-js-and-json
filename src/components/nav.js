import React from "react";
import {NavLink} from "react-router-dom"
import "./nav.css"
 function Nav() {

     return(
                <ul>
                <li><NavLink to="/Login" >Login</NavLink></li>
                <li><NavLink to="/Register" >Register</NavLink></li>
                <li><NavLink to="/Dashboard" >Dashboard</NavLink></li>
                </ul>
            
        )
    }
 export default Nav;