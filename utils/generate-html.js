const generateInfo = ({manager, interns, engineers}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <main>
                <div class="jumbotron-fluid">
                    <div class="row">
                    <div class="col-12 jumbotron mb-3 main-heading">
                        <h1 class="text-center">Employee Management System</h1>
                        <h2 class="text-center">My Team</h2>
                    </div>
                </div>
            </div>
            
        <div class="container">
            <div class="row">
                <div class="info-area col-12 d-flex justify-content-center">
                    <div class="card info-card">
                        <div class="card-header">
                        <h2 class="card-title">${manager.getRole()}</h2>
                        <h4 class="card-text">${manager.getName()}</h4>
                    </div>
                    <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email:<a href="mailto: ${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office #: ${manager.getOffice()}</li>
                    </ul>
                </div>
            </div>
       
                </div>
</div>

${engineers
.map(quals => {
    return addEngineer(quals)
    }).join('')}
    ${interns
        .map(quals => {
            return addIntern(quals)
            }).join('')}

    </main>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</html>`
};



function addEngineer(engineer) {
    return `<div class="card info-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getRole()}</h2>
        <h4 class="card-text">${engineer.getName()}</h4>
    </div>
    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID:${engineer.getRole()}</li>
        <li class="list-group-item">Email: <a href="mail">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>`
}

function addIntern(intern) {
    return `<div class="card info-card">
    <div class="card-header">
    <h2 class="card-title">${intern.getRole()}</h2>
    <h4 class="card-text">${intern.getName()}</h4>
</div>
<div class="card-body">
<ul class="list-group">
    <li class="list-group-item">ID: ${intern.getId()} </li>
    <li class="list-group-item">Email: <a href="mail">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
</ul>
</div>
</div>`
}


module.exports = generateInfo;

