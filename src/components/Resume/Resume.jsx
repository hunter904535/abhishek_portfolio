import React from 'react'
import './Resume.css'

const RESUME_PATH = '/resume/Abhishek_Kumar_Verma_Resume_FSE.pdf'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function Resume() {
  return (
    <section id="resume">
      <div className="container resume">
        <div className="resume__intro">
          <p className="eyebrow">§08 — Full Record</p>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            A complete summary of my experience, education, and skills — preview it below or
            download a copy.
          </p>
          <a href={RESUME_PATH} download className="btn btn-primary">
            <DownloadIcon /> Download Resume
          </a>
        </div>

        <div className="resume__preview">
          <iframe
            src={RESUME_PATH}
            title="Abhishek Kumar Verma — Resume preview"
            className="resume__frame"
          />
          <p className="resume__fallback">
            Preview not loading? <a href={RESUME_PATH} target="_blank" rel="noreferrer">Open the resume in a new tab</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
