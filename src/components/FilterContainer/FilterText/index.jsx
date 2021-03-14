import { useEffect, useState } from 'react';
import { columns } from '../../../config.json';

function FilterText({ columnId, updateFilterValue }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        updateFilterValue({
            columnId,
            value: inputValue
        });
    }, [inputValue, columnId, updateFilterValue]);

    const updateValue = event => {
        setInputValue(event.target.value);
    };

    return (
        <div className="filter filterText">
            <label htmlFor={columnId}>{columns[columnId].label}</label>
            <input
                type="text"
                name={columnId}
                value={inputValue}
                onChange={updateValue}
            />
        </div>
    );
}

export default FilterText;