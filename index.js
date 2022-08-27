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
const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "what is the role of your employee",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the email of employee.",
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
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Enter the employee's github username ID please!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the INtern's School?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("enter intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more employees?',
            default: false
        }
    ])
        .then(employeeData => {
            // data for employee types 

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }