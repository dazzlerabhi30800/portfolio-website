import React from 'react';
import Logo from './Logo';

function Footer() {
    return(
        <footer id="contact">
            <div className="logo--wrapper">
                <Logo />
            </div>
            <div className="social--wrapper">
                <a href="https://github.com/dazzlerabhi30800" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/abhishek_singh_30800/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/abhishek-choudhary-00679621b/" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="footer__link--wrapper">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Project</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="copyright">
                &#169; Copyright Abhishek Choudhary
            </div>
        </footer>
    )
}

export default Footer;