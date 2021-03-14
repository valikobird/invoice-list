import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount } from "enzyme";
import FilterContainer from ".";
import FilterSelect from "./FilterSelect";
import { columns } from '../../config.json';
import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterNumber from "./FilterNumber";

configure({ adapter: new ReactSeventeenAdapter });

describe('FilterContainer render', () => {
    const wrapper = mount(<FilterContainer />);

    it('should contain filters for all table columns', () => {
        const dictionary = {};
        Object.values(columns).forEach(item => {
            dictionary[item.filterType] = (dictionary[item.filterType] || 0) + 1;
        });

        Object.keys(dictionary).forEach(item => {
            const quantity = dictionary[item];
            switch (item) {
                case 'select':
                    expect(wrapper.find(FilterSelect).length).toBe(quantity);
                    break;
                case 'text':
                    expect(wrapper.find(FilterText).length).toBe(quantity);
                    break;
                case 'date':
                    expect(wrapper.find(FilterDate).length).toBe(quantity);
                    break;
                case 'number':
                    expect(wrapper.find(FilterNumber).length).toBe(quantity);
                    break;
                default:
                    expect(item.filterType).toBeUndefined();
            }
        });
    });
});