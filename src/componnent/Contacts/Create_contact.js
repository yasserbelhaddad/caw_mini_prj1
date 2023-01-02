import { Component, useState } from "react";
import { BrowserRouter, NavLink,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Create_contact() {

    const count = useSelector(state => state.items);
    const navigate = useNavigate();
    
    const [Name, setName] = useState("");
    const [erreurName, seterreurName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [erreurPhoneNumber, seterreurPhoneNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [erreurEmail, seterreurEmail] = useState("");
    const handleChange = (e) =>{
        if (e.target.name == "Name") {
            setName(e.target.value);
        }
        if (e.target.name == "PhoneNumber") {
            setPhoneNumber(e.target.value);
        }
        if (e.target.name == "Email") {
            setEmail(e.target.value);
        }
        
    }

    const save = () =>{
        if (Name == "") {
            seterreurName("please write the name ");
            seterreurEmail("");
            seterreurPhoneNumber("");
        }else if (PhoneNumber == "") {
            seterreurPhoneNumber("please write the PhoneNumber ");
            seterreurEmail("");
            seterreurName("");
        }else if (Email == "") {
            seterreurEmail("please write the Email ");
            seterreurPhoneNumber("");
            seterreurName("");
        }else{
            seterreurEmail("");
            seterreurPhoneNumber("");
            seterreurName("");
            count.push(
                {
                    Name: Name,
                    PhoneNumber: PhoneNumber,
                    Email: Email
                }
            )
            setName("");
            setPhoneNumber("");
            setEmail("");
            window.alert("added succes");
        }
        
    }
        return  <div>
                    <h1>Contact</h1>
                    <NavLink exact to="/Display_Contacts">
                        <button type="submit">Display Contacts</button>
                    </NavLink>
                    <NavLink exact to="/Create_Contact"> 
                        <button type="submit">Create Contact</button> 
                    </NavLink>
                    <h1>
                        hello from create contacte
                    </h1>
                    
                        <label>Name:</label>
                        <input type="text" value={Name} onChange={handleChange} name="Name" /><p className="erreur">{erreurName} </p><br/>
                        <label>Phon Number:</label>
                        <input type="number" value={PhoneNumber} onChange={handleChange} name="PhoneNumber" /><p className="erreur">{erreurPhoneNumber} </p><br/>
                        <label>Email:</label>
                        <input type="text" value={Email} onChange={handleChange} name="Email" /><p className="erreur">{erreurEmail} </p><br/>
                        
                        <button type="submit" onClick={save}>save</button><br/>
                        <button type="submit" onClick={()=>navigate("/")}>home</button>
                    
                </div>
                
                ;
    }

export default Create_contact;