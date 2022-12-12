function managerTemplate(managerInfo) {
  return `
  <section>
      <div class="card">
          <div class="container">
              <h3> ${ managerInfo.getName() } <h3>
              <h4> Manager <h4>
              <p> ID : ${ managerInfo.getId() } <p>
              <p class="email">Email: <a href="mailto:${ managerInfo.getEmail() }">${ managerInfo.getEmail() }</a></p>
              <p class="office">Office Number: ${ managerInfo.getOfficeNumber() }</p>
          <div>
      <div>
  </section>
  `
}

function engineerTemplate(engineerInfo) {
  return `
  <section>
      <div class="card">
          <div class="container">
              <h3> ${ engineerInfo.getName() } <h3>
              <h4> Engineer <h4>
              <p> ID : ${ engineerInfo.getId() } <p>
              <p class="email">Email: <a href="mailto:${ engineerInfo.getEmail() }">${ engineerInfo.getEmail() }</a></p>
              <p class="office">Github: <a href="https://github.com/${ engineerInfo.getGitHub() }">${ engineerInfo.getGitHub() }</a></p>
          <div>
      <div>
  </section>
  `
}

function internTemplate(internInfo) {
  return `
  <section>
      <div class="card">
          <div class="container">
              <h3> ${ internInfo.getName() } <h3>
              <h4> Intern <h4>
              <p> ID : ${ internInfo.getId() } <p>
              <p class="email">Email: <a href="mailto:${ internInfo.getEmail() }">${ internInfo.getEmail() }</a></p>
              <p class="school">School: ${ internInfo.getSchool() } </p>
          <div>
      <div>
  </section>
  `
}

const generateHTML = function (data) {

  // array for cards 
  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      // call manager function
      if (role === 'Manager') {
          const managerCard = managerTemplate(employee);

          pageArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = engineerTemplate(employee);

          pageArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = internTemplate(employee);

          pageArray.push(internCard);
      }
      
  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title> 
      <link rel="stylesheet" href="../source/style.css"> 
  </head>
  <body>
      <header>
          <nav>
              <span class="header">THE TEAM</span>
          </nav>
      </header>
      <main>
                  ${employeeCards}
      </main>
      
  </body>
  </html>


`;
}

module.exports = managerTemplate; 
module.exports = engineerTemplate; 
module.exports = internTemplate; 
module.exports = generateTeamPage;
module.exports = generateHTML;