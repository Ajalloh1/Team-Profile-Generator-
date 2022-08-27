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