function generateCard(teamArray) {

    let cardArray = [];

    // create Manager card
    const generateManager = function (manager) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.getName()}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.getId()}</p>
                    <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                    <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
                </div>
            </div>
        </div>
        `;
    }

    ///place generate engineer function here//

    //place generate intern fucntion here///
    const generateEngineer = function (engineer) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.getName()}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.getId()}</p>
                    <p class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                    <p class="office">github: ${engineer.getGithub()}</p>
                </div>
            </div>
        </div>
        `;
    }
    const generateIntern = function (intern) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.getName()}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.getId()}</p>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.getEmail()}</a></p>
                    <p class="office">github: ${intern.getSchool()}</p>
                </div>
            </div>
        </div>
        `;
    }
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