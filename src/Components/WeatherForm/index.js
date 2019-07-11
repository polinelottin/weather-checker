import React from 'react'
import {Container} from '@material-ui/core'

import WeatherCard from '../Layouts/WeatherCard.js'
import styles from './styles.js'


const weather = {
    "zipcode": "88880-000",
    "temperature": 13.11,
    "formatted_address": "Rua Alexandre Doneda, 215 - Centro, Lauro Muller - SC, 88880-000, Brazil",
    "saved_at": "07/10/2019, 17:54:45",
    "fetched_at": null
}
class WeatherForm extends React.Component {

    render(){
        return (
            <Container style={styles.container} >
                <WeatherCard weather={weather} />
            </Container>
        );
    }
}

export default WeatherForm;