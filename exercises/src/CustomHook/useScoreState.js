import { useState } from 'react';

export default function useScoreState(initialScore = 0) {
  const [score, setScore] = useState(initialScore);

  const increase = () => setScore((currentScore) => ++currentScore);
  const decrease = () => setScore((currentScore) => --currentScore);
  const reset = () => setScore(0);

  return [score, increase, decrease, reset];
}
