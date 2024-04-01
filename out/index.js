import { useGenerateCss } from "./generateCss.js";
const { generateCss } = useGenerateCss();
let classNames = [];
const getClassNames = () => {
    classNames = [];
    const elements = document.body.querySelectorAll('*');
    elements.forEach(function (element) {
        let classes = element.classList;
        classNames.push(...classes);
    });
    generateCss(classNames);
};
document.addEventListener("DOMContentLoaded", getClassNames);
