import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I have great technical expertise in writing and maintaining large code repositories. My diverse background has also given me incredible communication and collaboration skills. I’ve built a reputation of being the most reliable developer who would go above and beyond for work commitments. I’m proactive and meet aggressive deadlines without compromising the quality of work. I thoroughly enjoy problem-solving, and I am eager to bring my passion for software development and my proactive approach to your company.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design </h2>
                    <p>Demo text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Demo Text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills