const normalizePhone = value => {
    if (!value) {
        return value;
    }

    const onlyNums =
        value.length >= 3
            ? value.substring(2).replace(/[^\d]/g, '')
            : value.replace(/[^\d]/g, '');

    if (onlyNums.length <= 3) return `+7(${onlyNums})`;

    if (onlyNums.length <= 7)
        return `+7(${onlyNums.slice(0, 3)})${onlyNums.slice(3)}`;

    if (onlyNums.length <= 9)
        return `+7(${onlyNums.slice(0, 3)})${onlyNums.slice(3, 6)}-${onlyNums.slice(
            6
        )}`;

    return `+7(${onlyNums.slice(0, 3)})${onlyNums.slice(3, 6)}-${onlyNums.slice(
        6,
        8
    )}-${onlyNums.slice(8, 10)}`;
};

export default normalizePhone;