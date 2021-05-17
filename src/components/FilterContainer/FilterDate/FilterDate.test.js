import ReactSeventeenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import FilterDate from ".";

configure({ adapter: new ReactSeventeenAdapter() });

describe('FilterDate', () => {
    it('should render', () => {
        const columnId = 'date';
        const updateFilterValue = jest.fn();
        shallow(<FilterDate columnId={columnId} updateFilterValue={updateFilterValue} />);
    });
});