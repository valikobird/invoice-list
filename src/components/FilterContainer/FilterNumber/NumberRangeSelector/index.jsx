import { useState } from "react";

function NumberRangeSelector({ minValue, maxValue, updateRange }) {
    const [range, setRange] = useState({
        from: minValue || '',
        to: maxValue || ''
    });

    const handleChangeValueFrom = event => {
        const newRange = Object.assign({}, range, { from: event.target.value });
        setRange(newRange);
        updateRange(newRange);
    };

    const handleChangeValueTo = event => {
        const newRange = Object.assign({}, range, { to: event.target.value });
        setRange(newRange);
        updateRange(newRange);
    };

    return (
        <div className="numberRangeSelector">
            <label htmlFor="from">From</label>
            <input type="number" value={range.from} onChange={handleChangeValueFrom} autoFocus />
            <label htmlFor="to">to</label>
            <input type="number" value={range.to} onChange={handleChangeValueTo} />
        </div>
    );
};

export default NumberRangeSelector;