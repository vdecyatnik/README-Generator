const inquirer = require("inquirer");
const fs = require("fs");



// array of questions for user
inquirer
        .prompt([

                {
                        type: 'input',
                        message: 'What is the title of your project?',
                        name: 'title',
                },

                {
                        type: 'input',
                        message: 'Please describe your project',
                        name: 'description',

                },
                {
                        type:'input',
                        message:'What are the installation instructions for your project?',
                        name:'installation',
                },

                {
                        type: 'input',
                        message: 'Enter usage information details',
                        name: 'usage',
                },

                {
                        type: 'input',
                        message: 'What are the contribution guidelines?',
                        name: 'contribution',

                },
                {
                        type: 'input',
                        message: 'What are the test instructions for your program?',
                        name: 'test',

                },

                {

                        type: 'list',
                        message: 'Pick a license',
                        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
                        name: 'license',

                },

                {

                        type: 'input',
                        message: 'What is your github URL?',
                        name: 'githubURL',


                },
                {
                        type: 'input',
                        message: 'What is your email address?',
                        name: 'email',
                }

        ])




.then((response) => {


         let markDownFile =

`# Title
${response.title}


# Table of Contents

- [Description](#Description)

- [Installation](#Installation)

- [Usage](#Usage)

- [License](#License)

- [Contributors](#Contributors)

- [Tests](#Tests)

- [Questions](#Questions)

 ## Descripton
 ${response.description}

 ## Installation
 ${response.installation}

 ## Usage
 ${response.usage}

 ## License
 This project is covered under ${response.license}.
 
 ## Contributors
 ${response.contribution}

 ## Tests
 ${response.test}

 ## Questions 
 If you have any questions please contact me through my git hub profile.http://github.com/${response.githubURL} or my email ${response.email}



` 
        fs.writeFile('./README.md', markDownFile, function (err,data){
                if(err) throw err;
                console.log(data);
        })






})











