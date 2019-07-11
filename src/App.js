import React, {Fragment} from 'react';

import WeatherForm from './Components/WeatherForm/';  
import Header from './Components/Layouts/Header.js'

function App() {
  return (
    <Fragment>
      <Header id='header'/>
      <WeatherForm id='form'/>
    </Fragment>
  );
}

export default App
