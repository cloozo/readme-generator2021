// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License :
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://shileds.io/)
## Table of Contents
- [Descriptions](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
${data.description}
## Description:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Contribution:
${data.contribution}
## Testing: 
${data.test}
##  Contact Information:
- github: [${data.github}(https://github.com/${data.github})]
- Email:[${data.email}(mailto: user@example.com)]
`;
}

module.exports = generateMarkdown;
