import { findMinDifference } from "../app/02-minimum-time-difference";

describe("findMinDifference", () => {
  it('should find the minimum difference between ["23:59","00:00"] to be 1', () => {
    expect(findMinDifference(["23:59", "00:00"])).toBe(1);
  });

  it('should find the minimum difference between ["00:00","23:59","00:00"] to be 0', () => {
    expect(findMinDifference(["00:00", "23:59", "00:00"])).toBe(0);
  });

  it('should find the minimum difference between ["00:00","23:59"] to be 1', () => {
    expect(findMinDifference(["00:00", "23:59"])).toBe(1);
  });

  it('should find the minimum difference between multiple close times ["01:00","02:00","01:30"] to be 30', () => {
    expect(findMinDifference(["01:00", "02:00", "01:30"])).toBe(30);
  });

  it('should find the minimum difference between ["05:31","22:08","00:35"] to be 147', () => {
    expect(findMinDifference(["05:31", "22:08", "00:35"])).toBe(147);
  });

  it('should handle when all times are the same ["00:00","00:00","00:00"]', () => {
    expect(findMinDifference(["00:00", "00:00", "00:00"])).toBe(0);
  });

  it('should find the minimum difference for random times ["10:00","22:00","06:00","23:59","00:01"] to be 2', () => {
    expect(
      findMinDifference(["10:00", "22:00", "06:00", "23:59", "00:01"])
    ).toBe(2);
  });
});
