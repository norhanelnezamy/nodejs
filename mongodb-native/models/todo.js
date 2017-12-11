var {mongoose} = require('../db/mongoose');

var Todo = mongoose.model('Todo', {
  title:  {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  content:  {
    type: String,
    required: true,
    trim: true
  },
  completed:  {
    type: Boolean,
    default: false
  }

});

module.exports = {
  Todo
};
