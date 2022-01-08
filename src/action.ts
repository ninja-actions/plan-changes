import {debug, setFailed} from '@actions/core';

try {
  debug('Planning changes');

} catch (err) {
  setFailed(`Action failed with error ${err}`);
}
