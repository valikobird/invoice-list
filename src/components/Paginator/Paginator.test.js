import { configure, mount, shallow } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Paginator from './index';

configure({ adapter: new ReactSeventeenAdapter() });

describe('Paginator', () => {
    const updatePageNumber = jest.fn();
    const wrapper = mount(<Paginator currentPage={1} quantity={3} updatePageNumber={updatePageNumber} />);

    it('should show pages quantity', () => {
        expect(wrapper.props().quantity).toBeDefined();
        expect(wrapper.find('.pagesQuantity').exists()).toBe(true);
    });

    it('should show current page number', () => {
        const pageNumberProp = wrapper.props().currentPage;
        expect(wrapper.props().currentPage).toBeDefined();

        const currentPageInput = wrapper.find('input[name="currentPage"]');
        expect(currentPageInput.exists()).toBe(true);
        const pageNumberRendered = currentPageInput.prop('value');
        expect(pageNumberRendered).toEqual(pageNumberProp);
    });

    it('should have callback as prop to updage current page number', () => {
        const updatePageNumberProp = wrapper.props().updatePageNumber;
        expect(updatePageNumberProp).toBeDefined();
        expect(typeof updatePageNumberProp).toEqual('function');
    });
});

describe('Paginator buttons', () => {
    const updatePageNumber = jest.fn();

    it('should have the Next button and no Prev button on the first page', () => {
        const wrapper = shallow(<Paginator currentPage={1} quantity={3} updatePageNumber={updatePageNumber} />)
        expect(wrapper.find('button.prevPage').prop('hidden')).toBe(true);
        expect(wrapper.find('button.nextPage').prop('hidden')).toBe(false);
    });
    it('should have the Prev button and no Next button on the last page', () => {
        const wrapper = shallow(<Paginator currentPage={3} quantity={3} updatePageNumber={updatePageNumber} />)
        expect(wrapper.find('button.prevPage').prop('hidden')).toBe(false);
        expect(wrapper.find('button.nextPage').prop('hidden')).toBe(true);
    });
});