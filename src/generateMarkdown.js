// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licKey) {
  if (!licKey)
    return ""
  else 
  return `![badge](https://img.shields.io/badge/license-${licKey}-brightgreen)`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licKey, licName, licURL) {
if (!licKey)
return ""
else 
return `${licName} 
For further information see ${licURL}`
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licKey, licBody) {
if (!licKey)
return ""
else 
return `${licBody}`
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, install, usage, contributors, test, user, email, licKey, licName, licBody, licURL }) =>
  `# ${title}

  ${renderLicenseBadge(licKey)}

  ## Description
  ${description}

  ## Table of Contents
  [Installation Instructions](#installation)

  [Usage](#usage)

  [Contributors](#contributors)

  [Test](#test)

  [Questions](#questions)

  [License](#License)

  ## Installation
  ${install}

  ## Usage
  ${usage}

  ## Contributors
  ${contributors}

  ## Test
  ${test}

  ## Questions? 
  Check out my GitHub profile: https://github.com/${user}
  Please contact me on ${email} if you'd like to discuss any aspects of this project.  

  ## License
  ${renderLicenseLink(licKey, licName, licURL)}
  ${renderLicenseSection(licKey, licBody)}

`;


module.exports = generateMarkdown;
