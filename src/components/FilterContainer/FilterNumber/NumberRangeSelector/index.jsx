import { useEffect, useState } from "react";

function NumberRangeSelector({ minValue, maxValue, updateRange }) {
    const [valueFrom, setValueFrom] = useState(minValue || 0);
    const [valueTo, setValueTo] = useState(maxValue || 0);

    const handleValueFromChange = event => {
        setValueFrom(event.target.value);
    };

    const handleValueToChange = event => {
        setValueTo(event.target.value);
    };

    useEffect(() => {
        updateRange({
            "minValue": valueFrom,
            "maxValue": valueTo,
        });
    }, [valueFrom, valueTo, updateRange]);

    return (
        <div className="numberRangeSelector">
            <label htmlFor="from">From</label>
            <input type="number" value={valueFrom} onChange={handleValueFromChange} />
            <label htmlFor="to">to</label>
            <input type="number" value={valueTo} onChange={handleValueToChange} />
        </div>
    );
};

export default NumberRangeSelector;