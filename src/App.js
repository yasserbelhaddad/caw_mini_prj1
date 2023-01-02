import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom'
import Blog from "./componnent/Blogs/Blog";
import Contact from "./componnent/Contacts/Contact";
import MyContacts from "./componnent/Contacts/MyContacts";
import Create_contact from "./componnent/Contacts/Create_contact";
import Home from './componnent/Home/Home';
import './App.css';
import Create_Post from './componnent/Blogs/Create_Post';
import MyPosts from './componnent/Blogs/MyPosts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Display_Contacts" element={<MyContacts />} />
            <Route exact path="/Create_Contact" element={<Create_contact />} />
            <Route exact path="/Display_Listes" element={<MyPosts /> } />
            <Route exact path="/Create_Post" element={<Create_Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
