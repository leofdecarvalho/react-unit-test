import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducers', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);

  });

  it('handles action o type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: 'new Comment'};
    expect(commentReducer([], action)).to.eql(['new Comment']);
  });
});
