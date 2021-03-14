import MD5 from 'crypto-js/md5';
import { columns } from '../../../config.json';

function FilterSelect({ columnId, options, updateFilterValue }) {
    return (
        <div className="filter filterSelect">
            <label htmlFor={columnId}>{columns[columnId].label}</label>
            <select name={columnId} id={columnId}>
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