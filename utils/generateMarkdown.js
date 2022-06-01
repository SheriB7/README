// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


function makeBadge(str) {
  if (str !== "None")

    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT),
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0), 
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    ; 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
    

## Description
${data.description}

${makeBadge(data.license)}


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation
${data.installation}


## Usage
${data.usage}

## License
${data.license}



## Contributing
${data.helpers}

## Tests
${data.tests}

## Questions
[contact me](https://${data.email})


[github profile](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
