import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import WeatherCard from '../../../Components/Layouts/WeatherCard.js';

const weather = {
    "zipcode": "88880-000",
    "temperature": 13.11,
    "formatted_address": "Rua Alexandre Doneda, 215 - Centro, Lauro Muller - SC, 88880-000, Brazil",
    "saved_at": "07/10/2019, 17:54:45",
    "fetched_at": null
}

const invalidWeather = {
    "zipcode": null,
    "temperature": null,
    "formatted_address": null,
    "saved_at": null,
    "fetched_at": null
}

describe('WeatherCard Layout', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WeatherCard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing with invalid parameters', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WeatherCard weather={weather} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

describe('WeatherCard Layout Welcome', () => {
    const wrapper = shallow(<WeatherCard />);

    it('renders title', () => {
        expect(wrapper.find('#welcomeTitle').length).toEqual(1);        
    });

    it('renders subtitle', () => {
        expect(wrapper.find('#welcomeSubtitle').length).toEqual(1);
    });

    it('does not render weather info', () => {
        expect(wrapper.find('#fullAdress').length).toEqual(0);
        expect(wrapper.find('#temperature').length).toEqual(0);
    });

    it('does not render not found message', () =>{
        expect(wrapper.find('#notFoundMessage').length).toEqual(0);
    });
})

describe('WeatherCard Layout Filled', () => {
    const wrapper = shallow(<WeatherCard weather={weather}/>);

    it('renders fullAdress', () => {
        expect(wrapper.find('#fullAdress').length).toEqual(1);
    });

    it('renders temperature', () => {
        expect(wrapper.find('#temperature').length).toEqual(1);
    });

    it('does not render welcome message', () => {
        expect(wrapper.find('#welcomeTitle').length).toEqual(0);
        expect(wrapper.find('#welcomeSubtitle').length).toEqual(0);
    });

    it('does not render not found message', () =>{
        expect(wrapper.find('#notFoundMessage').length).toEqual(0);
    });
})

describe('WeatherCard Layout Record Not Found', () => {
    const wrapper = shallow(<WeatherCard weather={{}}/>);

    it('renders not found message', () => {
        expect(wrapper.find('#notFoundMessage').length).toEqual(1)
    });

    it('does not render welcome message', () => {
        expect(wrapper.find('#welcomeTitle').length).toEqual(0);
        expect(wrapper.find('#welcomeSubtitle').length).toEqual(0);
    });

    it('does not render weather info', () => {
        expect(wrapper.find('#fullAdress').length).toEqual(0)
        expect(wrapper.find('#temperature').length).toEqual(0)
    });

})

describe('Loading WeatherCard', () => {
    const wrapper = shallow(<WeatherCard isLoading={true}/>);
    
    it('renders loading text', () => {
        expect(wrapper.find('#loadingText').text()).toEqual('Loading...');

    });

    it('does not render welcome message', () => {
        expect(wrapper.find('#welcomeTitle').length).toEqual(0);
        expect(wrapper.find('#welcomeSubtitle').length).toEqual(0);
    });

    it('does not render weather info', () => {
        expect(wrapper.find('#fullAdress').length).toEqual(0);
        expect(wrapper.find('#temperature').length).toEqual(0);
    });
})