const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//Define the questions that will be asked to the user:
const questions = [
    {
      type: 'input',
      name: 'managerName',
      message: "What's the manager's name?"
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What's the manager's ID?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What's the office's number?"

    },
    {
        
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: "Would you like to add members to this manager's team?",
    default: false
    
    },
    {
        
    }

    

    // ... Add additional questions for email, office number, etc.
  ];
  

function startMenu() {
    function
    console.log('Build Your team');
    inquirer.prompt
}