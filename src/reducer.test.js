import { reducer } from "./reducer";
import { restartGame, makeGuess } from "./actions";

describe("reducer", () => {
  const guesses = [1, 56, 99];
  const feedback = "Make your guess!";
  const correctAnswer = 50;
  const auralStatus = "";

  it("Should return the current state on an unknown action", () => {
   let currentState = {};
   const state = reducer(currentState, {type: "__UNKNOWN"});
   expect(state).toBe(currentState);
  });

  describe("restartGame", () => {
    it("Should restart the game", () => {
      let state;
      state = reducer(state, restartGame());
      expect(state).toEqual({
        auralStatus,
        correctAnswer: undefined,
        feedback,
        guesses: []
      });
    });
  });

  describe("makeGuess", () => {
    it("Should make a new guess", () => {
      let state;
      let guess = 42;
      state = reducer(state, makeGuess(guess));
      const { guesses } = reducer(state, makeGuess(guess));
      expect ({ guesses }).toMatchSnapshot();
    });
  });
});