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
        <div className="my-2">
            <label htmlFor="from">From</label>
            <input
                type="number"
                value={range.from}
                onChange={handleChangeValueFrom}
                className="mx-2 pl-2"
                size="10"
                min="0"
                autoFocus
            />
            <label htmlFor="to">to</label>
            <input
                type="number"
                value={range.to}
                onChange={handleChangeValueTo}
                className="mx-2 pl-2"
                size="10"
                min="0"
            />
        </div>
    );
};

export default NumberRangeSelector;