import { ScorecardHole } from '@/types/hole'
import React from 'react'
import styles from './scorecard.module.css'

type ScorecardProps = {
  holes: ScorecardHole[]
  onClickHole: (hole: ScorecardHole) => void
}

export default function Scorecard({ holes, onClickHole }: ScorecardProps) {
  const totalPar = holes.reduce((sum, h) => sum + (h.par ?? 0), 0)
  const midIndex = Math.floor(holes.length / 2)

  return (
    <section className="mx-auto max-w-8xl px-4 md:px-6">
      <div className={`${styles.card} ${styles.paperTexture}`}>
        {/* center fold */}
        <div className={styles.fold} />

        {/* header */}
        <div className={styles.header}>
          <div>
            <div className={styles.courseName}>PORTFOLIO COUNTRY CLUB</div>
            <div className={styles.courseDetails}>
              Par 72 • 18 Projects • Championship Course
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className={styles.playerName}>COLIN GORSKI</div>
            <div className={styles.playerTitle}>Software Engineer</div>
          </div>
        </div>

        {/* body */}
        <div className="px-5 pb-6">
          <h3 className={`${styles.heading} text-center mb-5 text-[18px]`}>
            Scorecard
          </h3>

          <div className="overflow-x-hidden">
            <table className={`${styles.printTable} min-w-[880px]`}>
              <thead>
                <tr>
                  <th className="w-12 text-center">Hole</th>
                  <th className="w-10 text-center">Par</th>
                  <th className="w-56 text-left">Project Name</th>
                  <th className="w-72 text-left">Description</th>
                  <th className="w-56 text-left">Tech Stack</th>
                  <th className="w-20 text-center">Score</th>
                  <th className="w-16 text-center">View</th>
                </tr>
              </thead>

              <tbody>
                {holes.map((hole, i) => (
                  <tr
                    key={`${hole.id}-${i}`}
                    className={`${styles.row} cursor-pointer transition-colors`}
                    onClick={() => onClickHole(hole)}
                  >
                    <td className={styles.holeCell}>
                      {String(hole.id).padStart(2, '0')}
                    </td>
                    <td className={styles.parCell}>{hole.par}</td>

                    <td className={styles.projectCell}>
                      <div className="font-semibold">{hole.name}</div>
                      {hole.subtitle ? (
                        <div className="subtitle">{hole.subtitle}</div>
                      ) : null}
                    </td>

                    <td className="text-sm leading-relaxed">
                      {hole.description}
                    </td>

                    <td className={styles.techCell}>
                      {hole.tech.slice(0, 2).join(', ')}
                      {hole.tech.length > 2 ? ` +${hole.tech.length - 2}` : ''}
                    </td>

                    <td className={styles.scoreCell}>
                      <span className={styles.scoreBadge}>
                        {hole.difficulty === 'Expert' ||
                          hole.difficulty === 'Championship'
                          ? 'E'
                          : hole.difficulty === 'Professional'
                            ? 'P'
                            : hole.difficulty === 'Advanced'
                              ? 'A'
                              : 'B'}
                      </span>
                    </td>

                    <td className="text-center">
                      <button
                        className={styles.viewBtn}
                        aria-label={`View ${hole.name}`}
                      >
                        →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* footer */}
          <div className={styles.footer}>
            <div className={styles.totals}>
              <span>Total: {totalPar}</span>
              <span className="ml-6">Projects: {holes.length}</span>
            </div>
            <div className={styles.signature}>
              Player Signature: _____________________
            </div>
            <div className={styles.signature}>
              Attest: _____________________
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
