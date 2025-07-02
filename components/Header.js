import React from 'react' ;
import './Header.css';

function Header() {
    return (
    <header className="header">
        <h1>Hello, I am Ecem</h1>
        <p>FullStack Developer</p>
        <nav>
          <a href= "#about">About Me</a>
          <a href="#projects">Projects</a>  
          <a href= "#contact">Contact Me</a>
        </nav>
    </header>
    );
}

export default Header;