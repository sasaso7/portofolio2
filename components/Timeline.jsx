import { useState } from 'react'

const jobs = [
  {
    role: 'Senior DevOps Engineer',
    org: 'Twoday',
    period: 'May 2026 – Present',
    summary: 'Senior DevOps role.'
  },
  {
    role: 'Senior Software Developer',
    org: 'IT Minds · DSS (Herlev Kommune)',
    period: 'Feb 2026 – May 2026',
    summary: 'Modernised an outdated Umbraco setup.',
    points: [
      'Contributed to the Umbraco 8 → 20 migration',
      'Repaired Azure DevOps deployment pipelines and a broken deployment slot',
      'Documented the previously undocumented project and prioritised the work'
    ]
  },
  {
    role: 'Senior Software Developer',
    org: 'IT Minds · Arbejdstilsynet',
    period: 'Apr 2025 – Jan 2026',
    summary: 'Drove infrastructure quality and technical improvements.',
    points: [
      'Infrastructure as Code to automate manual workflows',
      'Rebuilt telemetry with Jaeger, Grafana, Prometheus and OpenSearch',
      'Dev/test/prod environment parity',
      'Introduced Azure App Config'
    ]
  },
  {
    role: 'Software Developer',
    org: 'IT Minds · Arbejdstilsynet',
    period: 'Mar 2024 – Apr 2025',
    summary: 'Team P.I.P.E.L.I.N.E.S.: cleaned up technical debt.',
    points: [
      'Built the self-configuring "setup" solution that enabled the Jenkins exit',
      'Removed redundant code and decommissioned outdated servers',
      'Aligned environments'
    ]
  },
  {
    role: 'Software Developer',
    org: 'IT Minds · Wisdome',
    period: 'Feb 2024 – Jul 2024',
    summary: 'Transformed a social media platform to a modern architecture.',
    points: [
      'MVC → pure .NET API',
      'Designed and implemented JWT authentication',
      'Folkemødet integrations: clubs and API endpoints'
    ]
  },
  {
    role: 'CTO',
    org: 'Teoriundervisning.dk',
    period: 'Feb 2022 – Aug 2023',
    summary: 'Full technical responsibility; developer, PO and ops in one.',
    points: [
      'Azure DevOps release setup with deployment slots for zero downtime',
      'ReactTS frontend, GraphQL on top of .NET APIs',
      'Owned the backlog and direction of the dev team'
    ]
  },
  {
    role: 'Junior Software Developer',
    org: 'Københavns Kommune',
    period: 'Nov 2020 – Feb 2022',
    summary: 'Agile team, front-end development.',
    points: ['React and TypeScript']
  },
  {
    role: 'Datamatiker (AP Degree)',
    org: 'KEA',
    period: 'Sep 2019 – Jan 2022',
    summary: 'Computer Science education.'
  }
]

export default function Timeline() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen((o) => (o === i ? null : i))
  return (
    <ol className="timeline">
      {jobs.map((j, i) => {
        const isOpen = open === i
        return (
          <li key={i} className="timeline-item">
            <div className={`timeline-node${isOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                className="timeline-toggle"
                aria-expanded={isOpen}
                aria-controls={`timeline-card-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <span className="timeline-label">
                  <strong>{j.role}</strong>
                  <span>{j.org}</span>
                  <small>{j.period}</small>
                </span>
              </button>
              <div id={`timeline-card-${i}`} className="timeline-card">
                <p>{j.summary}</p>
                {j.points && (
                  <ul>
                    {j.points.map((p, k) => (
                      <li key={k}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
