const fs = require('fs');
const inquirer = require('inquirer');
const employeePage = require('./source/generateHTML');
const Manager = require('./employeejs/manager');
const Engineer = require('./employeejs/enginerr');
const Intern = require('./employeejs/intern');

function getEQs(questionKey) {
  const questions = {
    manager: [
      {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'name'
      },
      {
        type: 'input',
        message: `What is the Managers's ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber'
      }
    ],
    engineer: [
      {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'name'
      },
      {
        type: 'input',
        message: `What is the Engineer's ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'github'
      }
    ],
    intern: [
      {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'name'
      },
      {
        type: 'input',
        message: `What is the Intern's ID?`,
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Please provide their school\'s name.',
        name: 'school'
      }
    ]
  }

  return questions[questionKey];
}

async function promptQuestions(questionType) {
  const questions = getEQs(questionType);
  let selection;
  
  const contPrompt = {
    type: 'list',
    message: 'Which type of employee would you like to add?',
    name: 'next',
    choices: ['Engineer', 'Intern', 'Team Complete!']
  }
  questions.push(contPrompt);
  
  const answers = await inquirer.prompt(questions);
  
  if(answers.next === 'Engineer') {
    selection = answers.next.toLowerCase();
    delete answers.next;
    
    return [answers, selection];
  }
  else if(answers.next === 'Intern') {
    selection = answers.next.toLowerCase();
    delete answers.next;
    
    return [answers, selection];
  }
  else {
    delete answers.next;
    selection = 'None';
    
    return [answers, selection];
  }
}

function createEmployee(data) {
  if(data.github) {
    const { name, id, email, github } = data;

    return new Engineer(name, id, email, github);
  }
  else if(data.school) {
    // 
    const { name, id, email, school } = data;

    return new Intern(name, id, email, school);
  }
  else {
    const { name, id, email, officeNumber } = data;

    return new Manager(name, id, email, officeNumber);
  }
}

async function buildRoster() {
  const roster = [];
  let questionType = 'manager';

  while(questionType !== 'None') {
    const [ employee, qType ] = await promptQuestions(questionType);
    roster.push(createEmployee(employee));
    questionType = qType;
  }

  return roster;
}

function writeToFile(fileName, employeeData) {
  let path = './employee_pages';
  
  if(!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  path += `/${ fileName }`;
  fs.writeFile(path, employeePage(employeeData), (err) =>
    err ? console.error(err) : console.log('Generated Employee Page.')
  )
}

async function init() {
  const roster = await buildRoster();
  const managerName = roster[0].getName().toLowerCase();
  const fileName = `${ managerName }s-roster.html`
  
  writeToFile(fileName, roster);
  // 
}

init();
