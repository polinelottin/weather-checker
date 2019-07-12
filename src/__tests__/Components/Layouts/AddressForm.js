import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import AddressForm from '../../../Components/Layouts/AddressForm.js';

describe('WeatherCard Layout', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders input', () => {
        const wrapper = shallow(<AddressForm />);
        expect(wrapper.find('#formInput').length).toEqual(1);
        expect(wrapper.find('#formInput').at(0).props().label).toEqual('Type address here');
    });

    describe('submit button', () => {
        it('renders submit button', () => {
            const wrapper = shallow(<AddressForm />);
            expect(wrapper.find('#formButton').length).toEqual(1);
            expect(wrapper.find('#formButton').text()).toEqual('Check weather');
        })

        it('disables button when there is no address', () => {
            const wrapper = shallow(<AddressForm />);
            expect(wrapper.find('#formButton').at(0).props().disabled).toBe(true);
        })

        it('enables button when there is an address', () => {
            const wrapper = shallow(<AddressForm formAddress={'foo'}/>);
            expect(wrapper.find('#formButton').at(0).props().disabled).toBe(false);
        })
    });

    describe('history link', () => {
        it('renders submit button', () => {
            const wrapper = shallow(<AddressForm showHistory={true}/>);
            expect(wrapper.find('#hideHistoryButton').length).toEqual(1);
            expect(wrapper.find('#showHistoryButton').length).toEqual(0);
        })

        it('does not render submit button', () => {
            const wrapper = shallow(<AddressForm showHistory={false}/>);
            expect(wrapper.find('#hideHistoryButton').length).toEqual(0);
            expect(wrapper.find('#showHistoryButton').length).toEqual(1);
        })
    });
});