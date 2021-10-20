let badge = '';

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      badge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Do What The F*ck You Want To Public License':
      badge = 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/';
      break;
    case 'GNU General Public License v3.0':
      badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3-clause License':
      badge = 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'MIT':
      badge = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      badge = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0';
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  [![License: ${data.license}](${renderLicenseBadge(data.license)})
  [![Contributers: ${data.remoteRepo}](https://img.shields.io/github/contributors/${data.gitUser}/${data.repoTitle}?color=brightgreen&label=Contributors)](${data.remoteRepo}/graphs/contributers) 
  [![Forks: ${data.remoteRepo}](https://img.shields.io/github/forks/${data.gitUser}/${data.repoTitle}?color=blue&label=Forks)](${data.remoteRepo}/network/members) 
  [![Stars: ${data.remoteRepo}](https://img.shields.io/github/stars/${data.gitUser}/${data.repoTitle}?color=blueviolet&label=Stars)](${data.remoteRepo}/stargazers)
  [![Issues: ${data.remoteRepo}](https://img.shields.io/github/issues/${data.gitUser}/${data.repoTitle}?color=red&label=Issues)](${data.remoteRepo}/issues)

  <h3 align="center">${data.title}</h3>
  
  <div>
    <p align="center">
      ${data.briefDescription}
      <br />
      <a href="${data.remoteRepo}"><strong>Explore the docs »</strong></a>
      <br />
      <br />
      <a href="${data.remoteRepo}">View Demo</a>
      ·
      <a href="${data.remoteRepo}/issues">Report Bug</a>
      ·
      <a href="${data.remoteRepo}/issues">Request Feature</a>
    </p>
  </div>

  <br />
  <br />
  
  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
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
    </ol>
  </details>
  
  
  <!-- ABOUT THE PROJECT -->
  ## About The Project
  ${data.detailedDescription}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  ### Built With
  ${data.builtWith}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- GETTING STARTED -->
  ## Getting Started
  <br />
  
  ### Prerequisites
  ${data.prerequisites}
  
  ### Installation
  ${data.installation}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- USAGE EXAMPLES -->
  ## Usage
  ${data.usage}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- CONTRIBUTING -->
  ## Contributing
  ${data.contribution}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- LICENSE -->
  ## License
  Distributed under the ${data.license}. Please see for ${renderLicenseLink(data.license)} more details. 
  
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- TEST -->
  ## Tests
  ${data.tests}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- QUESTIONS & CONTACT -->
  ## Questions & Contact Info
  ${data.gitUser}
  ${data.remoteRepo}
  ${data.email}
  ${data.contact}
  <p align="right">(<a href="#top">back to top</a>)</p>
  
  
  <!-- ACKNOWLEDGMENTS -->
  ## Acknowledgments
  ${data.acknowledgments}
  <p align="right">(<a href="#top">back to top</a>)</p>  
`;
}

module.exports = generateMarkdown;
