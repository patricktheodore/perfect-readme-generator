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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  [![License: ${data.license}](${renderLicenseBadge(data.license)})
  [![Contributers: ${data.remoteRepo}](https://img.shields.io/github/contributors/${data.gitUser}/${data.repoTitle}?color=brightgreen&label=Contributors)](${data.remoteRepo}/graphs/contributers) 
  [![Forks: ${data.remoteRepo}](https://img.shields.io/github/forks/${data.gitUser}/${data.repoTitle}?color=blue&label=Forks)](${data.remoteRepo}/network/members) 
  [![Stars: ${data.remoteRepo}](https://img.shields.io/github/stars/${data.gitUser}/${data.repoTitle}?color=blueviolet&label=Stars)](${data.remoteRepo}/stargazers)
  [![Issues: ${data.remoteRepo}](https://img.shields.io/github/issues/${data.gitUser}/${data.repoTitle}?color=red&label=Issues)](${data.remoteRepo}/issues)

  <h1 align="center">${data.title}</h3>
  
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

  
  ## Built With
  ${data.builtWith}

  
  
  <!-- GETTING STARTED -->
  # Getting Started
  <br />
  
  ## Prerequisites
  ${data.prerequisites}
  
  ## Installation
  ${data.installation}

  
  <!-- USAGE EXAMPLES -->
  # Usage
  ${data.usage}
  
  
  <!-- CONTRIBUTING -->
  # Contributing
  ${generateContributionSection(data.contribution)}
  
  
  <!-- LICENSE -->
  # License
  Distributed under the ${data.license}. Please see for ${renderLicenseLink(data.license)} more details. 

  
  <!-- TEST -->
  # Tests
  ${data.tests}
  
  
  <!-- QUESTIONS & CONTACT -->
  # Questions & Contact Info
  Find my github profile at: https://github.com/${data.gitUser} </br>
  Browse the repo: ${data.remoteRepo} </br>
  Get in contact via email: ${data.email} 
  </br></br>
  My preferred method of communication: ${data.contact}
  
  
  <!-- ACKNOWLEDGMENTS -->
  # Acknowledgments
  ${data.acknowledgments}
  <p align="right">(<a href="#top">back to top</a>)</p>  
`;
}

module.exports = generateMarkdown;
