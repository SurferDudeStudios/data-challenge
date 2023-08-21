import React,{useState,useEffect} from 'react';

const Footer = () => {
  const footerDate = new Date().getFullYear();
    return (
      <footer className='p-4'>
        <div className='container'>
        <hr />
        <p>Surfer Dude Studios &copy;{footerDate}</p>
        </div>
      </footer>
    )
};

export default Footer;