// generateMarkdown function populating the README.md
function generateMarkdown(answers) {
    return `
<h1 align="center">๐ฅ ${answers.projectTitle} ๐ฅ</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
๐ ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
๐พ ${answers.installation}

## Usage
๐ฅ๏ธ ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
๐งโ๐คโ๐ง ${answers.contributing}

## Tests
๐งช ${answers.tests}

## Questions
๐ฉ ${answers.questions}<br />

<br />
๐  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
โ๏ธ Email me with your question at: ${answers.email}<br /><br />
    `;
  }
  

  module.exports = generateMarkdown;