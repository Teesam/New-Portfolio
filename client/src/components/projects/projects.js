import React from 'react';
import './projects.css';
import { Context } from '../../store';
import Nav from '../nav/nav';
import PopMenu from '../pop-menu/popMenu';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';


const Projects = () => {

    const { state }  = React.useContext(Context);

    return(
        <div className = 'Projects' >
            <Nav />

            { state.checked === true ? '' : <PopMenu id = 'pop' /> }

            <div className = 'Projects-keeper'>

                <div className = 'Project-holder'>
                    <Link to = '/' className = 'Project-list'>My Portfolio Site</Link>
                </div>

                <div className = 'Project-holder'>
                    <a href = 'http://elastic-leakey-7ef9d9.netlify.app' className = 'Project-list'>Sa Forum</a>
                </div>

            </div>

            <div className = 'Projects-keeper'>

                <div className = 'Project-holder'>
                    <Link to = '/' className = 'Project-list'>Live Chat App</Link>
                </div>

                <div className = 'Project-holder'>
                    <Link to = '/' className = 'Project-list'>Responsive Navbar Test</Link>
                </div>

            </div>

            <div className = 'Projects-keeper'>

                <div className = 'Project-holder'>
                    <Link to = '/' className = 'Project-list'>My Portfolio Site</Link>
                </div>

                <div className = 'Project-holder'>
                    <Link to = '/' className = 'Project-list'>Sa Forum</Link>
                </div>

            </div>

            <Footer />

            
         
            
        </div>
    )
}

export default Projects;