import React from 'react';
import {Container} from '@material-ui/core'

import WeatherChecker from './Components/WeatherChecker/';  
import Header from './Components/Layouts/Header.js'

function App() {
  return (
    <Container style={{marginTop: 16}}>
      <Header id='header'/>
      <WeatherChecker id='form'/>
    </Container>
  );
}

export default App
