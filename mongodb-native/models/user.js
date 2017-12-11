var {mongoose} = require('../db/mongoose');

var validator = require('validator');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  name:  {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  email:  {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valide email . '
    }
  },
  password:  {
    type: String,
    required: true,
    minlength: 4
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, '123abc').toString();
  user.tokens.push({access, token});
  return user.save().then(() => {
    return token;
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {
  User
};
