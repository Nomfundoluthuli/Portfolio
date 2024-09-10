import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <Header />
      <Summary />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

const Header: React.FC = () => (
  <header className="resume-header text-center">
    <h1>Nomfund Luthuli</h1>
    <p>Email: nomfundoluthuli790@example.com | Phone: +27 812700078 | Location: New York, USA</p>
  </header>
);

const Summary: React.FC = () => (
  <section className="resume-section summary">
    <h2>Summary</h2>
    <p>
      I am a hard worker and always looking for something new to grow my skills.
      I work well with people and learn fast.
      I welcome new opportunity and take it as a new way to grow my skills.
      I am vey open minded as you as yiu can see from my about me .
      I am a young person looking for work to better my life and my career experience.
    </p>
  </section>
);

const Education: React.FC = () => (
  <section className="resume-section education">
    <h2>Education</h2>
    <div>
      <h3>Marketing Practice</h3>
      <p>Boston College  | 2020-2022  </p>
    </div>
  </section>
);

const Experience: React.FC = () => (
  <section className="resume-section experience">
    <h2>Work Experience</h2>
    <div>
      <h3>Event by Lethy</h3>
      <p>Event planner assistant, KwaZuluNatal, Durban | 2022 - 6 Months</p>
      <ul>
        <li>Developed and maintained web applications using React, Node.js, and PostgreSQL.</li>
        <li>Collaborated with designers and product managers to deliver user-friendly experiences.</li>
        <li>Improved application performance and scalability, resulting in a 20% increase in user engagement.</li>
      </ul>
    </div>
    <div>
      <h3>Alston Primary School</h3>
      <p>Teacher's Assistant, johannesburg, londlean | 2023 - 2024</p>
      <ul>
        <li>Assisted in the development of client websites using HTML, CSS, and JavaScript.</li>
        <li>Implemented responsive designs to enhance mobile user experience.</li>
        <li>Participated in code reviews and team meetings to continuously improve project quality.</li>
      </ul>
    </div>
    <div>
      <h3>CMH Toyota</h3>
      <p>Courtesy caller and Receptionist, johannesburg, Alberton | 2023 - 2024 2 Months</p>
      <ul>
        <li>Assisted in the development of client websites using HTML, CSS, and JavaScript.</li>
        <li>Implemented responsive designs to enhance mobile user experience.</li>
        <li>Participated in code reviews and team meetings to continuously improve project quality.</li>
      </ul>
    </div>
  </section>
);

const Skills: React.FC = () => (
  <section className="resume-section skills">
    <h2>Skills</h2>
    <ul>
      <li>Fast leaner</li>
      <li>Frameworks: React, Agular</li>
      <li>Databases: PostgreSQL, MySQL</li>
      <li>Tools: Git, Githud, </li>
      <li>Soft Skills: Communication, Teamwork, Problem-Solving</li>
    </ul>
  </section>
);

const Footer: React.FC = () => (
  <footer className="resume-footer text-center">
    <p>LinkedIn: linkedin.com/in/Nomfundo | GitHub: github.com/Nomfundo.luthuli</p>
  </footer>
);

export default Resume;
