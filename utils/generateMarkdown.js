// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  





  ${generateDescription( data.description ) }


  ## Table of Contents
  *[installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Tests](#tests)
  *[Questions](#questions)


  `;
}

function generateDescription( description ) {
return `## Description

${description}`;

}

console.log(generateMarkdown({
title: "testing",
description: "testing description"
}));

















module.exports = generateMarkdown;
