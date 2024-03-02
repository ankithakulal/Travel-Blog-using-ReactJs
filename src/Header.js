// Header.js
import React from 'react';


const Header = () => {
  return (
    <header>
      <h1>Travel Blog</h1>
      <img src="https://www.primarktravelhouse.com/blog/blog-files/image/europe-big.png" alt="Logo of Your Travel Blog" width={"400"} height={200}></img>
      <nav>
        <a href="/">Home |</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
