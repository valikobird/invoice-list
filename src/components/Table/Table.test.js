import { render, screen } from '@testing-library/react';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import TableHeader from '../TableHeader';
import Table from './index';

configure({ adapter: new ReactSeventeenAdapter() });

const data = [{
    "status": "Final",
    "type": "Invoice",
    "number": "2019/11",
    "client_name": "Elon Tusk",
    "date": "2019-02-31",
    "total_w_vat": 123.42
}];

describe('Table', () => {
    it('should contain column headers', () => {
        const wrapper = mount(<Table invoices={data} />);
        expect(wrapper.props().invoices).toBeDefined();
        expect(wrapper.find(TableHeader).length).toBe(1);
    });

    it('should have row data', () => {
        render(<Table invoices={data} />);

        data.forEach(item => {
            Object.values(item).forEach(value => {
                expect(screen.getByText(value)).toBeInTheDocument();
            });
        });
    });
});