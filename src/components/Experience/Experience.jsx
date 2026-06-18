import React from 'react'
import './Experience.css'

const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'CETPA Infotech Pvt. Ltd.',
    period: 'Jul 2023 – Aug 2023',
    points: [
      'Developed responsive web applications and CRUD-based modules using HTML, CSS, JavaScript, and database integration.',
      'Applied debugging, problem-solving, and clean coding practices throughout development and testing phases.',
      'Used Git for version control and gained hands-on exposure to SDLC workflows and collaborative development practices.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="eyebrow">§05 — Engagement History</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="experience__list">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="experience__item">
              <div className="experience__header">
                <div>
                  <h3 className="experience__role">{job.role}</h3>
                  <p className="experience__company">{job.company}</p>
                </div>
                <p className="experience__period">{job.period}</p>
              </div>
              <ul className="experience__points">
                {job.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
