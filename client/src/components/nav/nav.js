import React from 'react';
import './nav.css';
import { Context } from '../../store';
import Logo from '../../Teksam.jpg';

const Nav = () => {


    const { state, dispatch } = React.useContext(Context);

    return (
        <div className = 'Nav'>

            <div>
                <img id = 'logo' src = { Logo } alt = 'a logo' />
            </div>


            <div id = 'menu'
            onClick = { () => {
                dispatch({ type: 'SWITCH'})
            } }
            >
                <div id = 'menu-sub'>
                    
                    {
                        state.checked ? <div id = 'menu-1' 
                        style = {{ 
                            width: '2rem',
                            height: '.2rem',
                            backgroundColor: 'white',
                            borderRadius: '10px' 
                        }}></div> : <div id = 'menu-1' 
                        style = {{ 
                            width: '1rem',
                            height: '.2rem',
                            backgroundColor: 'white',
                            borderRadius: '10px' 
                        }}></div>
                    }
                    
                    {
                        state.checked ? <div id = 'menu-2'
                        style = {{ 
                        width: '1.5rem',
                        height: '.2rem',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        marginTop: '.3rem'
                    }}></div> : <div id = 'menu-2'
                    style = {{ 
                        width: '1.5rem',
                        height: '.2rem',
                        backgroundColor: '#cc28b0',
                        borderRadius: '10px',
                        marginTop: '.3rem'
                        }}></div>
                    }

{
                        state.checked ? <div id = 'menu-3'
                        style = {{ 
                            width: '1rem',
                            height: '.2rem',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            marginTop: '.3rem'
                        }}></div> : <div id = 'menu-3'
                        style = {{ 
                            width: '2rem',
                            height: '.2rem',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            marginTop: '.3rem'
                        }}></div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Nav;
