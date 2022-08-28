// const for the using Manager constructor 
const Manager = require('../rsc/Manager');

// creating object for manager  
test('creates Manager object', () => {
    const manager = new Manager('Ahmadu Jalloh', 90, 'jalloh@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// generating the role of employee//
test('gets role of employee', () => {
    const manager = new Manager('Ahmadu Jalloh', 90, 'jalloh@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 