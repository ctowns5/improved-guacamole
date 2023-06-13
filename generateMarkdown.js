// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

  function renderLicenseBadge(license) {
    const badges = {
      mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      gnugplv3:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      cczero:
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    };
    return badges[license];
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const licenseLink = {
      mit: "[MIT](https://opensource.org/licenses/MIT)",
      gnugplv3: "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)",
      cczero: "[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)",
    };
    return licenseLink[license];
  }

  //TODO: Create a function that returns the license section of README
  //If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${renderLicenseLink(license)} license`;
    } else {
      return "";
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
  # ${data.title}

    ## Table of Contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Usage
  ${data.useage}

  ## Installation
  ${data.installation}

  ## Questions
  ${data.github}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  
`;
  }

module.exports = generateMarkdown;
