// generating employee constructor//
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // get name fucntion to return name//
    getName () {
        return this.name;
    }

    // get id fucntion to return id//
    getId () {
        return this.id;
    }   

    // eamil return fucntion//
    getEmail () {
        return this.email;
    }

    // function for returning email address//
    getRole () {
        return 'Employee'; 
    }
};

// exporting employee//
module.exports = Employee; 