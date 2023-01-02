import { Component ,useState} from "react";
import { BrowserRouter, NavLink,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';



function MyPosts() {
    const navigate = useNavigate();
    const count = useSelector(state => state.blogs);
    const [newarray, setnewarray] = useState(count);
    const [numlikes, setnumlikes] = useState(1);
    const [date, setName] = useState("");
    

    const DoLike=(e)=>{
        if (count[e.target.value].clicked === false) {
            setnumlikes(numlikes+1)
            count[e.target.value].IfLike = "Deslike";
            count[e.target.value].likes = count[e.target.value].likes + 1;
            count[e.target.value].clicked = true
        }else {
            setnumlikes(numlikes+1)
            count[e.target.value].IfLike = "like";
            count[e.target.value].likes = count[e.target.value].likes - 1;
            count[e.target.value].clicked = false
        }
        
    };

    const handleChange = (e) =>{
            setName(e.target.value);
            console.log(date)
    }

    const ArrayFiltredByName = () =>{
        if (date == "") {
            setnewarray(count)
        } else {
            setnewarray(count.filter(element => element.date == date))
        return (newarray)
        }
    }
        return  <div >
                    <h1>Blogs</h1>
                    <NavLink exact to="/Display_Listes">
                        <button type="submit">List All Postes</button>
                    </NavLink>

                    <NavLink exact to="/Create_Post"> 
                        <button type="submit">Create Post</button> 
                    </NavLink>
                    



                    <div>

                        <div>

                        <h1>search by :</h1>

                        </div>



                        <div className="input_container">

                        <div className="input_holder">

                            <label>Date:</label>

                            <input name="Name" type="date" className="input" value={date} onChange={handleChange}/>

                            <button type="submit" onClick={ArrayFiltredByName}>search by date</button>

                        </div>
                        </div>
                    </div>







                    
                    <h1>This Is All The Postes</h1>

                    <table className="styled-table">
                    <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Likes</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {newarray.map(function(obj,e)
                    {
                        return (
                            <tr key={e} className="active-row">
                                <td>{obj.Subject}</td>
                                <td>{obj.Description}</td>
                                <td>{obj.Date}</td>
                                <td>{obj.likes}</td>
                                <div><button type="submit" name={numlikes} value={e} onClick={DoLike}>{obj.IfLike}</button></div>
                            </tr>
                    )})}
                    </tbody>
                    </table>
                    <button type="submit" onClick={()=>navigate("/")}>home</button>
                </div>
                ;
    
    }

export default MyPosts;