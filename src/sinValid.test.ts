import {validator} from './sinValid';
import "mocha";
import assert from "assert";


describe('testing sinValid file', () => {
  it('sin length too long', () => {
    const sinTestLong = [0,4,6,4,5,4,2,8,6,8];
    assert.equal(validator(sinTestLong),false);
  });
  it('sin length too short', () => {
    const sinTestShort = [0,4,6,4,5,4,2,8,6,8];
    assert.equal(validator(sinTestShort),false);
  });
  it('invalid sin numbers', () => {
    const sinTestWrong = [1,2,3,4,5,6,7,8,9];
    assert.equal(validator(sinTestWrong),false);
  });
  it('valid sin numbers', () => {
    assert.equal(validator([0,4,6,4,5,4,2,8,6]),true);
  });
});