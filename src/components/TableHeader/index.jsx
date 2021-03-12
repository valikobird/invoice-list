import MD5 from 'crypto-js/md5';

function TableHeader({ columns }) {
    return (
        <thead>
            <tr className="table-header">
                {Object.keys(columns).map(columnKey => {
                    return (
                        <th className="table-header-cell"
                            key={MD5([columnKey, columns[columnKey]].join('|')).toString()}
                        >
                            {columns[columnKey]}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

export default TableHeader;