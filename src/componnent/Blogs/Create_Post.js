import { Component, useState } from "react";
import { BrowserRouter, NavLink,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Create_Poste.css';

function Create_Post() {
    const navigate = useNavigate();
    const count = useSelector(state => state.blogs);
    
    const [Subject, setSubject] = useState("");
    const [erreurSubject, seterreurSubject] = useState("");
    const [Description, setDescription] = useState("");
    const [erreurDescription, seterreurDescription] = useState("");
    const [Date, setDate] = useState("");
    const [erreurDate, seterreurDate] = useState("");
    const handleChange = (e) =>{
        if (e.target.name == "Subject") {
            setSubject(e.target.value);
        }
        if (e.target.name == "Description") {
            setDescription(e.target.value);
        }
        if (e.target.name == "Date") {
            setDate(e.target.value);
        }
        
    }

    const save = () =>{
        if (Subject == "") {
            seterreurSubject("please write the Subject ");
            seterreurDescription("")
            seterreurDate("")
        }else if (Description == "") {
            seterreurSubject("")
            seterreurDescription("please write the Description ");
            seterreurDate("")
        }else if (Date == "") {
            seterreurSubject("")
            seterreurDescription("")
            seterreurDate("please write the Date ");
        }else{
            seterreurSubject("")
            seterreurDescription("")
            seterreurDate("")
            count.push(
                {
                    Subject: Subject,
                    Description: Description,
                    Date: Date.toString(),
                    likes: 0,
                    clicked: false,
                    IfLike: "like"
                }
            )
            setSubject("");
            setDescription("");
            setDate("");
            window.alert("added succes");
        }
        
    }
        return  <div>
                    <h1>Blogs</h1>
                    <NavLink exact to="/Display_Listes">
                        <button type="submit">List All Postes</button>
                    </NavLink>

                    <NavLink exact to="/Create_Post"> 
                        <button type="submit">Create Post</button> 
                    </NavLink>
                    <h1>
                        hello from create Postes
                    </h1>
                    
                        <p>
                            <label>Subject:</label>
                            <input type="text" value={Subject} onChange={handleChange} name="Subject" /><p className="erreur">{erreurSubject} </p><br/>
                        </p>
                        <label>Description:</label>
                        <input type="text" value={Description} onChange={handleChange} name="Description" /><p className="erreur">{erreurDescription} </p><br/>
                        <label>Date:</label>
                        <input type="date" value={Date} onChange={handleChange} name="Date" /><p className="erreur">{erreurDate} </p><br/>
                        
                        <button type="submit" onClick={save}>save</button><br></br>
                        <button type="submit" onClick={()=>navigate("/")}>home</button>
                </div>
                ;
    }

export default Create_Post;