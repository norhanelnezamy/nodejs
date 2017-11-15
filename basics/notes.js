
const fs = require('fs');

try {
  var stringNotes = fs.readFileSync('notes.json');
  var jsonNotes = JSON.parse(stringNotes);
} catch (e) {
  console.log('cant get notes. please, start with add note.');
}

listNotes = () => {
  console.log('Notes: ', jsonNotes);
};

addNote = (title, body) => {
  var res = getJsonBytitle(title);
  if (res === 0) {
    jsonNotes.push({title, body});
    saveNotes(jsonNotes);
    console.log('added new note');
  }else {
    console.log('sorry, duplicated title :(');
  }
};

readNote = (title) => {
  var res = getJsonBytitle(title);
  var log = res ? res : 'sorry, title not found :(';
  console.log(log);
};

removeNote = (title) => {
  var notesLength = jsonNotes.length;
  var jsonNotesFilter = jsonNotes.filter((note) => note.title !== title);
  saveNotes(jsonNotesFilter);
  var log = (jsonNotesFilter.length === notesLength) ? 'sorry, title not found.' : 'Removed note';
  console.log(log);
};

getJsonBytitle = (title) => {
  var jsonNotesFilter = jsonNotes.filter((note) => note.title == title);
  if (jsonNotesFilter.length !== 0) {
    return jsonNotesFilter[0];
  }else {
    return 0;
  }
}

saveNotes = (json) => {
  fs.writeFileSync('notes.json', JSON.stringify(json));
}

module.exports = {
  listNotes,
  addNote,
  readNote,
  removeNote,
  getJsonBytitle,
  saveNotes,
};
