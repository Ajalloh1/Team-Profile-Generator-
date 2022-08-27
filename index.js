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