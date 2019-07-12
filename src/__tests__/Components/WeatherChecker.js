import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeatherChecker from '../../Components/WeatherChecker/';

const error = {
  "message": "Error fetching GoogleMaps geocode, try again later"
}

describe('WeatherChecker', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherChecker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})

describe('address form', () => {

  it('renders address form', () => {
    expect(shallow(<WeatherChecker />).find('#addressForm').length).toEqual(1)
  })

  it('has empty state when mount', () => {
    const wrapper = shallow(<WeatherChecker />);
    expect(wrapper.state('formAddress')).toEqual('');
    expect(wrapper.state('weather')).toEqual(null);
    expect(wrapper.state('searchHistory')).toEqual([]);
    expect(wrapper.state('showHistory')).toEqual(false);
    expect(wrapper.state('isLoading')).toEqual(false);
    expect(wrapper.state('error')).toEqual(null);
  })

})

describe('weather card', () => {
  it('renders weather', () => {
    expect(shallow(<WeatherChecker />).find('#weatherCard').length).toEqual(1)
  })
})