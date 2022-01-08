import {beforeAll, describe, expect, jest, test} from '@jest/globals';
import {debug, setFailed} from '@actions/core';

jest.mock('@actions/core');

describe('running the action', () => {
  beforeAll(() => require('./action'));

  test('runs without error', () => {
    expect(setFailed).not.toHaveBeenCalled();
  });
  test('debug log \'Planning changes\'', () => {
    expect(debug).toHaveBeenCalledWith('Planning changes');
  });
});
