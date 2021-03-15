import { useEffect, useState } from 'react';
import Table from '../Table';
import Paginator from '../Paginator';
import config from '../../config.json';
import { documents } from '../../data/documents.json';
import FilterContainer from '../FilterContainer';

function MainContainer() {
    const [pageSize, setPageSize] = useState(0);
    const [invoices, setInvoices] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pagesQuantity, setPagesQuantity] = useState(0);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        setPageSize(config.defaults.pageSize);
    }, []);

    useEffect(() => {
        setPageNumber(1);
    }, [filters]);

    useEffect(() => {
        const filteredDocuments = documents.filter(document => {
            return Object.keys(filters).reduce((acc, columnId) => {
                if (!filters[columnId]) {
                    return acc;
                }

                const docValue = document[columnId];
                const columnConfig = config.columns[columnId];
                switch (columnConfig.filterType) {
                    case "select":
                        return acc && (docValue === filters[columnId])
                    case "text":
                        return acc && docValue.includes(filters[columnId]);
                    case "date":
                        const dateRange = filters[columnId];
                        const parts = docValue.split('-');
                        const docDate = (new Date(parts[0], parts[1] - 1, parts[2])).getTime();
                        return (!dateRange.startDate && !dateRange.endDate)
                            ? acc
                            : acc
                                && docDate >= dateRange.startDate.getTime()
                                && docDate <= dateRange.endDate.getTime();
                    case "number":
                        const numberRange = filters[columnId];
                        if (!numberRange.from && !numberRange.to) {
                            return acc;
                        } else if (numberRange.from && !numberRange.to) {
                            return acc && (docValue >= numberRange.from);
                        } else if (!numberRange.from && numberRange.to) {
                            return acc && (docValue <= numberRange.to);
                        } else {
                            return acc
                                && docValue >= numberRange.from
                                && docValue <= numberRange.to;
                        }
                    default:
                        return acc;
                }
            }, true);
        });

        const pagesQuantity = calculatePagesQuantity(pageSize, filteredDocuments.length);
        setPagesQuantity(pagesQuantity);
        const newPageNumber = pageNumber > pagesQuantity
            ? setPageNumber(Math.min(pagesQuantity, 1))
            : pageNumber;

        const documentsPage = newPageNumber
            ? filteredDocuments.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
            : [];

        setInvoices(documentsPage);
    }, [pageSize, pageNumber, filters]);

    const calculatePagesQuantity = (size, total) => {
        return Math.ceil(total / size);
    };

    return (
        <div className="main-container">
            <h1>Invoices</h1>
            <FilterContainer applyFilters={setFilters} />
            <Table invoices={invoices} />
            <Paginator
                currentPage={pageNumber}
                quantity={pagesQuantity}
                updatePageNumber={setPageNumber}
            />
        </div>
    );
}

export default MainContainer;