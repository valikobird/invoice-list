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

        return `Date range ${text} (clickable)`;
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
        <div className="filter filterDate">
            <span className="dateRange" onClick={toggleSelector}>{getDateRangeText()}</span>
            <button className="clear" onClick={handleClear}>Clear</button>
            {showSelector &&
                <DateRangePicker
                    ranges={[{
                        startDate: range.startDate,
                        endDate: range.endDate,
                        key: columnId,
                    }]}
                    onChange={handleSelection}
                />
            }
        </div>
    );
}

export default FilterDate;