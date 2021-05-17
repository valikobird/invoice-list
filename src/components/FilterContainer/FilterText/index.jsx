import { useState } from 'react';
import { columns } from '../../../config.json';

function FilterText({ columnId, updateFilterValue }) {
    const [inputValue, setInputValue] = useState('');

    const updateValue = event => {
        setInputValue(event.target.value);
        updateFilterValue({
            columnId,
            value: event.target.value
        });
    };

    return (
        <div className="d-flex flex-column my-2">
            <label htmlFor={columnId}>{columns[columnId].label}</label>
            <input
                type="text"
                name={columnId}
                value={inputValue}
                onChange={updateValue}
                size="15"
                className="px-2"
            />
        </div>
    );
}

export default FilterText;