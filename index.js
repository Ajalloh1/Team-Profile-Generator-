//////////
// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./rsc/Manager');
console.log(Manager);
const Engineer = require('./rsc/Engineer');
console.log(Engineer);
const Intern = require('./rsc/Intern');
console.log(Intern);

// node modules 
const fs = require('fs');
const inquirer = require('inquirer');
// team array
const teamArray = [];

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Theam manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Manager name!");
                    return false;
                }
            }
        },
        {

            type: 'input',
            name: 'email',
            message: "what is the Manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter the manager number')
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};