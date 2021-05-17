import MD5 from 'crypto-js/md5';
import { columns } from '../../../config.json';

function FilterSelect({ columnId, options, updateFilterValue }) {
    const handleChange = event => {
        const value = event.target.value
            ? options.find(option => option.value === event.target.value).label
            : '';

        updateFilterValue({
            columnId,
            value,
        });
    };

    return (
        <div className="d-flex flex-column my-2">
            <label htmlFor={columnId}>{columns[columnId].label}</label>
            <select name={columnId} id={columnId} onChange={handleChange}>
                <option value=""></option>
                {options.map(item => {
                    return (
                        <option 
                            value={item.value}
                            key={MD5(`${columnId}|${item.value}`)}
                        >{item.label}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default FilterSelect;