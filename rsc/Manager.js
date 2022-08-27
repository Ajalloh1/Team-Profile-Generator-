// import employee constructor//
const Employee = require('./Employee');

// Manager constructor extend//
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // switching employee role to manager/// 
    getRole () {
        return "Manager";
    }
}
// export//
module.exports = Manager; 