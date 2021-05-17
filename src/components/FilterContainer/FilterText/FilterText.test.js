import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import FilterText from ".";

configure({ adapter: new ReactSeventeenAdapter()});

describe('FilterText', () => {
    const columnId = 'number';
    const updateFilterValue = jest.fn();
    const wrapper = shallow(<FilterText columnId={columnId} updateFilterValue={updateFilterValue} />);

    it('should contain component and label with provided column id', () => {
        expect(wrapper.find('label').prop('htmlFor')).toEqual(columnId);
        expect(wrapper.find('input[type="text"]').prop('name')).toEqual(columnId);
    });
});