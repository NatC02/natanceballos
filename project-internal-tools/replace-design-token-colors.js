const fs = require('fs');

// add files to use here, only one at a time
const cssFile = './portfolio.css';

// the design token is not finished yet, so some of the colors will be updated soon

fs.readFile(cssFile, 'utf8', (err, data) => {
    if (err) throw err;
    
    // Start Light Side Theme Variables
    let result = data.replace(/var\(--color-start-light-background\)/g, '#FAF1E2');
    result = result.replace(/var\(--color-start-light-text\)/g, '#81846F');
    result = result.replace(/var\(--color-start-light-paragraph\)/g, '#81846F');
    result = result.replace(/var\(--color-start-light-link-text\)/g, '#B49D73');
    result = result.replace(/var\(--color-start-light-link-text-background\)/g, '#B49D73');
    result = result.replace(/var\(--color-start-light-active-link\)/g, '#2C701F');
    result = result.replace(/var\(--color-start-light-active-link-background\)/g, '#000');
    
    // End Light Side Theme Variables
    result = result.replace(/var\(--color-end-light-background\)/g, '#7D8491');
    result = result.replace(/var\(--color-end-light-text\)/g, '#F7EDE2');
    result = result.replace(/var\(--color-end-light-paragraph\)/g, '#F7EDE2');
    result = result.replace(/var\(--color-end-light-link-text\)/g, '#C97C5D');
    result = result.replace(/var\(--color-end-light-link-text-background\)/g, '#C97C5D');
    result = result.replace(/var\(--color-end-light-active-link\)/g, '#493548');
    result = result.replace(/var\(--color-end-light-active-link-background\)/g, '#000');


    
    // Start Dark Side Theme Variables
    result = result.replace(/var\(--color-start-dark-background\)/g, '#2C3639');
    result = result.replace(/var\(--color-start-dark-text\)/g, '#A27B5C');
    result = result.replace(/var\(--color-start-dark-paragraph\)/g, '#A27B5C');
    result = result.replace(/var\(--color-start-dark-link-text\)/g, '#3F4E4F');
    result = result.replace(/var\(--color-start-dark-link-text-background\)/g, '#3F4E4F');
    result = result.replace(/var\(--color-start-dark-active-link\)/g, '#DCD7C9');
    result = result.replace(/var\(--color-start-dark-active-link-background\)/g, '#000');
    
    // End Dark Side Theme Variables
    result = result.replace(/var\(--color-end-dark-background\)/g, '#2D2424');
    result = result.replace(/var\(--color-end-dark-text\)/g, '#B85C38');
    result = result.replace(/var\(--color-end-dark-paragraph\)/g, '#B85C38');
    result = result.replace(/var\(--color-end-dark-link-text\)/g, '#5C3D2E');
    result = result.replace(/var\(--color-end-dark-link-text-background\)/g, '#5C3D2E');
    result = result.replace(/var\(--color-end-dark-active-link\)/g, '#E0C097');
    result = result.replace(/var\(--color-end-dark-active-link-background\)/g, '#000');

    fs.writeFile(cssFile, result, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});