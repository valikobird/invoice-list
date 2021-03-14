const prepareFilterOptions = items => {
    return items.map(item => {
        return {
            'value': item.replace(' ', '').toLowerCase(),
            'label': item
        };
    });
};

export {
    prepareFilterOptions
};