import MD5 from 'crypto-js/md5';
import TableDataCell from '../TableDataCell';

const TableDataRow = function ({ invoice, keySalt }) {
    return (
        <tr className="table-row">
            {Object.values(invoice).map((value, index) => {
                return <TableDataCell
                    value={value}
                    key={MD5([keySalt, value, index].join('|')).toString()}
                />;
            })}
        </tr>
    );
}

export default TableDataRow;