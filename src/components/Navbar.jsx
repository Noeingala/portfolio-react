import React, {useState} from 'react';
import style from './Navbar.module.css';
import {getImageUrl} from '../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={style.navbar}>
        <a className={style.title} href="/">Portfolio</a>
        <div className={style.menu}>
          <img className={style.menuBtn} 
                src={menuOpen ? getImageUrl('Nav/icons8-menú-50.png') : getImageUrl('Nav/icons8-x-48.png')}  
                alt='menu-button' 
                onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`${style.menuItems} ${menuOpen && style.menuOpen}`}>
                <li><a href='#about'>About</a></li>
                <li><a href='#habilidades'>Habilidades</a></li>
                <li><a href='#proyectos'>Proyectos</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
        </div>
    </nav>
  );
};