import { RecentCounter } from "../app/07-recent-calls";

describe("RecentCounter", () => {
  let counter: RecentCounter;

  beforeEach(() => {
    counter = new RecentCounter();
  });

  it("should return 1 when only one request is within the last 3000 milliseconds", () => {
    expect(counter.ping(1)).toBe(1);
  });

  it("should return 2 when two requests are within the last 3000 milliseconds", () => {
    counter.ping(1);
    expect(counter.ping(100)).toBe(2);
  });

  it("should return 2 when a new request is made 3001 milliseconds after the first request", () => {
    counter.ping(1);
    expect(counter.ping(3001)).toBe(2);
  });

  it("should return 2 when a new request is made 3002 milliseconds after the second request", () => {
    counter.ping(1);
    counter.ping(100);
    expect(counter.ping(3002)).toBe(2);
  });

  it("should return 1 when the first request is made at 3000 milliseconds and 2 when the second request is made at 6000 milliseconds", () => {
    expect(counter.ping(3000)).toBe(1);
    expect(counter.ping(6000)).toBe(2);
  });
});
