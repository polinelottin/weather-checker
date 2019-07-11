import React from 'react';
import App from '../App.js';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

describe('App Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render container', () => {
    const div = document.createElement('div');
    expect(shallow(<App />).find('div').exists()).toBe(true)
  });
})