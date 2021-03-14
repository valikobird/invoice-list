import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import FilterSelect from '.';
import { prepareFilterOptions } from "../utils";

configure({ adapter: new ReactSeventeenAdapter() });

describe('FilterSelect', () => {
    const items = ['Draft', 'Final', 'Paid', 'Cancelled'];
    const columnId = 'status';
    const options = prepareFilterOptions(items);
    const wrapper = shallow(<FilterSelect columnId={columnId} options={options} />);

    it('should generate correct value for provided labels', () => {
        items.forEach((item, index) => {
            expect(options[index].value).toEqual(item.replace(' ', '').toLowerCase());
            expect(options[index].label).toEqual(item);
        });
    });

    it('should contain component and label with provided column id', () => {
        expect(wrapper.find('label').prop('htmlFor')).toEqual(columnId);
        expect(wrapper.find('select').prop('id')).toEqual(columnId);
    });

    it('should contain all provided options', () => {
        expect(wrapper.find('option').length).toBe(items.length + 1);
    });
});