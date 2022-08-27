//import constructor for employee 
const Employee = require('./Employee');

// intern constructor// 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // return school fucntion///
    getSchool () {
        return this.school;
    }

    // swich role to intern///
    getRole () {
        return "Intern";
    }
}

// export//
module.exports = Intern;  