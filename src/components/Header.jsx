import React from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import avatar from "../images/avatar2.png"

function Header() {
  let projects = useRouteMatch("/projects")
  let contact = useRouteMatch("/contact")
  return (
    <header>
        <h1>alexandra radevich</h1>
        <div id="nav-wrapper">
        <nav>
        <div className="link-container">
        { projects ? 
            <Link className="link" to="/">Home</Link> : 
            <Link className="link" to="/projects">Projects</Link> 
        }
        </div>
        <div className="link-container">
          <img id="avatar" src={avatar}></img>
        </div>
        <div className="link-container">
        { contact ? 
            <Link className="link" to="/">Home</Link> : 
            <Link className="link" to="/contact">Contact</Link> 
        }
        </div>
        </nav>
        </div>
    </header>
  );
}

export default Header;