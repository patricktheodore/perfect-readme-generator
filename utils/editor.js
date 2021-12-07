let editorToAdd = [];

function addEditor(editor) {
    switch (editor) {
        case 'CodePen':
            badge = '<a><img alt="badge for CodePen" src="https://img.shields.io/badge/CodePen-white?style=for-the-badge&logo=codepen&logoColor=black" target="_blank" /></a>';
            break;
        case 'Visual Studio Code':
            badge = '<a><img alt="badge for Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" target="_blank" /></a>';
            break;
        case 'Xcode':
            badge = '<a><img alt="badge for Xcode" src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white" target="_blank" /></a>';
            break;
    }
    editorToAdd.push(badge);
}

function getEditors(editors) {
    editors.map(editor => addEditor(editor));
    return editorsToAdd.join('\n');
}

module.exports = getEditors;