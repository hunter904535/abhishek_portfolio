import React from 'react'
import './Projects.css'

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.93 3.2 9.11 7.64 10.59.56.1.76-.24.76-.54 0-.27-.01-1.17-.02-2.13-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.71.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.09 1.14.9-.25 1.85-.37 2.81-.37.95 0 1.91.13 2.81.37 2.14-1.44 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.76.54 4.43-1.49 7.63-5.66 7.63-10.59C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const PROJECTS = [
  {
    exhibit: 'Exhibit A',
    title: 'Loan Management System',
    description:
      'A backend-driven application for processing loans and managing customer accounts, with secure, role-based access for different user types.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Spring Security', 'REST APIs'],
    features: [
      'RESTful APIs for repayment tracking and account management',
      'JWT-based authentication with role-based authorization',
      'Layered architecture with validation and centralized exception handling',
      'API tested with Postman; source managed with Git and GitHub',
    ],
    // TODO: replace with your real links
    githubUrl: '#',
    liveUrl: null,
  },
  {
    exhibit: 'Exhibit B',
    title: 'Personal Portfolio Website',
    description:
      'A responsive frontend application built to showcase projects, technical skills, and professional experience.',
    tech: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    features: [
      'Reusable, modular React components for maintainability and scale',
      'Fully responsive design ensuring cross-device compatibility',
      'Optimized navigation and layout for usability and accessibility',
    ],
    // TODO: replace with your real links
    githubUrl: '#',
    liveUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="eyebrow">§06 — Matters</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects spanning backend services and frontend interfaces.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((proj, i) => (
            <article key={i} className="project-card">
              <div className="project-card__image">
                <span className="project-card__exhibit">{proj.exhibit}</span>
                <span className="project-card__initial">{proj.title.charAt(0)}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{proj.title}</h3>
                <p className="project-card__description">{proj.description}</p>

                <ul className="project-card__features">
                  {proj.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>

                <div className="project-card__tags">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <GithubIcon /> Code
                  </a>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
