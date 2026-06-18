import React from 'react'
import './Hero.css'

const PROFILE = {
  name: 'Abhishek Kumar Verma',
  role: 'Java Backend Developer',
  subRole: 'Full Stack Developer',
  intro:
    "I build reliable, production-ready backend systems with Java, Spring Boot, and MySQL — designing secure REST APIs, clean layered architecture, and data models that hold up under real-world use. I bring that same precision to the front end, building responsive, intuitive interfaces with React that make backend logic genuinely usable. I move fluidly across the full stack, turning ideas into complete, working products rather than isolated pieces — and I build every layer to be maintained, not just shipped.",
  // TODO: replace with your real profile links
  githubUrl: '#',
  linkedinUrl: '#',
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.93 3.2 9.11 7.64 10.59.56.1.76-.24.76-.54 0-.27-.01-1.17-.02-2.13-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.71.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.09 1.14.9-.25 1.85-.37 2.81-.37.95 0 1.91.13 2.81.37 2.14-1.44 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.76.54 4.43-1.49 7.63-5.66 7.63-10.59C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  )
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">§01 — Portfolio</p>
        <h1 className="hero__name">{PROFILE.name}</h1>
        <p className="hero__role">
          {PROFILE.role} <span className="hero__role-divider">/</span> {PROFILE.subRole}
        </p>
        <p className="hero__intro">{PROFILE.intro}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
            View Projects <ArrowIcon />
          </a>
          <a
            href="/resume/Abhishek_Kumar_Verma_Resume_FSE.pdf"
            download
            className="btn btn-outline"
          >
            Download Resume
          </a>
        </div>

        <div className="hero__socials">
          <a href={PROFILE.githubUrl} aria-label="GitHub profile" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href={PROFILE.linkedinUrl} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
