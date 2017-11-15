var getUser = (id, callback) => {

  var user = {
    id: id,
    name: 'Norhan'
  };
  console.log('inside getUser function');
  setTimeout(()=>{
    callback(user);
  }, 2000);

};

console.log('starting');

getUser(45, (user)=>{
  console.log(user);
});
