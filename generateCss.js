
let cleanedCss = []
let css_content = ``;

export const useGenerateCss = () => {
    const cleanClassNames = (classNames) => {
        cleanedCss = []
        css_content = ``
        for (const el of classNames) {
            if (el.includes('-') && !cleanedCss.includes(el)) cleanedCss.push(el)
        }
        generateCssFile()
    }

    const addBackground = (className, color) => {
        css_content += `
            .${className} {
                background: ${color};
            }
        `
    }

    const addTextColor = (className, color) => {
        css_content += `
            .${className} {
                color: ${color};
            }
        `
    }

    const addPadding = (className, size) => {
        css_content += `
            .${className} {
                padding: ${Number(size)*4}px;
            }
        `
    }

    const generateCssFile = () => {
        for (const item of cleanedCss) {
            const list = item.split('-')
            if (list[0] === 'bg'){
                addBackground(item, list[1])
            }
            if (list[0] === 'text'){
                addTextColor(item, list[1])
            }
            if (list[0] === 'p' && !isNaN(Number(list[1]))){
                addPadding(item, list[1])
            }
        }

        console.log(css_content)
        // Create a blob from the generated CSS content
        var blob = new Blob([css_content], { type: 'text/css' });
        var cssUrl = URL.createObjectURL(blob);

        // Create a link element for the CSS file and set its attributes
        var linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = cssUrl;

        // Append the link element to the <head> of the document
        document.head.appendChild(linkElement);

    }
    const generateCss = (classNames) => {
        cleanClassNames(classNames)
    }

    return { generateCss }
}