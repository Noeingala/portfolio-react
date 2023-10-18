import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <a className={style.title} href="/">Portfolio</a>
        <div className={style.menu}>
            <ul className={style.menuItems}>
                <li><a href='#about'>About</a></li>
                <li><a href='#habilidades'>Habilidades</a></li>
                <li><a href='#proyectos'>Proyectos</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
        </div>
    </nav>
  );
};