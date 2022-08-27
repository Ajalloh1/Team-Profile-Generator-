// const for employee constructor//
const Employee = require('../rsc/Employee');
console.log(Employee);

// here create the object for employee//
test('creates an employee object', () => {
    const employee = new Employee('Rodnie', 90, 'rodnie@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getting the id from fucnction get id()
test('gets employee name', () => {
    const employee = new Employee('James', 90, 'rodnie@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
// getting the id from fucnction get id()
test('gets employee ID', () => {
    const employee = new Employee('James', 90, 'rodnies@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// generating email from employee from getEmail()
test('gets employee email', () => {
    const employee = new Employee('James', 90, 'rodnie@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// employee role from role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('James', 90, 'rodnie@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

