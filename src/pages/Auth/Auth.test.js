import { shallow } from 'enzyme';
import React from 'react';
import Auth from './Auth';

it('testing AuthPage', ()=>{
    expect(shallow(<Auth/>)).toMatchSnapshot();
});

