import React from 'react'
import './About.css'

const SUMMARY =
  'I am a Full Stack Developer who works comfortably across the entire stack — from designing secure, well-structured Spring Boot APIs to building the React interfaces that sit on top of them. I care about getting both halves right: backend systems with clean architecture, proper authentication, and sensible data models, and front ends that are responsive, accessible, and easy to use. Java, Spring Boot, MySQL, and React are my core toolkit, grounded in solid OOP and data structures fundamentals.'

const OBJECTIVE =
  'To grow as a backend-focused full stack engineer who builds scalable, well-tested systems — and to keep deepening my knowledge of system design, cloud deployment, and clean software architecture along the way.'

const FOCUS = [
  'Completed the PG-DAC program at CDAC, Bangalore (Aug 2025 – Feb 2026)',
  'Strengthening Java, Spring Boot, and REST API design through real projects',
  'Building front-end fluency with React and Tailwind CSS',
  'Exploring AWS fundamentals, CI/CD, and cloud deployment basics',
]

export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="about__intro">
          <p className="eyebrow">§02 — Profile</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about__grid">
          <div className="about__card">
            <h3 className="about__card-title">Professional Summary</h3>
            <p className="about__text">{SUMMARY}</p>
          </div>

          <div className="about__card">
            <h3 className="about__card-title">Career Objective</h3>
            <p className="about__text">{OBJECTIVE}</p>
          </div>

          <div className="about__card about__card--wide">
            <h3 className="about__card-title">Current Focus</h3>
            <ul className="about__list">
              {FOCUS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
