import { render, screen } from '@testing-library/react';
import { checkTableHeaders } from '../testUtils';
import Table from './index';

const data = [{
    "status": "Final",
    "type": "Invoice",
    "number": "2019/11",
    "client_name": "Elon Tusk",
    "date": "2019-02-31",
    "total_w_vat": 123.42
}];

test('table headers inside invoices table', () => {
    checkTableHeaders(<Table invoices={data} />);
});

test('table row data inside invoices table', () => {
    render(<Table invoices={data} />);

    data.forEach(item => {
        Object.values(item).forEach(value => {
            expect(screen.getByText(value)).toBeInTheDocument();
        });    
    });
});