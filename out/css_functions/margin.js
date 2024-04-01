import { useLinkCss } from "../link_css.js";
import { escapeSquareBrackets, isSpecificValue, stripSpecificValue, isNumber } from "../utils/helper.js";
const { addToCssContent } = useLinkCss();
let final_value = '';
let final_class_name = '';
export const addMargin = (className, size) => {
    if (isSpecificValue(size)) {
        final_value = stripSpecificValue(size);
        final_class_name = escapeSquareBrackets(className);
    }
    else if (isNumber(size)) {
        final_value = `${Number(size) * 4}px`;
        final_class_name = className;
    }
    else {
        return;
    }
    const style = `
        .${final_class_name} {
            margin: ${final_value};
        }
    `;
    addToCssContent(style);
};
