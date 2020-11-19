import React from 'react';
import './popMenu.css';
import { Link } from 'react-router-dom';
import { Context } from '../../store';

const PopMenu = () => {

    const { dispatch } = React.useContext(Context);

    return (
        <div className = 'Pop-menu'>

            <div id = 'menu-div'>
                <Link to = '/' className = 'Menu-list'
            onClick = { () => {
                dispatch({ type: 'SWITCH'})
            } }>Home</Link>
                <Link to = '/projects' className = 'Menu-list'
            onClick = { () => {
                dispatch({ type: 'SWITCH'})
            } }>Projects</Link>
                <Link to = '/contact' className = 'Menu-list'
            onClick = { () => {
                dispatch({ type: 'SWITCH'})
            } }>Contact</Link>
            </div>

        </div>
    )
}

export default PopMenu;
