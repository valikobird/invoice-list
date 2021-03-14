import FilterSelect from "./FilterSelect";
import { columns } from '../../config.json';
import { prepareFilterOptions } from "./utils";
import MD5 from "crypto-js/md5";
import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterNumber from "./FilterNumber";

function FilterContainer() {

    const getFilter = columnId => {
        const columnParams = columns[columnId];
        switch (columnParams.filterType) {
            case 'select':
                const options = prepareFilterOptions(columnParams.options);
                return <FilterSelect
                    columnId={columnId}
                    options={options}
                    updateFilterValue={updateFilterValue}
                    key={MD5(columnId)}
                />
            case 'text':
                return <FilterText
                    columnId={columnId}
                    updateFilterValue={updateFilterValue}
                    key={MD5(columnId)}
                />;
            case 'date':
                return <FilterDate
                    columnId={columnId}
                    updateFilterValue={updateFilterValue}
                    key={MD5(columnId)}
                />;
            case 'number':
                return <FilterNumber
                    columnId={columnId}
                    updateFilterValue={updateFilterValue}
                    key={MD5(columnId)}
                />;
            default:
                return <></>;
        }
    };

    const updateFilterValue = newValue => {

    };

    return (
        <div className="filterContainer">
            {Object.keys(columns).map(columnId => getFilter(columnId))}
        </div>
    );
}

export default FilterContainer;