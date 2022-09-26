function generateCard(teamArray) {

    let cardArray = [];

    // create Manager card
    const generateManager = function (manager) {
        return `
            <div class="card m-3" style="width: 16rem;">
                <div class="card-body bg-primary text-light">
                    <h4 class="card-title">${manager.getName()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="#"> ${manager.getEmail()}</a></li>
                    <li class="list-group-item">${manager.getOfficeNumber()}</li>
                </ul>
            </div>
    `
    };
    ///////
    ///place generate engineer function here//
    const generateEngineer = function (engineer) {
        return `
            <div class="card m-3" style="width: 16rem;">
                <div class="card-body bg-primary text-light">
                    <h4 class="card-title">${engineer.getName()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="#"> ${engineer.getEmail()}</a></li>
                    <li class="list-group-item">${engineer.getOfficeNumber()}</li>
                </ul>
            </div>
    `
    };

    /////
    // const generateIntern = function (intern) {
    const generateIntern = function (intern) {
        return `
            <div class="card m-3" style="width: 16rem;">
                <div class="card-body bg-primary text-light">
                    <h4 class="card-title">${intern.getName()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="#"> ${intern.getEmail()}</a></li>
                    <li class="list-group-item">${intern.getOfficeNumber()}</li>
                </ul>
            </div>
    `
    };

    /////
    cardArray.push(teamArray.filter(employee => employee.getRole() === "Manager")
        .map(employee => generateManager(employee)).join("")
    )
    cardArray.push(teamArray.filter(employee => employee.getRole() === "Engineer")
        .map(employee => generateEngineer(employee)).join("")

    )
    cardArray.push(teamArray.filter(employee => employee.getRole() === "Intern")
        .map(employee => generateIntern(employee)).join("")

    )

    return cardArray.join("")
}
module.exports = teamArray => {
    return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${generateCard(teamArray)}
                    </div>
                </div>
            </div>
        </body>
        </html>`

}