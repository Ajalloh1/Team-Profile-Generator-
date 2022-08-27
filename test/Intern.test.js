// using Intern constructor 
const Intern = require('../rsc/Intern');
console.log(Intern);

// generating object for the intern//
test('creates an Intern object', () => {
    const intern = new Intern('Ibrahim', 90, 'Ib@gmail.com', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// fetching the instutition of the intern//
test('gets employee school', () => {
    const intern = new Intern('Ibrahim', 90, 'ibs@gmail.com', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//fetching the role of the intern//
test('gets role of employee', () => {
    const intern = new Intern('james', 90, 'ibs@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 