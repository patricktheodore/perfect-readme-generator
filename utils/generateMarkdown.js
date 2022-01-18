let toolsToAdd = [];

function addTool(tool) {
    switch (tool) {
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
        case 'Canva':
            badge = '<a><img alt="badge for Canva" src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white" target="_blank" /></a>';
            break;
        case 'Dribble':
            badge = '<a><img alt="badge for Dribble" src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" target="_blank" /></a>';
            break;
        case 'Figma':
            badge = '<a><img alt="badge for Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" target="_blank" /></a>';
            break;
        case 'CodePen':
            badge = '<a><img alt="badge for CodePen" src="https://img.shields.io/badge/CodePen-white?style=for-the-badge&logo=codepen&logoColor=black" target="_blank" /></a>';
            break;
        case 'Visual Studio Code':
            badge = '<a><img alt="badge for Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" target="_blank" /></a>';
            break;
        case 'Xcode':
            badge = '<a><img alt="badge for Xcode" src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white" target="_blank" /></a>';
            break;
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
        case 'Google Fonts':
            badge = '<a><img alt="badge for Google Fonts" src="https://img.shields.io/badge/google_fonts-4285F4?style=for-the-badge&logo=google&logoColor=white" target="_blank" /></a>';
            break;
        case 'HTML5':
            badge = '<a><img alt="badge for HTML5 Language" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" target="_blank" /></a>';
            break;
        case 'CSS3':
            badge = '<a><img alt="badge for CSS3 Language" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" target="_blank" /></a>';
            break;
        case 'JavaScript':
            badge = '<a><img alt="badge for JavaScript Language" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" target="_blank" /></a>';
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
    toolsToAdd.push(badge);
}

function getTools(tools) {
    tools.map(tool => addTool(tool));
    return toolsToAdd.join('\n');
}

let badge = '';

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      badge = 'https://img.shields.io/badge/License-Apache%202.0-yellow';
      break;
    case 'Do What The F*ck You Want To Public License':
      badge = 'https://img.shields.io/badge/License-WTFPL-yellow';
      break;
    case 'GNU General Public License v3.0':
      badge = 'https://img.shields.io/badge/License-GPLv3-yellow';
      break;
    case 'BSD 3-clause License':
      badge = 'https://img.shields.io/badge/License-BSD%203--Clause-yellow';
      break;
    case 'MIT':
      badge = 'https://img.shields.io/badge/License-MIT-yellow';
      break;
    case 'Mozilla Public License 2.0':
      badge = 'https://img.shields.io/badge/License-MPL%202.0-yellow';
      break;
  }
  return badge
}

function renderLicenseLink(license) {
  switch (license) {
    case 'Apache license 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Do What The F*ck You Want To Public License':
      link = 'http://www.wtfpl.net/about/';
      break;
    case 'GNU General Public License v3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3-clause License':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      link = 'https://opensource.org/licenses/MPL-2.0';
      break;
  }
  return link
 }

 let contribution = '';

 function generateContributionSection(response) {
   if (response === true) {
    contribution = `Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
    
  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
    
    * Fork the Project
    * Create your Feature Branch (git checkout -b feature/AmazingFeature)
    * Commit your Changes (git commit -m 'Add some AmazingFeature')
    * Push to the Branch (git push origin feature/AmazingFeature)
    * Open a Pull Request`
   } else if (response === false) {
     contribution = `This project is for private use and not looking for contributions at this time.`
   }
   return contribution
  }
  
  function generateMarkdown(data) {
    return `
  <h1 align="center">${data.title}</h1>

  <p align="center">
  <a href="${data.remoteRepo}/issues"><img alt="number of issues for the repository" src="https://img.shields.io/github/issues/${data.gitUser}/${data.repoTitle}?color=red&label=Issues&style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}"><img alt="the size of the repo in kb" src="https://img.shields.io/github/repo-size/${data.gitUser}/${data.repoTitle}?color=orange&label=Repo-Size&style=for-the-badge" target="_blank" /></a>
  <a href="${renderLicenseLink(data.license)}"><img alt="licence the repo is published under" src="${renderLicenseBadge(data.license)}?style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}/graphs/contributers"><img alt="the number of contributers on the repo" src="https://img.shields.io/github/contributors/${data.gitUser}/${data.repoTitle}?color=brightgreen&label=Contributors&style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}/network/members"><img alt="total number of times the repo has been forked" src="https://img.shields.io/github/forks/${data.gitUser}/${data.repoTitle}?color=blue&label=Forks&style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}/stargazers"><img alt="total number of times the repo has been starred" src="https://img.shields.io/github/stars/${data.gitUser}/${data.repoTitle}?color=blueviolet&label=Stars&style=for-the-badge" target="_blank" /></a>
  </p>

  <div align="center">
    <p>
      <h3>${data.briefDescription}</h3>
      <a href="${data.remoteRepo}"><strong>Explore the docs »</strong></a>
      <br />
      <a href="${data.remoteRepo}">View Demo</a>
       | 
      <a href="${data.remoteRepo}/issues">Report Bug</a>
       | 
      <a href="${data.remoteRepo}/issues">Request Feature</a>
    </p>
  </div>

  <br>
  <br>
  
  

  <br />
  <br />
  
  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ul>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ul>
  </details>

  <br />
  <br />
  
  
  
  <!-- ABOUT THE PROJECT -->
  # About The Project
  ${data.detailedDescription}

  </br> 

  # Built With
  <p align="center">
  ${getTools(data.tools)}


  </p>

  
  </br>
  
  <!-- GETTING STARTED -->
  # Getting Started
  
  ## Prerequisites
    ${data.prerequisites}
  
  ## Installation
    ${data.installation}

  <br>

  <!-- USAGE EXAMPLES -->
  # Usage
    ${data.usage}
  
  <br>

  <!-- CONTRIBUTING -->
  # Contributing
  ${generateContributionSection(data.contribution)}
  
  <br>

  <!-- LICENSE -->
  # License
  Distributed under ${data.license}. Please see for ${renderLicenseLink(data.license)} more details. 

  <br>

  <!-- TEST -->
  # Tests
    ${data.tests}
  
  <br>

  <!-- QUESTIONS & CONTACT -->
  # Questions & Contact Info
  <a href="https://github.com/${data.gitUser}"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>
  <a href="${data.portfolio}"><img alt="link to user portfolio" src="https://img.shields.io/static/v1?label=PORTFOLIO&message=${data.gitUser}&color=green&style=for-the-badge" target="_blank" /></a>
  <a href="mailto:${data.email}"><img alt="Link to email contact address" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
  <br>
  
  <!-- ACKNOWLEDGMENTS -->
  # Acknowledgments
  ${data.acknowledgments}
  <p align="right">(<a href="#top">back to top</a>)</p>  
`;
}

module.exports = generateMarkdown;
