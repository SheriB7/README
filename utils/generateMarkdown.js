// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


function makeBadge(str) {
  if (str !== "None")

    return `[![License: ${str}](https://img.shields.io/badge/License-${str}-yellow.svg)](https://opensource.org/licenses/${str})`;
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
