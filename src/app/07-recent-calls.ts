/**
 * Class to count the number of recent requests within a certain time frame.
 */
export class RecentCounter {
  private queue: number[];

  /**
   * Initializes the counter with zero recent requests.
   */
  constructor() {
    this.queue = [];
  }

  /**
   * Adds a new request at time t and returns the number of requests that have happened
   * in the past 3000 milliseconds (including the new request).
   *
   * @param {number} t - The time of the new request in milliseconds.
   * @returns {number} - The number of requests that have happened in the past 3000 milliseconds.
   */
  ping(t: number): number {
    // Remove requests that are older than 3000 milliseconds
    while (this.queue.length && t - this.queue[0] > 3000) {
      this.queue.shift();
    }
    // Add the new request time to the queue
    this.queue.push(t);
    // Return the number of requests in the queue
    return this.queue.length;
  }
}
