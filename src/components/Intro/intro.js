import React from 'react'
import './intro.css'
import bg from '../../assets/image1.jpg'
import hireMe from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText">I'm <span className="introName">Apoorva</span></span>
            <p className="introPara">I'm a skilled and passionate full stack software developer. </p>
            <Link><button className="btn"><img src={hireMe} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>


  )
}

export default Intro;