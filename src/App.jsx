import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Contact, Github, Linkedin, Mail, Facebook } from 'lucide-react';

import './App.css';

const ContactHeader = ({ className, text }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Contact color="#E4ADC0" />
      <span>{text}</span>
    </div>
  );
};

function App() {
  return (
    <div className="container">

      {/* Column 1: About + Contact */}
      <div className="column about">
        {/* Card 1: About Me */}
        <div className="card">
          <div className="profile-header">
            <img src="/profile.jpg" alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <h3>Famira Mei Catalan</h3>
              <p>Software Developer</p>
            </div>
          </div>
          <p className="about-text">
            With a love for building functional and user-friendly software,
            I enjoy learning technologies and turning ideas into real-world applications.
          </p>
        </div>

        {/* Card 2: Contact Me */}
        <div className="card">
        {/*  <ContactHeader className = "icon" text = "Contact Me"/>  */ }
        <h3><b>Contact Me</b></h3>
          <ul className="contact-list">
            <li>Email: <a href="mailto:famira.catalan@gmail.com">famira.catalan@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/famira-mei-catalan-975a69271" target="_blank">Famira Mei Catalan</a></li>
            <li>GitHub: <a href="https://github.com/famiramei" target="_blank">github.com/famiramei</a></li>
            <li>Facebook: <a href="https://www.facebook.com/famira.mei.catalan/" target="_blank">Famira Mei Catalan</a></li>
          </ul>
        </div>

        {/* Certifications Card */}
        <div className="card">
          <h3><b>Certifications</b></h3>
          <div className="cert-grid">
            {[
              {
                title: 'IT Specialist – Java',
                image: '/certs/it-specialist-java.png',
                source: 'Certiport',
                date: 'December 2022',
                link: 'https://www.credly.com/badges/72d6e498-5595-43fa-b2ae-afe635524de3/public_url',
              },
              {
                title: 'Introduction to Cybersecurity',
                image: '/certs/cybersecurity.png',
                source: 'Cisco Networking Academy',
                date: 'August 2024',
                link: 'https://www.credly.com/badges/49bfb0da-1bdd-4120-8c88-70c3f1c8aa55/public_url',
              },
            ].map((cert) => (
              <div
                className="cert-card"
                key={cert.title}
                onClick={() => window.open(cert.link, '_blank')}
              >
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-details">
                  <h4>{cert.title}</h4>
                  <p>{cert.source}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column 2: Projects */}
      <div className="column projects">
        <div className="card">
          <h3><b>Projects</b></h3>
          <div className="project-grid">
            {[
              {
                title: 'Rent.S: Apartment Management',
                description: 'Manage tenants, rooms, and payments efficiently.',
                image: '/projects/rents.png',
                link: 'https://github.com/primcaballeda/Rent.S',
              },
              {
                title: 'FlavorPot: A Personal Cookbook App',
                description: 'Save, organize, and browse your recipes.',
                image: '/projects/flavorpot.png',
                link: 'https://github.com/famiramei/flavorpot',
              },
              {
                title: 'PetPals: Pet Management System',
                description: 'A comprehensive system ideal for pet stores or adoption centers.',
                image: '/projects/petpals.png',
                link: 'https://github.com/famiramei/PetPals',
              },
              {
                title: 'CineSys: Cinema Ticketing System',
                description: 'Facilitates movie schedule display, seat selection, and ticket purchasing.',
                image: '/projects/cinesys.png',
                link: 'https://github.com/laveniaketh/CineSys',
              },
              {
                title: 'Transpove: Ride-Sharing App',
                description: 'A campus-exclusive peer-to-peer ride-sharing platform.',
                image: '/projects/transpove.png',
                link: 'https://www.figma.com/design/rN04Gch9WyuFwcbT24ru2B/Transpove-Prototype?node-id=0-1&m=dev&t=BH9zVEmQHOJognS4-1',
              },
              {
                title: 'GuestBook: Hotel Booking System',
                description: 'Manage hotel reservations, guest records, and room availability.',
                image: '/projects/guestbook.png',
                link: 'https://github.com/famiramei/GuestBook',
              },
              // Add more projects here
            ].map((project) => (
              <div
                className="project-card"
                key={project.title}
                onClick={() => window.open(project.link, '_blank')}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-details">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column 3: Skills */}
      <div className="column skills">
        {/* Tech Stack Card */}
        <div className="card">
          <h3><b>Tech Stack</b></h3>

          <h4>Languages</h4>
          <div className="tech-grid">
            {[
              ['Java', 'java.png'],
              ['Python', 'python.png'],
              ['C++', 'cpp.png'],
              ['Dart', 'dart.png'],
              ['PHP', 'php.png'],
              ['JavaScript', 'js.png'],
              ['TypeScript', 'ts.png'],
            ].map(([name, icon]) => (
              <div className="tech-item" key={name}>
                <img src={`/icons/${icon}`} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <h4>Tools & Platforms</h4>
          <div className="tech-grid">
            {[
              ['Git', 'git.png'],
              ['Figma', 'figma.png'],
              ['Firebase', 'firebase.png'],
              ['Arduino', 'arduino.png'],
              ['MySQL', 'mysql.png'],
            ].map(([name, icon]) => (
              <div className="tech-item" key={name}>
                <img src={`/icons/${icon}`} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <h4>Frameworks & Libraries</h4>
          <div className="tech-grid">
            {[
              ['React', 'react.png'],
              ['Next.js', 'nextjs.png'],
              ['Node.js', 'nodejs.png'],
              ['Flutter', 'flutter.png'],
            ].map(([name, icon]) => (
              <div className="tech-item" key={name}>
                <img src={`/icons/${icon}`} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Card */}
        <div className="card">
          <h3><b>My Resume</b></h3>
          <p>View or download my resume below:</p>
          <a 
            href="/CatalanFM_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

