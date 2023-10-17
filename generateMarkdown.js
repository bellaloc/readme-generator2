


function renderLicenseBadge(license) {
 
  switch (license) {
    case 'MIT':
      return '[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![GPL License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
    default:
      return ''; 
  }
}


function renderLicenseLink(license) {

  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://opensource.org/licenses/GPL-3.0';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
    case 'Apache 2.0':
      return 'This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
    case 'GPL 3.0':
      return 'This project is licensed under the [GPL 3.0 License](https://opensource.org/licenses/GPL-3.0).';
    default:
      return ''; 
  }
}
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)} // Add the license badge
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)} // Add the license section

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
