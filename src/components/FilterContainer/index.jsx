import FilterSelect from "./FilterSelect";
import { columns } from '../../config.json';
import { prepareFilterOptions } from "./utils";
import MD5 from "crypto-js/md5";
import FilterText from "./FilterText";
import FilterDate from "./FilterDate";
import FilterNumber from "./FilterNumber";
import { useState } from "react";

function FilterContainer({ applyFilters }) {
    const [filters, setFilters] = useState({});

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
        const newFilters = { ...filters };
        newFilters[newValue.columnId] = newValue.value;  
        setFilters(newFilters);
    };

    const handleClear = () => {
        setFilters({});
    };

    const handleApply = () => {
        applyFilters(filters);
    };

    return (
        <div className="filterContainer">
            <div className="filters">
                {Object.keys(columns).map(columnId => getFilter(columnId))}
            </div>
            <div className="controls">
                <button className="clear" onClick={handleClear}>Clear</button>
                <button className="apply" onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
}

export default FilterContainer;