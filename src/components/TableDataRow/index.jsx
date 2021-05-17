import MD5 from 'crypto-js/md5';
import TableDataCell from '../TableDataCell';
import { columns } from '../../config.json';

const TableDataRow = function ({ invoice, keySalt }) {
    return (
        <tr className="table-row">
            {Object.keys(columns).map(columnKey => {
                const value = invoice[columnKey];
                return <TableDataCell
                    value={value}
                    key={MD5([keySalt, value, columnKey].join('|')).toString()}
                />;
            })}
        </tr>
    );
}

export default TableDataRow;