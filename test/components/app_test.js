import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//Use describe to group together similar tests
describe('App' , () => {
  let component;

  //Create a instance of App
  beforeEach(() => {
    component = renderComponent(App);
  });

  //Use 'it' to test a single attribute of a target
  it('shows the comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows the comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
