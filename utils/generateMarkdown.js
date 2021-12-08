let badge = '';


const languages = require('./languages');
const frameworks = require('./frameworks');
const designs = require('./design');
const editor = require('./editor');
const tools = require('./badges');

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
  <h1 style="text-align: center;">${data.title}</h1>

  <p style="text-align: center;">
  <a href="${data.remoteRepo}/issues"><img alt="number of issues for the repository" src="https://img.shields.io/github/issues/${data.gitUser}/${data.repoTitle}?color=red&label=Issues&style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}"><img alt="the size of the repo in kb" src="https://img.shields.io/github/repo-size/${data.gitUser}/${data.repoTitle}?color=orange&label=Repo-Size&style=for-the-badge" target="_blank" /></a>
  <a href="${renderLicenseLink(data.license)}"><img alt="licence the repo is published under" src="${renderLicenseBadge(data.license)}?style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}/graphs/contributers"><img alt="the number of contributers on the repo" src="https://img.shields.io/github/contributors/${data.gitUser}/${data.repoTitle}?color=brightgreen&label=Contributors&style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}/network/members"><img alt="total number of times the repo has been forked" src="https://img.shields.io/github/forks/${data.gitUser}/${data.repoTitle}?color=blue&label=Forks&style=for-the-badge" target="_blank" /></a>
  <a href="${data.remoteRepo}/stargazers"><img alt="total number of times the repo has been starred" src="https://img.shields.io/github/stars/${data.gitUser}/${data.repoTitle}?color=blueviolet&label=Stars&style=for-the-badge" target="_blank" /></a>
  </p>

  <div style="text-align: center;">
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
  <p style="text-align: center;">
  ${languages(data.languages)}${frameworks(data.frameworks)}${editor(data.editors)}${tools(data.tools)}${designs(data.designs)}


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
  Distributed under the ${data.license}. Please see for ${renderLicenseLink(data.license)} more details. 

  <br>

  <!-- TEST -->
  # Tests
    ${data.tests}
  
  <br>

  <!-- QUESTIONS & CONTACT -->
  # Questions & Contact Info
  <a href="https://github.com/${data.gitUser}"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>
  <a href="https://github.com/patricktheodore/rental-reviewer/stargazers"><img alt="total number of times the repo has been starred" src="https://img.shields.io/static/v1?label=PORTFOLIO&message=patricktheodore&color=<COLOR>&style=for-the-badge" target="_blank" /></a>  
  <a href="mailto:${data.email}"><img alt="Link to email contact address" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>  
  <br>
  
  <!-- ACKNOWLEDGMENTS -->
  # Acknowledgments
  ${data.acknowledgments}
  <p align="right">(<a href="#top">back to top</a>)</p>  
`;
}

module.exports = generateMarkdown;
