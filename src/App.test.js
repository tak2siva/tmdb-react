import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Featured from './featured/Featured';
import Movies from './movies/Movies';
import TVShows from './tvshows/TVShows';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  it('Always renders Featured List', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Featured)).toHaveLength(1);
    // expect(wrapper.find(Movies)).toHaveLength(1);
    // expect(wrapper.find(TVShows)).toHaveLength(1);
  })
});