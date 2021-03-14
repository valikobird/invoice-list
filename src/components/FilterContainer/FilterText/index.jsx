import { useEffect, useState } from 'react';
import { columns } from '../../../config.json';

function FilterText({ columnId, updateFilterValue }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        updateFilterValue(inputValue);
    }, [inputValue, updateFilterValue]);

    return (
        <div className="filter filterText">
            <label htmlFor={columnId}>{columns[columnId].label}</label>
            <input
                type="text"
                name={columnId}
                value={inputValue}
                onChange={setInputValue}
            />
        </div>
    );
}

export default FilterText;