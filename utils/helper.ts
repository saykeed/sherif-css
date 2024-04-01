export const isNumber = (num:number|string) => {
    return !isNaN(Number(num))
}

export const isSpecificValue = (value:string) => {
    return !!(value.startsWith('[') && value.endsWith(']'))
}

export const stripSpecificValue = (value:string) => {
    let strippedValue = ''
    strippedValue = value.substring(1);
    strippedValue = strippedValue.substring(0, strippedValue.length - 1);
    return strippedValue
}

export const escapeSquareBrackets = (value:string) => {
    // return value.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    return value.replace(/[\[\]#]/g, '\\$&');
}