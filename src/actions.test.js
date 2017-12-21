import { RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from "./actions";

describe("restartGame", () => {
  it("Should return the action", () => {
    const action = restartGame();
    expect(action.type).toEqual(RESTART_GAME);
  });
});

describe("makeGuess", () => {
  it("Should return the action", () => {
    const guess = 50;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});