import React from 'react';
import './landing.css';
import Nav from '.././nav/nav';
import PopMenu from '../pop-menu/popMenu';
import { Context } from '../../store';
import Profile from '../../profile.jpg';
import Footer from '../footer/footer';



const Landing = () => {

    const { state }  = React.useContext(Context);

    
    return (
        <div className = 'Landing'>
            <Nav />

            

            { state.checked === true ? '' : <PopMenu id = 'pop' /> }

            

            <div id = 'house'>
                <div id = 'house-div'>

                    <img id = 'profile' src = { Profile } alt = 'My Profile' />

                    <div>
                        <h2>hello!</h2>
                        <p id = 'write-up'>My name is <strong>Olayiwola Samuel Tunde</strong>. I am a Software engineer who specializes in
                            working on the look and feel of a software or application ( <strong>Frontend Development</strong>).
                        </p>
                    </div>

                </div>

            </div>

            <Footer />
    
        </div>
    )
}

export default Landing;
