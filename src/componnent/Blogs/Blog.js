import { Component } from "react";
import { BrowserRouter, NavLink,useNavigate } from "react-router-dom";
function Blog() {
    const navigate = useNavigate();
        return <div >
                    <h1>Blogs</h1>
                    <NavLink exact to="/Display_Listes">
                        <button type="submit">List All Postes</button>
                    </NavLink>

                    <NavLink exact to="/Create_Post"> 
                        <button type="submit">Create Post</button> 
                    </NavLink><br></br>
                    <button type="submit" onClick={()=>navigate("/")}>home</button>
                </div>;
    
    }

export default Blog;
