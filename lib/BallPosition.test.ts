import { framesPerSeconds } from "./BallPosition";

describe("framesPerSeconds", () => {
  test("output should be correct", () => {
    expect(framesPerSeconds(1)).toBe(1000);
    expect(framesPerSeconds(2)).toBe(500);
    expect(framesPerSeconds(0.5)).toBe(2000);
  });
});
