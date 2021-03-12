import { useEffect, useState } from 'react';
import Table from '../Table';
import { documents } from '../../data/documents.json';

function MainContainer() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        setInvoices(documents);
    }, []);

    return (
        <div className="main-container">
            <Table invoices={invoices} />
        </div>
    );
}

export default MainContainer;