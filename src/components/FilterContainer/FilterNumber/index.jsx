import { useCallback, useState } from "react";
import NumberRangeSelector from "./NumberRangeSelector";

function FilterNumber({ columnId, updateFilterValue }) {
    const [showSelector, setShowSelector] = useState(false);
    const [range, setRange] = useState({
        from: undefined,
        to: undefined,
    });

    const getNumberRangeText = useCallback(() => {
        let text;
        if (!range.from && !range.to) {
            text = 'is not selected';
        } else if (range.from && !range.to) {
            text = `from ${range.from}`;
        } else if (!range.from && range.to) {
            text = `up to ${range.to}`;
        } else {
            text = `from ${range.from} to ${range.to}`;
        }

        return `Amount range ${text} (clickable)`;
    }, [range]);

    const toggleSelector = () => {
        setShowSelector(!showSelector);
    };

    const updateRange = newRange => {
        setRange(newRange);
        updateFilterValue({
            columnId,
            value: newRange,
        });
    };

    return (
        <div className="filter filterNumber">
            <span className="numberRange" onClick={toggleSelector}>{getNumberRangeText()}</span>
            {showSelector &&
                <NumberRangeSelector
                    minValue={range.from}
                    maxValue={range.to}
                    updateRange={updateRange}
                />
            }
        </div>
    );
}

export default FilterNumber;