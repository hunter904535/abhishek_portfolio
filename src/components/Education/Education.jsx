import React from 'react'
import './Education.css'

const EDUCATION = [
  {
    degree: 'PG-DAC (Post Graduate Diploma in Advanced Computing)',
    institution: 'Centre for Development of Advanced Computing (CDAC), Bangalore',
    period: 'Aug 2025 – Feb 2026',
    score: 'Score: 68%',
  },
  {
    degree: 'B.Tech, Computer Science and Engineering',
    institution: 'SRMS College of Engineering and Technology, Bareilly (AKTU, Lucknow)',
    period: '2024',
    score: 'Score: 62.4%',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="eyebrow">§04 — Record</p>
        <h2 className="section-title">Education</h2>

        <div className="education__list">
          {EDUCATION.map((item, i) => (
            <div key={i} className="education__item">
              <p className="education__period">{item.period}</p>
              <div className="education__details">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
                <p className="education__score">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
