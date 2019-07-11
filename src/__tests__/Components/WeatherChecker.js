import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeatherChecker from '../../Components/WeatherChecker/';

describe('WeatherChecker Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherChecker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('address form', () => {
    it('renders address form', () => {
      expect(shallow(<WeatherChecker />).find('#addressForm').length).toEqual(1)
    })

    it('has empty state when mount', () => {
      const wrapper = shallow(<WeatherChecker />);
      expect(wrapper.state('formAddress')).toEqual('');
    })
  })

  describe('weather card', () => {
    it('renders weather', () => {
      expect(shallow(<WeatherChecker />).find('#weatherCard').length).toEqual(1)
    })
  })

})