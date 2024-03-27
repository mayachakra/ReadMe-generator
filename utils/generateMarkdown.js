// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges ={
        'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache-2.0':'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    };

    return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenselinks ={
        'MIT':'[MIT License](https://opensource.org/licenses/MIT)',
        'Apache-2.0':'[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)'
    };

    return licenselinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(!license){
        return '';
    }
    const badge= renderLicenseBadge(license);
    const link= renderLicenseLink(license)
    return `## License
    ${badge}
    This is licensed under the ${link} license.
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Features
  ${data.features}
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
