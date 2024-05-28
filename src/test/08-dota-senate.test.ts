import { predictPartyVictory } from "../app/08-dota2-senate";

describe("predictPartyVictory", () => {
  it('should predict "Radiant" as the winner when senate consists of one Radiant senator', () => {
    const senate = "R";
    expect(predictPartyVictory(senate)).toBe("Radiant");
  });

  it('should predict "Dire" as the winner when senate consists of one Dire senator', () => {
    const senate = "D";
    expect(predictPartyVictory(senate)).toBe("Dire");
  });

  it('should predict "Radiant" as the winner when senate consists of only Radiant senators', () => {
    const senate = "RRRR";
    expect(predictPartyVictory(senate)).toBe("Radiant");
  });

  it('should predict "Dire" as the winner when senate consists of only Dire senators', () => {
    const senate = "DDDD";
    expect(predictPartyVictory(senate)).toBe("Dire");
  });

  it('should predict "Radiant" as the winner when the first senator is Radiant and the second senator is Dire', () => {
    const senate = "RD";
    expect(predictPartyVictory(senate)).toBe("Radiant");
  });

  it('should predict "Dire" as the winner when the first senator is Dire and the second senator is Radiant', () => {
    const senate = "DR";
    expect(predictPartyVictory(senate)).toBe("Dire");
  });

  it('should predict "Radiant" as the winner for complex scenario', () => {
    const senate = "RD";
    expect(predictPartyVictory(senate)).toBe("Radiant");
  });

  it('should predict "Dire" as the winner for complex scenario', () => {
    const senate = "RDD";
    expect(predictPartyVictory(senate)).toBe("Dire");
  });
});
