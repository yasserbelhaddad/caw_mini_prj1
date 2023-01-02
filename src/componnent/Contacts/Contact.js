import { Component } from "react";
import { BrowserRouter, NavLink,useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
        return <div className="pagewrap">
                    <h1>Contact</h1>
                    <NavLink exact to="/Display_Contacts">
                        <button type="submit">Display Contacts</button>
                    </NavLink>

                    <NavLink exact to="/Create_Contact"> 
                        <button type="submit">Create Contact</button> 
                    </NavLink><br></br>
                    <button type="submit" onClick={()=>navigate("/")}>home</button>
                </div>;
    
    }

export default Contact;