import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function CvOverlay() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const backRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const app = document.getElementById('__next')
    const prevOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    app?.setAttribute('inert', '')
    backRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      app?.removeAttribute('inert')
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        className="CV-button"
        onClick={() => setOpen(true)}
      >
        CV
      </button>
      {open &&
        createPortal(
          <div
            className="cv-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-title"
          >
            <article
              className="nx-container nx-prose max-md:nx-prose-sm dark:nx-prose-dark"
              dir="ltr"
            >
              <h1 id="cv-title">CV</h1>
              <div className="nx-mb-8 nx-flex nx-items-center nx-gap-3">
                <div className="nx-flex nx-grow nx-flex-wrap nx-items-center nx-justify-end nx-gap-3">
                  <button
                    type="button"
                    ref={backRef}
                    onClick={() => setOpen(false)}
                  >
                    ← Back
                  </button>
                </div>
              </div>
              <div className="cv-choices">
                <a
                  className="CV-button"
                  href="/cv/Philip-Meisner-Zwisler-CV-da.pdf"
                  download="Philip-Meisner-Zwisler-CV-da.pdf"
                >
                  Dansk
                </a>
                <a
                  className="CV-button"
                  href="/cv/Philip-Meisner-Zwisler-CV-en.pdf"
                  download="Philip-Meisner-Zwisler-CV-en.pdf"
                >
                  English
                </a>
              </div>
            </article>
          </div>,
          document.body
        )}
    </>
  )
}
