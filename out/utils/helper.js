export const isNumber = (num) => {
    return !isNaN(Number(num));
};
export const isSpecificValue = (value) => {
    return !!(value.startsWith('[') && value.endsWith(']'));
};
export const stripSpecificValue = (value) => {
    let strippedValue = '';
    strippedValue = value.substring(1);
    strippedValue = strippedValue.substring(0, strippedValue.length - 1);
    return strippedValue;
};
export const escapeSquareBrackets = (value) => {
    // return value.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    return value.replace(/[\[\]#]/g, '\\$&');
};
