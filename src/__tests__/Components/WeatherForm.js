import React from 'react';
import WeatherForm from '../../Components/WeatherForm/';
import ReactDOM from 'react-dom';

describe('WeatherFormApp Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})