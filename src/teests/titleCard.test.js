import React from 'react';
import { render } from '@testing-library/react';
import TitleCard from '../components/titleCard';

test('Renders Title', ()=>{
    const { getByText } = render(<TitleCard title="Hello From a Unit Test"/>);
    expect(getByText('Hello From a Unit Test')).toBeInTheDocument();
});