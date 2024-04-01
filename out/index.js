"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateCss_js_1 = require("./generateCss.js");
const { generateCss } = (0, generateCss_js_1.useGenerateCss)();
let classNames = [];
const getClassNames = () => {
    classNames = [];
    const elements = document.body.querySelectorAll('*');
    elements.forEach(function (element) {
        var classes = element.classList;
        classNames.push(...classes);
    });
    console.log(classNames);
    generateCss(classNames);
};
document.addEventListener("DOMContentLoaded", getClassNames);
