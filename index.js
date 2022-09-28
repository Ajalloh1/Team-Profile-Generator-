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
// team profile generator array//
const teamArray = [];

// start of manager prompts name with if statements requiring a name//
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("invalide entry, please enter a name!");
                    return false;
                }
            }
        },
        // start of manager email prompts with if statements requiring a email format and characteristics//
        {

            type: 'input',
            name: 'email',
            message: "what is the Manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('you must enter an eamil')
                    return false;
                }
            }
        },
        // start of manager officeNumber prompts with if statements requiring numbers if not return false and re-prompt//
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter numerics')
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
    // start of engineer prompts for adding employee profile with if statements requiring name, and role of
    // / employee (engineer or intern) if not return false and re-prompt//

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "what is the role of your employee",
            choices: ['Engineer', 'Intern']
        },
        // start of employee prompts with if statements requiring name of employee if not return false and re-prompt//

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
        // start of employee prompts with if statements requiring ID of employee if not return false and re-prompt//

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
        // start of employee email prompts with if statements requiring a email format and characteristics if not return false and reprompt//

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
        // employee's gitHub prompts with if statements requiring a a gitHub user if not return false and re-prompt//

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
        // intern/employee's school prompts with if statements requiring a school name if not return false and re-prompt//
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the Intern's School?",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("enter intern's school!")
                }
            }
        },
        ///end of minimum required profiles, confirm end or add more///
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more employees?',
            default: false
        }
    ])
        .then(employeeData => {
            // employee data required to be entered///

            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }
            teamArray.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};
// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("The team profile has now been successfully created!")
        }
    })
};
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });