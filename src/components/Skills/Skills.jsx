import React from 'react'
import './Skills.css'

const SKILL_GROUPS = [
  {
    label: 'Programming Languages',
    items: ['Java', 'JavaScript ', 'SQL'],
  },
  {
    label: 'Backend Technologies',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'Spring Data JPA',
      'RESTful APIs',
      'JSON',
      'Spring Security (JWT)',
    ],
  },
  {
    label: 'Frontend Technologies',
    items: ['React ', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB (Basic)'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'Maven', 'VS Code', 'Eclipse'],
  },
  {
    label: 'Core Concepts',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'Design Patterns',
      'SDLC',
      'Problem Solving',
      'Debugging',
      'Exception Handling',
      'Agile / Scrum',
      'Microservices (Basic)',
      'Unit Testing',
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (Basic)', 'CI/CD Concepts', 'Cloud Deployment', 'DevOps Practices'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="eyebrow">§03 — Practice Areas</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          The languages, frameworks, and tools I use to design, build, and ship software.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className="skills__card">
              <h3 className="skills__card-title">{group.label}</h3>
              <div className="skills__tags">
                {group.items.map((item, j) => (
                  <span key={j} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
