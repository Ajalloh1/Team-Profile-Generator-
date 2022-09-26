
// employee import///
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling employee constructor 
        super(name, id, email);

        this.github = github;
    }

    // returning github from input 
    getGithub() {
        return this.github;
    }

    // function for switching role to engineer
    getRole() {
        return "Engineer";
    }
}

// export engineer//
module.exports = Engineer; 