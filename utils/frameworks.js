let frameworksToAdd = [];

function addFramework(framework) {
    switch (framework) {
        case 'Angular.js':
            badge = '<a><img alt="badge for Angular.js Framework" src="https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white" target="_blank" /></a>';
            break;
        case 'Bootstrap':
            badge = '<a><img alt="badge for BootStrap Library" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" target="_blank" /></a>';
            break;
        case 'Express.js':
            badge = '<a><img alt="badge for Express.js Framework" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" target="_blank" /></a>';
            break;
        case 'Flutter':
            badge = '<a><img alt="badge for Flutter Framework/Language" src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white" target="_blank" /></a>';
            break;
        case 'Insomnia':
            badge = '<a><img alt="badge for Insomnia Framework/Language/Library" src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" target="_blank" /></a>';
            break;
        case 'jQuery':
            badge = '<a><img alt="badge for jQuery Framework" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" target="_blank" /></a>';
            break;
        case 'NPM':
            badge = '<a><img alt="badge for NPM" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" target="_blank" /></a>';
            break;
        case 'Next JS':
            badge = '<a><img alt="badge for Next JS" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" target="_blank" /></a>';
            break;
        case 'Node.js':
            badge = '<a><img alt="badge for Node.js" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" target="_blank" /></a>';
            break;
        case 'Rails':
            badge = '<a><img alt="badge for Rails" src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white" target="_blank" /></a>';
            break;
        case 'React':
            badge = '<a><img alt="badge for React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" target="_blank" /></a>';
            break;
        case 'React Native':
            badge = '<a><img alt="badge for React Native" src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" target="_blank" /></a>';
            break;
        case 'SASS':
            badge = '<a><img alt="badge for SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" target="_blank" /></a>';
            break;
        case 'Svelte':
            badge = '<a><img alt="badge for Svelte" src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white" target="_blank" /></a>';
            break;
        case 'TailwindCSS':
            badge = '<a><img alt="badge for TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" target="_blank" /></a>';
            break;
        case 'Vue.js':
            badge = '<a><img alt="badge for Vue.js" src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" target="_blank" /></a>';
            break;
        case 'FontAwesome':
            badge = '<a><img alt="badge for FontAwesome" src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" target="_blank" /></a>';
            break;
        case 'SweetAlert':
            badge = '<a><img alt="badge for SweetAlert" src="https://img.shields.io/badge/Sweet_Alert2-9146FF?style=for-the-badge&logo=youtube-gaming&logoColor=white" target="_blank" /></a>';
            break;
    }
    frameworksToAdd.push(badge);
}

function getFrameworks(frameworks) {
    frameworks.map(framework => addFramework(framework));
    return frameworksToAdd.join('\n');
}

module.exports = getFrameworks;
