import { useCallback, useState } from "react";
import NumberRangeSelector from "./NumberRangeSelector";

function FilterNumber({ columnId, updateFilterValue }) {
    const [showSelector, setShowSelector] = useState(false);
    const [minAmount, setMinAmount] = useState();
    const [maxAmount, setMaxAmount] = useState();

    const getNumberRangeText = useCallback(() => {
        let text;
        if (!minAmount && !maxAmount) {
            text = 'is not selected';
        } else if (minAmount && !maxAmount) {
            text = `from ${minAmount}`;
        } else if (!minAmount && maxAmount) {
            text = `up to ${maxAmount}`;
        } else {
            text = `from ${minAmount} to ${maxAmount}`;
        }

        return `Amount range ${text} (clickable)`;
    }, [minAmount, maxAmount]);

    const toggleSelector = () => {
        setShowSelector(!showSelector);
    };

    const updateRange = range => {
        setMinAmount(range.minValue);
        setMaxAmount(range.maxValue);
    };

    return (
        <div className="filter filterNumber">
            <span className="numberRange" onClick={toggleSelector}>{getNumberRangeText()}</span>
            {showSelector &&
                <NumberRangeSelector
                    minValue={minAmount}
                    maxValue={maxAmount}
                    updateRange={updateRange}
                />
            }
        </div>
    );
}

export default FilterNumber;