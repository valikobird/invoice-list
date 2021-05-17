import { useCallback, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function FilterDate({ columnId, updateFilterValue }) {
    const [range, setRange] = useState({
        startDate: undefined,
        endDate: undefined,
    });
    const [showSelector, setShowSelector] = useState(false);

    const handleSelection = ranges => {
        toggleSelector();
        const newRange = {
            startDate: ranges[columnId].startDate,
            endDate: ranges[columnId].endDate,
        };
        setRange(newRange);
        updateFilterValue({
            columnId,
            value: newRange,
        });
    };

    const getDateRangeText = useCallback(() => {
        const start = range.startDate
            && `${range.startDate.getDate()}/${range.startDate.getMonth() + 1}/${range.startDate.getFullYear()}`;
        const end = range.endDate
            && `${range.endDate.getDate()}/${range.endDate.getMonth() + 1}/${range.endDate.getFullYear()}`;
        const text = !range.startDate && !range.endDate
            ? 'is not selected'
            : `from ${start} to ${end}`;

        return `Date range ${text}`;
    }, [range]);

    const toggleSelector = () => {
        setShowSelector(!showSelector);
    };

    const handleClear = () => {
        const newRange = {
            startDate: undefined,
            endDate: undefined,
        };
        setRange(newRange);
        updateFilterValue({
            columnId,
            value: newRange,
        });
    };

    return (
        <div className="pl-0 my-2 w-50 d-flex flex-row justify-content-start align-items-baseline">
            <span>{getDateRangeText()}</span>
            <button
                type="button"
                className="btn btn-outline-primary btn-sm ml-2"
                onClick={toggleSelector}
            >{showSelector ? 'Hide' : 'Select'}</button>
            <button
                type="button"
                className="btn btn-outline-secondary btn-sm ml-2"
                onClick={handleClear}
            >Clear</button>
            {showSelector &&
                <div className="position-absolute mt-4 pt-3">
                    <DateRangePicker
                        ranges={[{
                            startDate: range.startDate,
                            endDate: range.endDate,
                            key: columnId,
                        }]}
                        onChange={handleSelection}
                    />
                </div>
            }
        </div>
    );
}

export default FilterDate;