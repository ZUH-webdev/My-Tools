import React from "react";
import styles from "./About.module.css";

import fatihtelis from "../../assets/fatihtelis.jpg";
import { useDispatch } from "react-redux";
 import { openMail,updateMailContent } from "../../redux/slices/contactSlice"
import {  FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiLink, FiMail } from "react-icons/fi";
import SupportSection from "../../components/SupportSection";

function About() {
const dispatch=useDispatch();
const handleContactClick = () => {
  dispatch(updateMailContent({
    subject: "Support Request",
    body: "Hello, I need help with your project!",
  }));

  dispatch(openMail());
};



  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pheading}>About Project</h1>
      <div className={styles.section}>
        <h3 className={styles.heading}>What?</h3>
        <p className={styles.text}>
          10015.io is an online tool factory where you can get all tools you
          needed in one place. While serving different type of tools in
          different categories, it aims to perform this with a clean and
          beautiful user interface. Every tool is designed to solve a problem
          with minimum number of steps to save time of the users and decrease
          the complexity of the operation. 10015.io has started to operate in
          2020 and it will continue to grow with time by adding new tools each
          day.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Why?</h3>
        <p className={styles.text}>
          Why? There are lots of sites on web which offers you online tools.
          Most of them focus on specific topics and they mostly have outdated
          designs which makes you think "Am I in 90's?". When you start to
          bookmark the tools you needed, the list becomes larger and larger in
          some point. 10015 Tools solves all these problems. So, bookmark it and
          forget about all other tool sites.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.heading}>Who?</h3>
        <div className={styles.profile}>
          <div>
            <img
              src={fatihtelis}
              alt="Fatih Telis"
              className={styles.profileImage}
            />
            <div className={styles.socialIcons}>
              <a rel="stylesheet" href="https://x.com/fatihtelis" ><FiLink />
</a>
              <a rel="stylesheet" href="https://x.com/fatihtelis" > <FaTwitter  /></a>
              <a rel="stylesheet" href="https://x.com/fatihtelis" ><FaGithub />
</a>
              <a rel="stylesheet" href="https://x.com/fatihtelis" ><FaLinkedin /></a>
             
            </div>
          </div>
          <p className={styles.text}>
            10015.io is designed and coded by Fatih Telis (me) as a side
            project. I am a frontend developer based in Istanbul, Turkey. I
            started this project to build a platform which will work as an
            all-in-one toolbox while I'm challenging myself to create tools
            which does many different things. Even though I'm not a professional
            designer, I'm doing my best to construct a simple, aesthetic and
            easy-to-use UI system. You can contact me via email or Twitter about
            anything.
          </p>
        </div>
      </div>

      <div className=" `${styles.section}`">
        <button className= {styles.button} onClick={handleContactClick}>
          <FiMail />
          Contact Me
        </button>

     <SupportSection/>

      </div>
    </div>
  );
}

export default About;


