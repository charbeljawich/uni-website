import React from 'react'
import './About.css'

import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Our university is committed to providing a world-class education that inspires innovation and critical thinking.</p>
        <p>With a diverse community of students and faculty, we foster collaboration and creativity in every field of study.</p>
        <p>We equip our students with the skills, knowledge, and experiences needed to become leaders in a rapidly changing world.</p>

      </div>
    </div>
  )
}

export default About