const chalk = require('chalk');
const log =console.log;
const notes = require('./notes.js');
const yargs = require('yargs');

//log('jds');
yargs.version('1.1.0');
 
yargs.command({
    command: 'add',
    describe: 'add two numbers',
    builder: {
        title:{
            describe: "title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addnotes(argv.title,argv.body)
    }
});

yargs.command({
    command: "remove",
    describe: "remove a number",
    builder:{
        title:{
            describe:"remove title",
            type: "string"
        }
    },
    handler(argv)
    {
        notes.removenotes(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'shows list',
    handler (argv){
        notes.listnotes();
    }
})

yargs.command({
    command:'read',
    describe:'reads the note',
    builder:{
        title:{
            describe:'gets title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readnotes(argv.title);
    }
})
yargs.parse();

