import './Home.css';

import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom'

function Home () {

    

        return (
            <div className="home">
                <h1>I am Abdelhakim Belhaddad,
                    Welcome to my Homepage
                You can brouwse my page with the 
            
            <NavLink className="span" exact to="/Contact"> Contacts </NavLink>
            OR<NavLink className="span"  exact to="/Blog"> Blogs </NavLink></h1>
            
                
            </div>
                )
    
    }

export default Home;