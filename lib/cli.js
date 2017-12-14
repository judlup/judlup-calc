"use strict";

const chalk = require('chalk');

const program = require('commander');

program
  .version('0.1.0')

//node index.js add 1 2 -s hola
program
  .command('add [first_value] [second_value]')
  .alias('+')
  .usage('<keywords> <keywords2>')
  .description('run setup commands for all envs')
  //Option pass -X args
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  //Action pass command args
  .action(function(first_value,second_value, options){    
    var mode = options.setup_mode;
    console.log(chalk.hex('#444444').bold("+**********+"));    
    console.log(chalk.hex('#444444').bold('|'),chalk.yellow("result")	,chalk.red(parseInt(first_value)+parseInt(second_value)),chalk.hex('#444444').bold('|'));
    console.log(chalk.hex('#444444').bold("+**********+"));        
  });

program.parse(process.argv);