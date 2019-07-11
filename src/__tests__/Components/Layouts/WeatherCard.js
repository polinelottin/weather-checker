import React from 'react';
import WeatherCard from '../../../Components/Layouts/WeatherCard.js';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

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
    it('renders title', () => {
        expect(shallow(<WeatherCard />).find('#welcomeTitle').length).toEqual(1)
    })

    it('renders subtitle', () => {
        expect(shallow(<WeatherCard />).find('#welcomeSubtitle').length).toEqual(1)
    })
})

describe('WeatherCard Layout Filled', () => {
    it('renders title', () => {
        expect(shallow(<WeatherCard weather={weather}/>).find('#fullAdress').length).toEqual(1)
    })

    it('renders subtitle', () => {
        expect(shallow(<WeatherCard weather={weather}/>).find('#temperature').length).toEqual(1)
    })
})