const fs = require('fs');

const cssFile = './contact-dark.css';

fs.readFile(cssFile, 'utf8', (err, data) => {
    if (err) throw err;
    
    // Start Dark Side Theme Variables
    let result = data.replace(/#FAF1E2;/g, 'var(--color-start-dark-background);');
    result = result.replace(/#81846F;/g, 'var(--color-start-dark-text);');
    result = result.replace(/#81846F;/g, 'var(--color-start-dark-paragraph);');
    result = result.replace(/#B49D73;/g, 'var(--color-start-dark-link-text);');
    result = result.replace(/#B49D73;/g, 'var(--color-start-dark-link-text-background);');
    result = result.replace(/#2C701F;/g, 'var(--color-start-dark-active-link);');
    result = result.replace(/#000;/g, 'var(--color-start-dark-active-link-background);');
    
    // End Dark Side Theme Variables
    result = result.replace(/#7D8491;/g, 'var(--color-end-dark-background);');
    result = result.replace(/#F7EDE2;/g, 'var(--color-end-dark-text);');
    result = result.replace(/#F7EDE2;/g, 'var(--color-end-dark-paragraph);');
    result = result.replace(/#C97C5D;/g, 'var(--color-end-dark-link-text);');
    result = result.replace(/#C97C5D;/g, 'var(--color-end-dark-link-text-background);');
    result = result.replace(/#493548;/g, 'var(--color-end-dark-active-link);');
    result = result.replace(/#000;/g, 'var(--color-end-dark-active-link-background);');


    
    // Start Light Side Theme Variables
    result = result.replace(/#0C0404;/g, 'var(--color-start-light-background);');
    result = result.replace(/#A27B5C;/g, 'var(--color-start-light-text);');
    result = result.replace(/#A27B5C;/g, 'var(--color-start-light-paragraph);');
    result = result.replace(/#3F4E4F;/g, 'var(--color-start-light-link-text);');
    result = result.replace(/#3F4E4F;/g, 'var(--color-start-light-link-text-background);');
    result = result.replace(/#DCD7C9;/g, 'var(--color-start-light-active-link);');
    result = result.replace(/#000;/g, 'var(--color-start-light-active-link-background);');
    
    // End Light Side Theme Variables
    result = result.replace(/#000;/g, 'var(--color-end-light-background);');
    result = result.replace(/#B85C38;/g, 'var(--color-end-light-text);');
    result = result.replace(/#B85C38;/g, 'var(--color-end-light-paragraph);');
    result = result.replace(/#5C3D2E;/g, 'var(--color-end-light-link-text);');
    result = result.replace(/#5C3D2E;/g, 'var(--color-end-light-link-text-background);');
    result = result.replace(/#E0C097;/g, 'var(--color-end-light-active-link);');
    result = result.replace(/#000;/g, 'var(--color-end-light-active-link-background);');

    fs.writeFile(cssFile, result, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});





