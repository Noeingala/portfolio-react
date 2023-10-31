import React from 'react';
import  {getImageUrl}  from '../../utils';
import style from '../Presentacion/Presentacion.module.css'

export default function Presentacion() {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>Hola, Soy Noe!</h1>
            <h6 className={style.subtitle}>Full Stack Developer | Diseñadora Gráfica</h6>
            <p className={style.description}>Gran capacidad de adaptación, compromiso, dedicación para el trabajo en equipo, 
                para así poder llevar a cabo proyectos web que sean escalables y moduralizables.
                Si queres saber mas de mi, contactame!
            </p>
            <a href="mailto:ingalanoelia@gmailcom" className={style.contactBtn}>Contactame</a>
        </div>
        <img src={getImageUrl('Presentacion/Noe.png')} alt="imagen" className={style.presentacionImg}/>
    </section>
  )
}
