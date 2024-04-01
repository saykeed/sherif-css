import { useLinkCss } from "./link_css.js";
import { addBackground, addMargin, addPadding, addTextColor } from "./css_functions/index.js";
let cleanedCss = [];
const { linkCss, clearCssContent } = useLinkCss();
export const useGenerateCss = () => {
    const cleanClassNames = (classNames) => {
        for (const el of classNames) {
            if (el.includes('-') && !cleanedCss.includes(el))
                cleanedCss.push(el);
        }
        generateCssFile();
    };
    const generateCssFile = () => {
        for (const item of cleanedCss) {
            const list = item.split('-');
            const prefix = list[0];
            const suffix = list[1];
            if (prefix === 'bg') {
                addBackground(item, suffix);
            }
            if (prefix === 'text') {
                addTextColor(item, suffix);
            }
            if (prefix === 'p') {
                addPadding(item, suffix);
            }
            if (prefix === 'm') {
                addMargin(item, suffix);
            }
        }
        linkCss();
    };
    const generateCss = (classNames) => {
        cleanedCss = [];
        clearCssContent();
        cleanClassNames(classNames);
    };
    return { generateCss };
};
