import React from 'react';
import  {getImageUrl}  from '../../utils';

export default function Presentacion() {
  return (
    <section>
        <div>
            <h1>Hola! Soy Noe!</h1>
            <h6>Full Stack Developer | Diseñadora Gráfica</h6>
            <p>Gran capacidad de adaptación, compromiso, dedicación para el trabajo en equipo, 
                para así poder llevar a cabo proyectos web que sean escalables y moduralizables.
                Si queres saber mas de mi, contactame!
            </p>
            <a href="mailto:ingalanoelia@gmailcom">Contactame</a>
        </div>
        <img src={getImageUrl('Presentacion/Noe.png')} alt="imagen" />
    </section>
  )
}
