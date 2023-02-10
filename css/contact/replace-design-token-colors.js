const fs = require('fs');

const cssFile = './combine.css';

fs.readFile(cssFile, 'utf8', (err, data) => {
    if (err) throw err;
    
    // Start Dark Side Theme Variables
    let result = data.replace(/var\(--color-start-light-background\)/g, '#FAF1E2');
    result = result.replace(/var\(--color-start-light-text\)/g, '#81846F');
    result = result.replace(/var\(--color-start-light-paragraph\)/g, '#81846F');
    result = result.replace(/var\(--color-start-light-link-text\)/g, '#B49D73');
    result = result.replace(/var\(--color-start-light-link-text-background\)/g, '#B49D73');
    result = result.replace(/var\(--color-start-light-active-link\)/g, '#2C701F');
    result = result.replace(/var\(--color-start-light-active-link-background\)/g, '#2C701F');
    
    // End Dark Side Theme Variables
    result = result.replace(/var\(--color-end-light-background\)/g, '#81846F');
    result = result.replace(/var\(--color-end-light-text\)/g, '#FAF1E2');
    result = result.replace(/var\(--color-end-light-paragraph\)/g, '#FAF1E2');
    result = result.replace(/var\(--color-end-light-link-text\)/g, '#FAF1E2');
    result = result.replace(/var\(--color-end-light-link-text-background\)/g, '#B49D73');
    // result = result.replace(/var\(--color-end-light-active-link\)/g, '#493548');
    // result = result.replace(/var\(--color-end-light-active-link-background\)/g, '#000');


    
    // Start Light Side Theme Variables
    result = result.replace(/var\(--color-start-dark-background\)/g, '#2D2424');
    result = result.replace(/var\(--color-start-dark-text\)/g, '#5C3D2E');
    result = result.replace(/var\(--color-start-dark-paragraph\)/g, '#442D22');
    result = result.replace(/var\(--color-start-dark-link-text\)/g, '#7D3F26');
    result = result.replace(/var\(--color-start-dark-link-text-background\)/g, '#2F180E');
    result = result.replace(/var\(--color-start-dark-active-link\)/g, '#E0C097');
    result = result.replace(/var\(--color-start-dark-active-link-background\)/g, '#7E5726');
    
    // End Light Side Theme Variables
    result = result.replace(/var\(--color-end-dark-background\)/g, '#000');
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
