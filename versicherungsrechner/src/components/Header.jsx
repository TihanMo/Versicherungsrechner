import React from 'react';
import '../App.css';

export default function Header() {
  return (
    <div className='header'>
      <a href="#default" class="logo">Versicherungsrechner</a>
        <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    </div>
  )
}
