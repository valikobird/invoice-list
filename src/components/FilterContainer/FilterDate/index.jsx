import { useCallback, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function FilterDate({ columnId, updateFilterValue }) {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [showSelector, setShowSelector] = useState(false);

    const handleSelection = ranges => {
        setStartDate(ranges[columnId].startDate);
        setEndDate(ranges[columnId].endDate);
        toggleSelector();
    };

    const getDateRangeText = useCallback(() => {
        const start = startDate && `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
        const end = endDate && `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
        const text = !startDate && !endDate
            ? 'is not selected'
            : `from ${start} to ${end}`;

        return `Date range ${text} (clickable)`;
    }, [startDate, endDate]);

    const toggleSelector = () => {
        setShowSelector(!showSelector);
    };

    return (
        <div className="filter filterDate">
            <span className="dateRange" onClick={toggleSelector}>{getDateRangeText()}</span>
            {showSelector &&
                <DateRangePicker
                    ranges={[{
                        startDate,
                        endDate,
                        key: columnId,
                    }]}
                    onChange={handleSelection}
                />
            }
        </div>
    );
}

export default FilterDate;