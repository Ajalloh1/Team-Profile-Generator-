// const for employee constructor//
const Employee = require('../rsc/Employee');
console.log(Employee);

// here create the object for employee//
test('creates an employee object', () => {
    const employee = new Employee('James', 90, 'ames@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getting the id from fucnction get id()
test('gets employee name', () => {
    const employee = new Employee('James', 90, 'ames@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


