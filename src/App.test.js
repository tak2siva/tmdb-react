import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Featured from './Featured';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('Always renders Featured List', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(<Featured/>)).to.have.lengthOf(1);
  })
});