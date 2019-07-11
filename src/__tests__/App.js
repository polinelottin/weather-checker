import React from 'react';
import App from '../App.js';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders header', () => {
    expect(shallow(<App />).find('#header').length).toEqual(1)
  })

  it('renders from', () => {
    expect(shallow(<App />).find('#form').length).toEqual(1)
  })
})