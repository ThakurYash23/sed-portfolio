import React from 'react'
import './Home.css';
import cloud from '../../Images/cloud.png';
import mountain from '../../Images/mountain.png';
import profile from '../../Images/yash.jpeg';
import skill1 from '../../Images/skill1.jpg';
import skill2 from '../../Images/skill2.jpg';

function Home() {
  return (
    <>
      <div class="top-container">
        <img class="top-cloud" src={cloud} alt="cloud-img"/>
        <h1>I'm Yash.</h1>
        <h2>A <span class="Tech">Tech</span>nologist.</h2>
        <img class="bottom-cloud" src={cloud} alt="cloud-img"/>
        <img class="mountain" src={mountain} alt="mountain-img"/>
      </div>
      <div class="middle-container">
          <div class="profile">
            <img class="circular" src={profile} alt="yash-profile"/>
            <h2>Hello</h2>
            <p class="intro">I am Yash, a programmer and technologist. I am currently pursuing my Bachelor of Technology in 'Information Technology'. I also write blogs 'Caring For Environment'.</p>
          </div>
          <hr></hr>
          <div class="skills">
            <h2>My Skills</h2>
            <div class="skill-row">
              <img class="circular skill1" src={skill1} alt="skill-img"/>
              <h3>Full Stack Development</h3>
              <p class="skill1-paragraph">I have a lots of interest in coding. I have learnt 'Full Stack Development' from multiple palteforms like 'Udemy' and 'W3School'.</p>
            </div>
            <div class="skill-row">
              <img class="circular skill2" src={skill2} alt="skill-img"/>
              <h3>Data Science</h3>
              <p class="skill2-paragraph">From the starting of my journey in the of technology, I have lot of interest in automation. So I decided to learn 'Artifial Intelligence'. In this process, I have completed my training on 'Python with Machine Learning' from 'SoftPro Lucknow'.</p>
            </div>
          </div>
          <hr></hr>
          <div class="contact-me">
            <h2>Get In Touch</h2>
            <h3>If you love Designing as much as I do.</h3>
            <p class="contact-message">Love designing as much as I do? Let's talk about how awesome we can!! We can code for advanced problem!</p>
            <a class="btn" href="mailto:yashkumar18072001@gmail.com">CONTACT ME</a>
          </div>
      </div>
      <div class="bottom-container">
          <a class="footer-link" href="https://www.linkedin.com/in/thakuryash23/">LinkedIn</a>
          <a class="footer-link" href="https://twitter.com/ThakurYash23">Twitter</a>
          <a class="footer-link" href="https://nonayash.blogspot.com/">Blog</a>
          <p class="copyright">© 2023 Yash Kumar@SED Group</p>
      </div>
    </>      
  )
}

export default Home
