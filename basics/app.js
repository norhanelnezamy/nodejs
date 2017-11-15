
// const fs = require('fs');
// var _ = require('lodash');
var yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
      };
const bodyOptions = {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
      };

var argv = yargs.command('add', 'Add New Note. ',{
                  title: titleOptions,
                  body: bodyOptions
                })
                .command('list', 'List Notes. ')
                .command('show', 'Show Note by title. ',{
                  title: titleOptions
                })
                .command('delete', 'Delete Note by title. ',{
                  title: titleOptions
                })
                .help()
                .argv;


// console.log(argv);
var command = argv._[0]

// console.log(_.isString(true));
// console.log(_.isString("Norhan"));

// console.log('Command:', command);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
}else if (command === 'list') {
  notes.listNotes();

}else if (command === 'show') {
  notes.readNote(argv.title);

}else if (command === 'delete') {
  notes.removeNote(argv.title);

}else {
  console.log("not support this command:", command);
}
