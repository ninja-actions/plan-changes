import {debug, getMultilineInput, setFailed} from '@actions/core';

try {
  const codebasePaths = getMultilineInput('codebase_paths', {required: true});
  debug(JSON.stringify({inputs: {codebasePaths}}));
} catch (err) {
  setFailed(`Action failed with error ${err}`);
}
