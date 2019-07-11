import React from 'react';
import Header from '../../../Components/Layouts/Header.js';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

describe('Header Layout', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders title', () => {
    expect(shallow(<Header />).find('#title').length).toEqual(1)
  })

  it('renders title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#title').text()).toEqual('Is it cold there?');
  })
})