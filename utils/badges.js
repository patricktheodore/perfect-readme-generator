let toolsToAdd = [];

function addTools(tools) {
    switch (tools) {
        case 'Git':
            badge = '<a><img alt="badge for Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" target="_blank" /></a>';
            break;
        case 'GitHub':
            badge = '<a><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>';
            break;
        case 'GitLab':
            badge = '<a><img alt="badge for GitLab" src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" target="_blank" /></a>';
            break;
        case 'Airtable':
            badge = '<a><img alt="badge for Airtable" src="https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white" target="_blank" /></a>';
            break;
        case 'MDN Web Docs':
            badge = '<a><img alt="badge for MDN Web Docs" src="https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white" target="_blank" /></a>';
            break;
        case 'Stack Overflow':
            badge = '<a><img alt="badge for Stack Overflow" src="https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" target="_blank" /></a>';
            break;
        case 'AWS':
            badge = '<a><img alt="badge for AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" target="_blank" /></a>';
            break;
        case 'Azure':
            badge = '<a><img alt="badge for Azure" src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=azure-devops&logoColor=white" target="_blank" /></a>';
            break;
        case 'Heroku':
            badge = '<a><img alt="badge for Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" target="_blank" /></a>';
            break;
        case 'MongoDB':
            badge = '<a><img alt="badge for MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" target="_blank" /></a>';
            break;
        case 'MySQL':
            badge = '<a><img alt="badge for MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" target="_blank" /></a>';
            break;
        case 'Sequelize':
            badge = '<a><img alt="badge for Sequelize" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" target="_blank" /></a>';
            break;
        case 'Google Drive':
            badge = '<a><img alt="badge for Google Drive" src="https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" target="_blank" /></a>';
            break;
        case 'Dropbox':
            badge = '<a><img alt="badge for Dropbox" src="https://img.shields.io/badge/Dropbox-%233B4D98.svg?style=for-the-badge&logo=Dropbox&logoColor=white" target="_blank" /></a>';
            break;
        case 'ESLint':
            badge = '<a><img alt="badge for ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" target="_blank" /></a>';
            break;
        case 'Postman':
            badge = '<a><img alt="badge for Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" target="_blank" /></a>';
            break;
        case 'Trello':
            badge = '<a><img alt="badge for Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white" target="_blank" /></a>';
            break;
    }
    toolsToAdd.push(badge);
}

function getTools(tools) {
    tools.map(tool => addTools(tool));
    return toolsToAdd.join('\n');
}

module.exports = getTools;