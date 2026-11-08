import type { ScoreProps } from '../../types'

// Score sur 10 COMME INCI
function niveau(score: number) {
  if (score >= 7) return 'bon'
  if (score >= 4) return 'moyen'
  return 'mauvais'
}

function Score({ score }: ScoreProps) {
  return (
    <span className={`score ${niveau(score)}`} title={`Score : ${score} sur 10`}>
      {score}/10
    </span>
  )
}

export default Score
