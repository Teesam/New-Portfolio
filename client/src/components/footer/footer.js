import React from 'react';
import './footer.css';
import Twitter from '../../twitter.jpg';
import Facebook from '../../face.jpg';
import Instagram from '../../insta.jpg';
import Linkedn from '../../linked.jpg';
import Mail from '../../mailer.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                    <div id = 'p-holder'>
                        <p id = 'need'>
                            You need me to help out with a project?
                        </p>
                        <div id = 'hr'></div>
                        <p id = 'hit'>
                            Connect with me via
                        </p>
                    </div>

                    <div>
                        <a href = ''>
                            <img src = { Twitter } alt = 'Twitter Logo' />
                        </a>
                        <a href = ''>
                            <img src = { Instagram } alt = 'Instagram Logo' />
                        </a>
                        <a href = 'mail.yahoo.com'>
                            <img src = { Mail } alt = 'Mail Logo' />
                        </a>
                        <a href = ''>
                            <img src = { Facebook } alt = 'Facebook Logo' />
                        </a>
                        <a href = ''>
                            <img src = { Linkedn  } alt = 'Linkedn Logo' />
                        </a>
                        
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
