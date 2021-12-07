let languagesToAdd = [];

function addLanguage(language) {
    switch (language) {
        case 'HTML5':
            badge = '<a><img alt="badge for HTML5 Language" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" target="_blank" /></a>';
            break;
        case 'CSS3':
            badge = '<a><img alt="badge for CSS3 Language" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" target="_blank" /></a>';
            break;
        case 'JavaScript':
            badge = '<a><img alt="badge for JavaScript Language" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" target="_blank" /></a>';
            break;
        case 'Markdown':
            badge = '<a><img alt="badge for Markdown Language" src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" target="_blank" /></a>';
            break;
        case 'PHP':
            badge = '<a><img alt="badge for PHP Language" src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" target="_blank" /></a>';
            break;
        case 'Python':
            badge = '<a><img alt="badge for Python Language" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" target="_blank" /></a>';
            break;
        case 'Ruby':
            badge = '<a><img alt="badge for Ruby Language" src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white" target="_blank" /></a>';
            break;
        case 'Rust':
            badge = '<a><img alt="badge for Rust Language" src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" target="_blank" /></a>';
            break;
        case 'TypeScript':
            badge = '<a><img alt="badge for TypeScript Language" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" target="_blank" /></a>';
            break;
    }
    languagesToAdd.push(badge);
}

function getLanguages(languages) {
    languages.map(language => addLanguage(language));
    return languagesToAdd.join('\n');
}

module.exports = getLanguages;

