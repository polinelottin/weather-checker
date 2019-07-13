import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import History from '../../../Components/Layouts/History.js';

const history = [
    {
        "zipcode": "88880-000",
        "temperature": 13.11,
        "formatted_address": "Rua Alexandre Doneda, 215 - Centro, Lauro Muller - SC, 88880-000, Brazil",
        "saved_at": "07/10/2019, 17:12:19",
        "fetched_at": null
    },
    {
        "zipcode": "88880-000",
        "temperature": 13.11,
        "formatted_address": "Rua Alexandre Doneda, 215 - Centro, Lauro Muller - SC, 88880-000, Brazil",
        "saved_at": "07/10/2019, 17:12:14",
        "fetched_at": "07/10/2019, 17:12:14"
    }
]

const invalidHistory = {
    "zipcode": null,
    "temperature": null,
    "formatted_address": null,
    "saved_at": null,
    "fetched_at": null
}

describe('History Layout', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<History />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing with invalid parameters', () => {
        const div = document.createElement('div');
        ReactDOM.render(<History history={invalidHistory} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders title', () => {
        const wrapper = shallow(<History />);
        expect(wrapper.find('#historyTitle').length).toEqual(1);
        expect(wrapper.find('#historyTitle').text()).toEqual('What people search');
    })

    it('renders hide button', () => {
        const wrapper = shallow(<History />);
        expect(wrapper.find('#hideHistoryButton').length).toEqual(1);
    })

})

describe('History list', () => {
    it('does not crash with empty list', () => {
        const wrapper = shallow(<History searchHistory={{}}/>);
        expect(wrapper.find('#noHistoryText').length).toEqual(1);
        expect(wrapper.find('#noHistoryText').text()).toEqual('Be the first one to search a place!');
        expect(wrapper.find('#historyItem').length).toEqual(0);
    })

    it('displays how many records are', () => {
        const wrapper = shallow(<History searchHistory={history}/>);
        expect(wrapper.find('#historyCaption').length).toEqual(1);
        expect(wrapper.find('#historyCaption').text()).toEqual("Showing the last " + history.length + " records");
    })

    it('renders all records', () => {
        const wrapper = shallow(<History searchHistory={history}/>);
        expect(wrapper.find('#historyItem').length).toEqual(history.length);
        
    })

    it('weather card correctly', () => {
        const wrapper = shallow(<History searchHistory={history}/>);
        expect(wrapper.find('#historyItem').at(0).text()).toEqual(history[0]['formatted_address']);
        
    })
})