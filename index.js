var jsonfile = require('jsonfile'),
	util = require('util'),
	file = 'box_collaborations.json',
	emailListCreated = [],
	emailListAccessible = [],
	emailListCreatedUnique = [],
	emailListAccessibleUnique = [];

Array.prototype.arrayUnique = function() {
    return this.reduce(function(p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
    }, []);
};
 
jsonfile.readFile(file, function(err, obj) {
  
  for(var i=0; i < obj.entries.length; i++) {
  	if (obj.entries[i].created_by) {
  		var emailCreated = obj.entries[i].created_by.login;
  		emailListCreated.push(emailCreated);
  	}
  	
  	if (obj.entries[i].accessible_by) {
  		var emailAccessible = obj.entries[i].accessible_by.login;
  		emailListAccessible.push(emailAccessible);
  	}
  				
  }
emailListCreatedUnique = emailListCreated.arrayUnique();

 console.log("\r\n List of Created By:");

 for (var i=0; i< emailListCreatedUnique.length; i++) {
 	console.log(emailListCreatedUnique[i]);
 }

console.log("\r\n List of Accessible By:");

 for (var i=0; i< emailListAccessible.length; i++) {
 	console.log(emailListAccessible.arrayUnique()[i]);
 }

});