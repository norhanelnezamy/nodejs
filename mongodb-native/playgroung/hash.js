var {SHA256} = require('crypto-js');
var jwt = require('jsonwebtoken');


var cypher = "cypher text";
console.log(`Cyphered: ${cypher}`);

var hash = SHA256(cypher).toString();
console.log(`Hashed: ${hash}`);

var encode = jwt.sign(cypher, '123adc');
console.log(`JWT encode: ${encode}`);

var decode = jwt.verify(encode, '123adc');
console.log(`JWT decode: ${decode}`);
