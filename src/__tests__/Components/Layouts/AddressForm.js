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
        expect(wrapper.find('#formInput').at(0).props().label).toEqual('Informe um endereço aqui');
    });

    describe('submit button', () => {
        it('renders submit button', () => {
            const wrapper = shallow(<AddressForm />);
            // expect(wrapper.find('#formButton').length).toEqual(1);
            expect(wrapper.find('#formButton')).toBeDefined();
            expect(wrapper.find('#formButton').text()).toEqual('Buscar temperatura');
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
});