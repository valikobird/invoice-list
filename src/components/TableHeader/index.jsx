import MD5 from 'crypto-js/md5';

function TableHeader({ columns }) {
    return (
        <thead>
            <tr>
                {Object.keys(columns).map(columnKey => {
                    return (
                        <th scope="col"
                            key={MD5([columnKey, columns[columnKey].label].join('|')).toString()}
                        >{columns[columnKey].label}</th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHeader;