import React, { useState } from 'react'
import './Contact.css'

const CONTACT = {
  email: 'vermaawm1@gmail.com',
  phone: '+91 90453 58980',
  location: 'Bangalore, India',
  // TODO: replace with your real profile links
  githubUrl: '#',
  linkedinUrl: '#',
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.68 2.89a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.19-1.25a2 2 0 0 1 2.11-.45c.93.32 1.9.55 2.89.68A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: This form is front-end only. To actually receive messages,
    // connect it to a service like Formspree, EmailJS, or your own API,
    // then replace this handler with a real submission call.
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact">
      <div className="container contact">
        <div className="contact__intro">
          <p className="eyebrow">§09 — Get in Touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to full stack and backend developer roles — feel free to reach out.
          </p>

          <ul className="contact__details">
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <MailIcon /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>
                <PhoneIcon /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <span>
                <PinIcon /> {CONTACT.location}
              </span>
            </li>
          </ul>

          <div className="contact__socials">
            <a href={CONTACT.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <GithubIcon />
            </a>
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="contact__input"
            placeholder="Your name"
          />

          <label className="contact__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="contact__input"
            placeholder="you@example.com"
          />

          <label className="contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="contact__input"
            placeholder="What would you like to talk about?"
          />

          <button type="submit" className="btn btn-primary contact__submit">
            Send Message
          </button>

          {status === 'sent' && (
            <p className="contact__success" role="status">
              Thanks for reaching out! This form isn't yet connected to an email service —
              for now, please also email directly at {CONTACT.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
