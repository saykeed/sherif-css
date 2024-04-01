import { useLinkCss } from "../link_css.js";
import { escapeSquareBrackets, isSpecificValue, stripSpecificValue } from "../utils/helper.js";
const { addToCssContent } = useLinkCss();
let final_value = '';
let final_class_name = '';
export const addTextColor = (className, color) => {
    if (isSpecificValue(color)) {
        final_value = stripSpecificValue(color);
        final_class_name = escapeSquareBrackets(className);
    }
    else {
        final_value = color;
        final_class_name = className;
    }
    const style = `
        .${final_class_name} {
            color: ${final_value};
        }
    `;
    addToCssContent(style);
};
