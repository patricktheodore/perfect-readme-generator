let designsToAdd = [];

function addDesign(design) {
    switch (design) {
        case 'Adobe After Effects':
            badge = '<a><img alt="badge for Adobe After Effects" src="https://img.shields.io/badge/Adobe%20After%20Effects-9999FF.svg?style=for-the-badge&logo=Adobe%20After%20Effects&logoColor=white" target="_blank" /></a>';
            break;
        case 'Adobe Fonts':
            badge = '<a><img alt="badge for Adobe Fonts" src="https://img.shields.io/badge/Adobe%20Fonts-000B1D.svg?style=for-the-badge&logo=Adobe%20Fonts&logoColor=white" target="_blank" /></a>';
            break;
        case 'Adobe Illustrator':
            badge = '<a><img alt="badge for Adobe Illustrator" src="https://img.shields.io/badge/adobeillustrator-%23FF9A00.svg?style=for-the-badge&logo=adobeillustrator&logoColor=white" target="_blank" /></a>';
            break;
        case 'Adobe InDesign':
            badge = '<a><img alt="badge for Adobe InDesign" src="https://img.shields.io/badge/Adobe%20InDesign-49021F?style=for-the-badge&logo=adobeindesign&logoColor=white" target="_blank" /></a>';
            break;
        case 'Adobe Photoshop':
            badge = '<a><img alt="badge for Adobe Photoshop" src="https://img.shields.io/badge/adobephotoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white" target="_blank" /></a>';
            break;
        case 'Blender':
            badge = '<a><img alt="badge for Blender" src="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white" target="_blank" /></a>';
            break;
        case 'Canva':
            badge = '<a><img alt="badge for Canva" src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" target="_blank" /></a>';
            break;
        case 'Dribble':
            badge = '<a><img alt="badge for Dribble" src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" target="_blank" /></a>';
            break;
        case 'Figma':
            badge = '<a><img alt="badge for Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" target="_blank" /></a>';
            break;

    }
    designsToAdd.push(badge);
}

function getDesign(designs) {
    designs.map(design => addDesign(design));
    return designsToAdd.join('\n');
}

module.exports = getDesign;