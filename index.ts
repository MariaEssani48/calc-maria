#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

const sleep = () => {
    return new Promise((r) =>
     {setTimeout(r,2000)});
};

async function welcome(){
    let title = chalkAnimation.neon("Start your calculations"); //start heading
    await sleep();
    title.stop();
  console.log(chalk.blueBright(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`));
}

await welcome();

async function Operation_Ask(){
   const answers = await inquirer.
    prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "operator",
        message: "Which operation you want to perform? \n",
        choices: ["Addition","Subtraction","Multiplication","Division"], 
      },
      {
        type: "number",
        name: "Firstvalue",
        message: "Enter first number: "
      },
      {
        type: "number",
        name: "Secondvalue",
        message: "Enter second number: "
      }
    ]);

if(answers.operator == "Addition"){
    console.log(`${answers.Firstvalue} + ${answers.Secondvalue}`+" " +"= "+ chalk.yellow(`${answers.Firstvalue + answers.Secondvalue}`))
}
else if(answers.operator == "Subtraction"){
console.log(`${answers.Firstvalue} - ${answers.Secondvalue}`+" " +"= "+ chalk.yellow(`${answers.Firstvalue - answers.Secondvalue}`))
 
}
else if(answers.operator == "Multiplication"){
  console.log(`${answers.Firstvalue} * ${answers.Secondvalue}`+" " +"= "+ chalk.yellow(`${answers.Firstvalue *answers.Secondvalue}`))
}
else if (answers.operation == "Division"){
  console.log(`${answers.Firstvalue} / ${answers.Secondvalue}`+ " " +"= "+chalk.yellow(`${answers.Firstvalue/answers.Secondvalue}`))
 
}
};
    

async function start(){
  do{
  await  Operation_Ask();
  var re_Start = await inquirer
  .prompt([
    {
      type: "input",
      name: "restat",
      message: "Do you want to calculate more? Type yes or no"
    },
    
  ])
}
  while(re_Start.restat == "yes"||re_Start.restart == "YES");
}
start();


