import React from 'react';
import './contact.css';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import PopMenu from '../pop-menu/popMenu';
import { Context } from '../../store';

const Contact = () => {

    const { state } = React.useContext(Context);

    return (
        <div className = 'Contact'>
            <Nav />

            { state.checked === true ? '' : <PopMenu id = 'pop' /> }

            <div id = 'converse'>
                <h2 id = 'touch'>
                    Get in touch with me.
                </h2>

                <p id = 'contact-talk'>
                    Do you need me to check up a project with you, 
                    have a chat about the tech world or just someone to 
                    chill with?
                </p>

                <div id = 'mail-holder'>
                    <p id = 'check'> 
                        Check out the links down below or just send a mail
                        <strong id = 'mail-address'>tolayiwola19@yahoo.com</strong>
                    </p>
                </div>

                

                <p id = 'there'>I'll be there.</p>
            </div>

            <Footer />
        </div>
    )
}

export default Contact;
