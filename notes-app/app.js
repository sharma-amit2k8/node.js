// import fs from 'fs'
// import('./utils.js')
import {addNotes, removeNote, loadNotes, readNote} from './notes.js'
import validator from 'validator'
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { type } from 'os';

//add a note
yargs(hideBin(process.argv)).command({
    command: 'add',
    describe: 'add a note',
    builder : { 
        title : {
            describe : 'notes title',
            demandOption: true,
            type : 'string',
        },
        body :{
            describe : 'notes body added',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        addNotes(argv.title,argv.body);
        // console.log(chalk.blue('Adding a note'), argv.title , argv.body)
    }
}).parse()

//remove a notes
const y = yargs(hideBin(process.argv))
y.command({
    command: 'remove',
    describe: 'remove a note',
    builder : {
        title :{
            describe: ' title to be removed',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        removeNote(argv.title);
        // console.log('Notes Listed')
    }
})
y.parse()

//List down all the notes
y.command({
    command : 'list',
    describe : 'list down all the notes',
    handler(){
        const notes = loadNotes()
        console.log(chalk.red('Your notes...'));
        if(notes.length > 0) {
            notes.forEach(note => {
                debugger
            console.log(chalk.blue(note.title))
            
            })
        }
        else {
                console.log(chalk.redBright('No notes to display'))
            }
        }
}).parse()

//read notes
y.command ( {
    command : 'read',
    describe : 'reading a note',
    builder : {
        title : {
            describe : 'title of the note to read',
            demandOption : true,
            type: 'string',
        }
    },
    handler(argv){
        readNote(argv.title)
    }
}).parse()
//arrow function
// const square = (x) => x *x;
// console.log(square(12))
// console.log(yargs(hideBin(process.argv)).argv)
// console.log(process.argv)

// console.log(validator.isEmail('abc@gmail.com'));

// fs.writeFileSync('life.txt','aal izz wellllllll !!!');
// fs.appendFileSync('life.txt','appended Data')

// const notes = getNotes();
// // console.log(notes)

// console.log(chalk.red('Love'))
// console.log(chalk.bold.blue('Love'))
// console.log(chalk.red.bold('Love'));
// console.log(chalk.bold(chalk.red('Love')));
// console.log(chalk.bold.bgWhite.red('Love'));


// console.log(chalk.bold('BOLD ONLY'));
// console.log(chalk.red('RED ONLY'));
// console.log(chalk.bold.red('BOTH'));
