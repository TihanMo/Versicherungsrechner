import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <Link to="/" className="logo">Versicherungsrechner</Link>
        <div className="header-right">
            <Link to="home">Home</Link>
            <Link to="about_us">Über uns</Link>
            <Link to="contact">Kontakt</Link>
        </div>
    </div>
  )
}
