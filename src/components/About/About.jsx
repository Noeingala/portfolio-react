import React from 'react';
import style from '../About/About.module.css';


export default function About() {
  return (

    <section className={style.container}>
        <h2 className={style.section}>About</h2>
        <div>
            <ul>
                <li>
                    <div>
                        <p>Soy una apasionada diseñadora gráfica y desarrolladora web. Con más de 10 años de 
                        experiencia en la industria del diseño, he tenido el privilegio de trabajar en una variedad de 
                        proyectos emocionantes que combinan mi amor por el diseño y la tecnología.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Mi enfoque es fusionar la creatividad del diseño gráfico con la funcionalidad del 
                        desarrollo web para crear experiencias digitales impactantes. Creo firmemente que 
                        un diseño excepcional no solo debe ser visualmente atractivo, sino también 
                        intuitivo y efectivo.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Mi filosofía de diseño se basa en la simplicidad y la elegancia. Me esfuerzo por entender 
                        las necesidades de mis clientes y traducirlas en soluciones creativas que 
                        superen sus expectativas.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Estoy emocionada por la oportunidad de trabajar en proyectos desafiantes y 
                        emocionantes. Si tienes alguna pregunta o te gustaría discutir una colaboración, 
                        ¡No dudes en ponerte en contacto conmigo! Estoy aquí para ayudarte a hacer realidad 
                        tus ideas digitales.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
