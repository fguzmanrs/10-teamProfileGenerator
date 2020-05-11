    const inquirer = require('inquirer');

    const Manager = require('./lib/manager');
    const Engineer = require('./lib/engineer');
    const Intern = require('./lib/intern');
    
    const {
        defineEmployee, 
        employeeQuestions, 
        managerQuestions, 
        engineerQuestions, 
        internQuestions
    } = require('./lib/inquire');
    
   
    const htmlRenderer = require('./lib/renderHTML');
    
    const employeeArray = [];
    
    function init() {
        inquirer
        .prompt(employeeQuestions.concat(managerQuestions))
        .then(({name, id, email, officeNumber}) => {
            let manager = new Manager(name, id, email, officeNumber);
            employeeArray.push(manager);
            getEmployee();
        })
    }
    
    function getEmployee() {
        inquirer
        .prompt(defineEmployee)
        .then(({userChoice}) => {
            switch (userChoice) {
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                case 'Complete':
                    htmlRenderer(employeeArray);
                    break;
            }
        })
    }
    
    function getEngineer() {
        inquirer
        .prompt(employeeQuestions.concat(engineerQuestions))
        .then(({name, id, email, githubUsername}) => {
            let engineer = new Engineer(name, id, email, githubUsername);
            employeeArray.push(engineer);
            getEmployee();
        })
    }
    
    function getIntern() {
        inquirer
        .prompt(employeeQuestions.concat(internQuestions))
        .then(({name, id, email, school}) => {
            let intern = new Intern(name, id, email. school);
            employeeArray.push(intern)
            getEmployee();
        })
    }
    
    // Methods
    init();