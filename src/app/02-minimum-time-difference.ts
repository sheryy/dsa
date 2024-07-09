/**
 * Finds the minimum minutes difference between any two time-points in a list of 24-hour clock time points.
 *
 * @param {string[]} timePoints - A list of time points in "HH:MM" format.
 * @returns {number} - The minimum minutes difference between any two time-points.
 */
export function findMinDifference(timePoints: string[]): number {
  // Convert each time point to the total minutes from "00:00"
  const timeInMinutes = timePoints.map((time) => {
    const [hours, minutes] = time.split(":");
    return Number(hours) * 60 + Number(minutes);
  });

  // Sort the array of minutes to facilitate finding the minimum difference
  timeInMinutes.sort((a, b) => a - b);

  // Initialize the minimum difference to be the circular difference between the first and last time points
  // considering the 24-hour cycle (1440 minutes in a day)
  let minDifference =
    1440 + timeInMinutes[0] - timeInMinutes[timeInMinutes.length - 1];

  // Iterate through the sorted minutes array to find the minimum difference between consecutive time points
  for (let i = 1; i < timeInMinutes.length; i++) {
    const difference = timeInMinutes[i] - timeInMinutes[i - 1];
    minDifference = Math.min(minDifference, difference);
  }

  // Return the minimum difference found
  return minDifference;
}
