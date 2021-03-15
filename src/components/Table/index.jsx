import MD5 from 'crypto-js/md5';

import TableHeader from '../TableHeader';
import TableDataRow from '../TableDataRow';
import { columns } from '../../config.json';

function Table({ invoices }) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <TableHeader
                    columns={columns}
                    key={MD5(Object.keys(columns).join('|')).toString()}
                />
                <tbody>
                    {invoices.map(invoice => {
                        return <TableDataRow
                            invoice={invoice}
                            key={MD5(Object.values(invoice).join('|')).toString()}
                            keySalt={MD5(Object.values(invoice).join('|')).toString()}
                        />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;