import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App/>', () => {
    it('should match snapshot', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});

