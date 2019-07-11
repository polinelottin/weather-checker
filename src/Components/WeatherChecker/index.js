import React from 'react'
import {Container} from '@material-ui/core'

import AddressForm from '../Layouts/AddressForm.js'
import WeatherCard from '../Layouts/WeatherCard.js'

import styles from './styles.js'


const weather = {
    "zipcode": "88880-000",
    "temperature": 13.11,
    "formatted_address": "Rua Alexandre Doneda, 215 - Centro, Lauro Muller - SC, 88880-000, Brazil",
    "saved_at": "07/10/2019, 17:54:45",
    "fetched_at": null
}
class WeatherChecker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formAddress: ''
          };
      }
    
    onSubmit = event => {
        if(this.state.formAddress !== ''){
            console.log('hey!');
        }
    }

    handleAddressChange = event => {
        this.setState({formAddress: event.target.value});
      }

    render(){
        return (
            <Container style={styles.container} >
                <AddressForm 
                    id='addressForm'
                    formAddress={this.state.formAddress}
                    onSubmit={this.onSubmit.bind(this)}
                    handleChange={this.handleAddressChange.bind(this)}
                />
                <WeatherCard id='weatherCard' weather={weather} />
            </Container>
        );
    }
}

export default WeatherChecker;