let css_content = '';
export const useLinkCss = () => {
    const linkCss = () => {
        // console.log(css_content)
        // Create a blob from the generated CSS content
        var blob = new Blob([css_content], { type: 'text/css' });
        var cssUrl = URL.createObjectURL(blob);
        // Create a link element for the CSS file and set its attributes
        var linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = cssUrl;
        // Append the link element to the <head> of the document
        document.head.appendChild(linkElement);
    };
    const addToCssContent = (css) => {
        css_content += css;
    };
    const clearCssContent = () => {
        css_content = '';
    };
    return { linkCss, addToCssContent, clearCssContent };
};
