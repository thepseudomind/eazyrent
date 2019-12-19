import { shallow } from 'enzyme';
import React from 'react';
import AlertBox from './AlertBox';

it('testing AlertBox', ()=>{
    const message = 'dummy';
    expect(shallow(<AlertBox message={message}/>)).toMatchSnapshot();
    expect(message).toBe('dummy');
})