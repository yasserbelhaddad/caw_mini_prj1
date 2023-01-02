import { Component, useState } from "react";
import { BrowserRouter, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './MyContacts.css';


function MyContacts() {
    

    const [Name, setName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Email, setEmail] = useState("");
    const navigate = useNavigate();
    const count = useSelector(state => state.items);
    const [newarray, setnewarray] = useState(count);


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

    const ArrayFiltredByPhoneNumber = () =>{
        if (PhoneNumber == "") {
            setnewarray(count)
        } else {
            setnewarray(count.filter(element => element.PhoneNumber == PhoneNumber))
        return (newarray)
        }
    }

    const ArrayFiltredByName = () =>{
        if (Name == "") {
            setnewarray(count)
        } else {
            setnewarray(count.filter(element => element.Name == Name))
        return (newarray)
        }
    }

    const ArrayFiltredByEmail = () =>{
        if (Email == "") {
            setnewarray(count)
        } else {
            setnewarray(count.filter(element => element.Email == Email))
        return (newarray)
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

                    <div className="container">

                        <div>

                        <h1>search by :</h1>

                        </div>



                        <div className="input_container">

                        <div className="input_holder">

                            <label>Name:</label>

                            <input name="Name" type="text" className="input" value={Name} onChange={handleChange}/>

                            <button type="submit" onClick={ArrayFiltredByName}>search by name</button>

                        </div>



                        <div className="input_holder">

                            <label>Phon Number:</label>

                            <input name="PhoneNumber" type="number" className="input" value={PhoneNumber} onChange={handleChange}/>
                            <button type="submit" onClick={ArrayFiltredByPhoneNumber}>search by PhoneNumber</button>

                        </div>



                        <div className="input_holder">

                            <label>Email:</label>

                            <input name="Email" type="text" className="input" value={Email} onChange={handleChange}/>
                            <button type="submit" onClick={ArrayFiltredByEmail}>search by Email</button>

                        </div>

                        </div>

                        </div>

                        

                    <h1>This Is All The Contacts</h1>

                    <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newarray.map(function(obj,e)
                        {
                            return (
                                <tr key={e}  className="active-row">
                                    <td>{obj.Name}</td>
                                    <td>{obj.PhoneNumber}</td>
                                    <td>{obj.Email}</td>
                                </tr>
                        )})}
                    </tbody>
                    </table>
                    <button type="submit" onClick={()=>navigate("/")}>home</button>
                </div>
                ;
    
    }

export default MyContacts;