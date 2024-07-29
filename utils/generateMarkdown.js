// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function licenseBadge(license) {
    if (!license) {
      return '';
    }
    
    const badges = {
      "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "Mozilla": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      "GNU GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "GNU AGPLv3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
      "GNU LGPLv3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    };
  
    return badges[license] || '';
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (!license) {
    return '';
  }

  const links = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "Mozilla": "https://opensource.org/licenses/MPL-2.0",
    "GNU GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
    "GNU AGPLv3": "https://www.gnu.org/licenses/agpl-3.0",
    "GNU LGPLv3": "https://www.gnu.org/licenses/lgpl-3.0"
  };

  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the ${license} license. For more information, please visit [this link](${licenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${data.license ? '- [License](#license)' : ''}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributions}
  
  ## Tests
  ${data.test}
  
  ## Questions
  For any questions, please contact me at [${data.userEmail}](mailto:${data.userEmail}).  
  GitHub: [${data.userName}](https://github.com/${data.userName})
  
  ${licenseSection(data.license)}
`;
}

export default generateMarkdown;
