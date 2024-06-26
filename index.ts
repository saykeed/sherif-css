import { useGenerateCss } from "./generateCss.js"

const { generateCss } = useGenerateCss()

let classNames:string[] = []

const getClassNames = () => {
    classNames = []
    const elements = document.body.querySelectorAll('*');

    elements.forEach(function(element) {
        let classes:any = element.classList;
        classNames.push(...classes)
        
    });
    // console.log(classNames)
    generateCss(classNames)
}

document.addEventListener("DOMContentLoaded", getClassNames)