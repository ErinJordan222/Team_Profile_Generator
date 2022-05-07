const generateInfo = require('./utils/generate-html');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

let infoObj = {
    manager: '',
    engineers: [],
    interns: [],
}

function managerQuestions() {
    console.log('Input your team info!');
    inquirer
    .prompt ([
        {
            type: 'input',
            message: "Manager's Name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "Manager's id #?",
            name: 'id'
        },
        {
            type: 'input',
            message: "Manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "Manager's office #?",
            name: 'office'
        }
    ])

    .then(managerAnswers => {
        const { name, id, email, office } = managerAnswers;
        infoObj.manager = new Manager(name, id, email, office); 
        employeeChoice();
    })
};

function engineerQuestions() {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: "Engineer's Name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "Engineer's id #?",
            name: 'id'
        },
        {
            type: 'input',
            message: "Manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "Engineer's github username?",
            name: 'github'
        },
    ])

    .then(engineerAnswers => {
        const { name, id, email, github } = engineerAnswers;
        infoObj.engineers.push(new Engineer(name, id, email, github)); 
        employeeChoice();
    })
};

function internQuestions() {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: "Intern's Name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "Intern's id #?",
            name: 'id'
        },
        {
            type: 'input',
            message: "Intern's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "Intern's schooling?",
            name: 'school'
        }
    ])

    .then(internAnswers => {
        const { name, id, email, school } = internAnswers;
        infoObj.interns = new Intern(name, id, email, school); 
        employeeChoice();
    })
};

function employeeChoice() {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'Add another team member info?',
            choices: ['Manager', 'Engineer', 'Intern', 'Done!']
        },
    ])

    .then((choices) => {
        const { choice } = choices;
        if (choice === 'Manager') {
            managerQuestions();
        } else if (choice === 'Engineer') {
            engineerQuestions();
        } else if (choice === 'Intern') {
            internQuestions();
        } else {
            writeToFile();
        }
    })
}

function writeToFile() {
    fs.writeFile('./dist/index.html', generateInfo(infoObj), function(err) {
        if(err) {
            throw err;
        } console.log('Employee Team Info is complete!');
    })
}

function init() {
    managerQuestions()
 };

 init();