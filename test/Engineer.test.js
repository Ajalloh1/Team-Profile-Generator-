// const for employee constructor//
const Engineer = require('../rsc/Engineer');
console.log(Engineer);

// creating the object for engineer// 
test('creates an Engineer object', () => {
    const engineer = new Engineer('John', 90, 'ames@gmail.com', 'johnlewallace09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// fetching engineer's github user//
test('gets engineer github value', () => {
    const engineer = new Engineer('John', 90, 'ames@gmail.com', 'johnlewallace09');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getting the role of the employee, enginieer//
test('gets role of employee', () => {
    const engineer = new Engineer('James', 90, 'ames@gmail.com', 'Johnlewallace09');

    expect(engineer.getRole()).toEqual("Engineer");
});