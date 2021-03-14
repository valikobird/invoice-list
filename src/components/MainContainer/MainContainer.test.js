import { configure, mount } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainContainer from './index';
import Table from '../Table';
import Paginator from '../Paginator';
import TableDataRow from '../TableDataRow';
import FilterContainer from '../FilterContainer';

configure({ adapter: new ReactSeventeenAdapter()});

describe('MainContainer render', () => {
    const wrapper = mount(<MainContainer />);

    it('should have current page number greater than 0', () => {
        expect(wrapper.find(Paginator).prop('quantity')).toBeGreaterThan(0);
    });

    it('should contain paginator', () => {
        expect(wrapper.find(Paginator).length).toBe(1);
    });

    it('should contain table headers', () => {
        expect(wrapper.find(Table).length).toBe(1);
    });

    it('should contain filters container', () => {
        expect(wrapper.find(FilterContainer).length).toBe(1);
    });

    it('should contain correct amount of rows in the table', () => {
        const invoicesQuantity = wrapper.find(Table).prop('invoices').length;
        const tableRowsQuantity = wrapper.find(TableDataRow).length;
        expect(tableRowsQuantity).toBe(invoicesQuantity);
    });
});