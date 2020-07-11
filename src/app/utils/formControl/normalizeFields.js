const normalizeFiels = value => {
    if (!value) {
        return value;
    }

    const textStr = value;
    return `${textStr.slice(0, 1).toUpperCase()}${textStr.slice(1)}`;
};

export default normalizeFiels;
