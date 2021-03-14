import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import FilterNumber from ".";

configure({ adapter: new ReactSeventeenAdapter()});

describe('FilterNumber', () => {
    it('should render', () => {
        const columnId = 'total_w_vat';
        const updateFilterValue = jest.fn();
        shallow(<FilterNumber columnId={columnId} updateFilterValue={updateFilterValue} />);
    });
});