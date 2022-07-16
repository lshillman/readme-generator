// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const { licenses } = require("./licenses"); // VS Code really wanted to format it this way (compare to same statement in index.js). Since this was the only way that seemed to work... great, I guess!

// const licenseInfo = licenses;
console.log(licenses);


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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## License
  
  This project uses the ${data.license} license.
  
  ## Questions?
  
  Contact [${data.github}](https://github.com/${data.github}) via email at [${data.email}](mailto:${data.email}).

`;
}

module.exports = generateMarkdown;