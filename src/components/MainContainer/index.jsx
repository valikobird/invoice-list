import { useEffect, useState } from 'react';
import Table from '../Table';
import Paginator from '../Paginator';
import config from '../../config.json';
// `documents` structure has changed by adding a separate `meta` block with total records quantity. Having this block we avoid fetching all data in order to show correct pages quantity.
import { documents, meta } from '../../data/documents.json';
import FilterContainer from '../FilterContainer';

function MainContainer() {
    const [pageSize, setPageSize] = useState(0);
    const [invoices, setInvoices] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pagesQuantity, setPagesQuantity] = useState(0);

    useEffect(() => {
        setPageSize(config.defaults.pageSize);
    }, []);

    useEffect(() => {
        const fetchedInvoices = getInvoices(documents, pageSize, pageNumber);
        setInvoices(fetchedInvoices.documents);
        setPagesQuantity(calculatePagesQuantity(pageSize, fetchedInvoices.quantity));
    }, [pageSize, pageNumber]);

    const getInvoices = (documentsList, size, currentPageNumber) => {
        return {
            'documents': documentsList.slice((currentPageNumber - 1) * size, currentPageNumber * size),
            'quantity': meta.quantity
        };
    };

    const calculatePagesQuantity = (size, total) => {
        return Math.ceil(total / size);
    };

    const updatePageNumber = newValue => {
        setPageNumber(newValue);
    };

    return (
        <div className="main-container">
            <h1>Invoices</h1>
            <FilterContainer />
            <Table invoices={invoices} />
            <Paginator currentPage={pageNumber} quantity={pagesQuantity} updatePageNumber={updatePageNumber} />
        </div>
    );
}

export default MainContainer;