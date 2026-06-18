import React from 'react'
import './Footer.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const goTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">Abhishek Kumar Verma</p>

        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => goTo(e, item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {new Date().getFullYear()} Abhishek Kumar Verma. Built with React + Vite.
        </p>
      </div>
    </footer>
  )
}
