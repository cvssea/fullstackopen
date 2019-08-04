import { reducer, initialState } from './';
import deepFreeze from 'deep-freeze';

describe('unicafe reducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
    deepFreeze(state);
  });

  test('returns initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING',
    };

    const newState = reducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = {
      type: 'GOOD',
    };

    const newState = reducer(state, action);
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    });
  });
  test('ok is incremented', () => {
    const action = {
      type: 'OK',
    };

    const newState = reducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    });
  });

  test('bad is incremented', () => {
    const action = {
      type: 'BAD',
    };

    const newState = reducer(state, action);
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    });
  });
});
