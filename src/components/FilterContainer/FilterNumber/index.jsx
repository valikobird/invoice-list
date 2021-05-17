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

        return `Amount range ${text}`;
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

    const handleClear = () => {
        setShowSelector(false);
        const newRange = {
            from: undefined,
            to: undefined,
        };
        setRange(newRange);
        updateFilterValue({
            columnId,
            value: newRange,
        });
    };

    return (
        <div className="my-2">
            <span>{getNumberRangeText()}</span>
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