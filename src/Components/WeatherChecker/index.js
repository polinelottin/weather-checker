import React from 'react'
import { Container, Typography } from '@material-ui/core'

import AddressForm from '../Layouts/AddressForm.js'
import WeatherCard from '../Layouts/WeatherCard.js'

import styles from './styles.js'

class WeatherChecker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formAddress: '',
            weather: null,
            searchHistory: [],
            showHistory: false,
            isLoading: false,
            error: null
        };
    }

    onSubmit = event => {
        event.preventDefault();
        this.resetState();
        this.fetchWeather();
    }

    resetState(){
        this.setState({
            weather: null,
            showHistory: false,
            isLoading: true,
            error: null,
        });
    }

    fetchWeather() {
        if (this.state.formAddress !== '') {

            fetch('http://127.0.0.1:5000/weather/' + this.state.formAddress)
                .then(response => {
                    if (!response.ok) {
                        if(response.status === 404){
                            return {weather: {}};
                        }
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    this.setState({
                        weather: data.weather,
                        isLoading: false,
                        error: null,
                    })
                })
                .catch(error => this.setState({
                    error: error,
                    isLoading: false
                }));
        }
    }

    fetchHistory() {
        fetch('http://127.0.0.1:5000/weather_history')
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                this.setState({
                    searchHistory: response.search_history,
                    isLoading: false,
                    error: null,
                })
            })
            .catch(error => this.setState({
                error: error,
                isLoading: false
            }));
    }

    handleAddressChange = event => {
        this.setState({ formAddress: event.target.value });
    }


    handleHistory = event => {
        if (!this.state.showHistory) {
            this.fetchHistory();
        }
        this.toggleHistory();

    }

    toggleHistory() {
        this.setState((prevState) => (
            {
                showHistory: !prevState.showHistory
            }
        ));
    }

    renderErrorMessage() {
        const { error } = this.state;
        return error ? (<Typography id='errorMessage'>{error.message}</Typography>) : null;
    }

    render() {
        const { weather, formAddress, showHistory, searchHistory, isLoading } = this.state;

        return (
            <Container style={styles.container} >
                {this.renderErrorMessage()}

                <WeatherCard id='weatherCard' weather={weather} isLoading={isLoading} />
                <AddressForm
                    id='addressForm'
                    onSubmit={this.onSubmit.bind(this)}
                    handleChange={this.handleAddressChange.bind(this)}
                    handleHistory={this.handleHistory.bind(this)}
                    formAddress={formAddress}
                    showHistory={showHistory}
                    searchHistory={searchHistory}
                />
            </Container>
        );
    }
}

export default WeatherChecker;