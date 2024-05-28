/**
 * Predicts the party that will announce victory in the Dota2 senate voting process.
 *
 * @param {string} senate - The string representing each senator's party belonging ('R' for Radiant, 'D' for Dire).
 * @returns {string} - The party that will announce victory ("Radiant" or "Dire").
 */
export function predictPartyVictory(senate: string): string {
  const radiantQueue: number[] = [];
  const direQueue: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    senate[i] === "R" ? radiantQueue.push(i) : direQueue.push(i);
  }

  while (radiantQueue.length > 0 && direQueue.length > 0) {
    const radiantIndex = radiantQueue.shift()!;
    const direIndex = direQueue.shift()!;

    radiantIndex < direIndex
      ? radiantQueue.push(radiantIndex + senate.length)
      : direQueue.push(direIndex + senate.length);
  }

  return radiantQueue.length > 0 ? "Radiant" : "Dire";
}
