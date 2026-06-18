import React from 'react'
import './Certifications.css'

// Add your certifications here, e.g.:
// { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2026', url: '#' }
const CERTIFICATIONS = []

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="eyebrow">§07 — Credentials</p>
        <h2 className="section-title">Certifications</h2>

        {CERTIFICATIONS.length === 0 ? (
          <div className="certifications__empty">
            <p>Certifications will be added here as they're completed.</p>
          </div>
        ) : (
          <div className="certifications__grid">
            {CERTIFICATIONS.map((cert, i) => (
              <a
                key={i}
                href={cert.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="certification-card"
              >
                <h3 className="certification-card__name">{cert.name}</h3>
                <p className="certification-card__issuer">{cert.issuer}</p>
                <p className="certification-card__date">{cert.date}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
