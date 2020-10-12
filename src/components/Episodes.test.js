import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';
import Episodes from './Episodes';
import userEvent from '@testing-library/user-event';

describe('Episodes tests', () => {
    test('render episodes', () => {
        render(<Episodes episodes = {[]}/>)
    })
})