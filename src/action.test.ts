import {beforeAll, describe, expect, jest, test} from '@jest/globals';
import {debug, getMultilineInput, setFailed} from '@actions/core';

jest.mock('@actions/core');

(getMultilineInput as jest.Mock)
  .mockReturnValueOnce(['./test/fixtures/apps/*']);

describe('running the action', () => {
  beforeAll(() => require('./action'));

  test('runs without error', () => {
    expect(setFailed).not.toHaveBeenCalled();
  });

  test('debug logs action inputs', () => {
    expect(debug).toHaveBeenCalledWith(JSON.stringify({
      inputs: {codebasePaths: ['./test/fixtures/apps/*']}
    }));
  });
});
