import { render, screen } from '@testing-library/react';
import { columns } from '../config.json';

const checkTableHeaders = function (component) {
    render(component);

    const values = Object.values(columns);
    expect(values.length).toBeGreaterThan(0);

    values.forEach(value => {
        expect(screen.getByText(value)).toBeInTheDocument();
    });
}

export {
    checkTableHeaders,
};