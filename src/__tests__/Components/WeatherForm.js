import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeatherForm from '../../Components/WeatherForm/';

describe('WeatherFormApp Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('address form', () => {
    it('renders address form', () => {
      expect(shallow(<WeatherForm />).find('#addressForm').length).toEqual(1)
    })

    it('has empty state when mount', () => {
      const wrapper = shallow(<WeatherForm />);
      expect(wrapper.state('formAddress')).toEqual('');
    })
  })

  describe('weather card', () => {
    it('renders weather', () => {
      expect(shallow(<WeatherForm />).find('#weatherCard').length).toEqual(1)
    })
  })

})