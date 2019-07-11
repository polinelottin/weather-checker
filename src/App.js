import React, {Fragment} from 'react';

import WeatherChecker from './Components/WeatherChecker/';  
import Header from './Components/Layouts/Header.js'

function App() {
  return (
    <Fragment>
      <Header id='header'/>
      <WeatherChecker id='form'/>
    </Fragment>
  );
}

export default App
