import { useEffect, useState } from "react";

function Paginator({ currentPage, quantity, updatePageNumber }) {
    const [inputValue, setInputValue] = useState(0);

    useEffect(() => {
        setInputValue(currentPage);
    }, [currentPage]);

    const handleInput = event => {
        applyNewValue(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.charCode === 13 && inputValue) {
            updatePageNumber(inputValue);
        }
    };

    const applyNewValue = newValue => {
        newValue === ''
            ? setInputValue(newValue)
            : setInputValue(sanitizeInputValue(newValue));
    };

    const sanitizeInputValue = value => {
        if (typeof value === 'string') {
            value = value.replace(/\D/, '');
        }
        if (value < 1) {
            value = 1;
        } else if (value > quantity) {
            value = quantity;
        }
        return value;
    }

    const handlePrev = () => {
        const prevPage = inputValue - 1;
        handlePageChange(prevPage);
    };

    const handleNext = () => {
        const nextPage = inputValue + 1;
        handlePageChange(nextPage);
    };

    const handlePageChange = pageNumber => {
        applyNewValue(pageNumber);
        updatePageNumber(sanitizeInputValue(pageNumber));
    };

    return (
        <div className="text-center">
            <button
                type="button"
                className="prevPage btn btn-sm btn-outline-secondary mr-3"
                onClick={handlePrev}
                hidden={currentPage <= 1}
            >Prev</button>
            <input
                type="text"
                name="currentPage"
                value={inputValue}
                onInput={handleInput}
                onKeyPress={handleKeyPress}
                className="mr-2 px-2 text-center"
                size="2"
            />
            <span className="pagesQuantity">{`out of ${quantity}`}</span>
            <button
                className="nextPage btn btn-sm btn-outline-secondary ml-3"
                onClick={handleNext}
                hidden={currentPage === quantity}
            >Next</button>
        </div>
    );
};

export default Paginator;