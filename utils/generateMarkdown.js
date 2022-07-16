// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const { licenses } = require("./licenses"); // VS Code really wanted to format it this way (compare to same statement in index.js). Since this was the only way that seemed to work... great, I guess!

// const licenseInfo = licenses;

function renderLicenseBadge(license) {
  let badge = "";
  licenses.forEach(element => {
    if (element.name == license) {
      badge = `[![License: ${element.name}](${element.badge})](${element.link})
      
      `;
    }
  });
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  licenses.forEach(element => {
    if (element.name == license) {
      link = `[${element.name}](${element.link})`;
    }
  });
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    return `## License\nThis project uses ${renderLicenseLink(license)}.`
  } else {return ""}
}

function renderLicenseTOC(license) {
  if (license != "none") {
    return `* [License](#license)`
  } else {return ""}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${data.description}
  
  ---
  **Table of Contents**
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${renderLicenseTOC(data.license)}
  * [Questions](#questions)
  ---

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions?
  
  Contact [${data.github}](https://github.com/${data.github}) via email at [${data.email}](mailto:${data.email}).

`;
}

module.exports = generateMarkdown;