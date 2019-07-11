import React from 'react'
import {Container} from '@material-ui/core'

import AddressForm from '../Layouts/AddressForm.js'
import WeatherCard from '../Layouts/WeatherCard.js'

import styles from './styles.js'

class WeatherChecker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formAddress: '',
            weather: {}
          };
      }
    
    onSubmit = event => {
        event.preventDefault();

        if(this.state.formAddress !== ''){
            fetch('http://127.0.0.1:5000/weather/'+this.state.formAddress)
            .then(res => res.json())
            .then((data) => {
                this.setState({weather: data.weather})
            })
            .catch(console.log) 
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
                <WeatherCard id='weatherCard' weather={this.state.weather} />
            </Container>
        );
    }
}

export default WeatherChecker;