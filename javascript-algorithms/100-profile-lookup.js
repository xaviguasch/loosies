//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// PERSONAL SOLUTION
function lookUpProfile(name, prop){
	for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name && contacts[i][prop]) {
          return contacts[i][prop];  
      } else if (contacts[i].firstName === name) {
      	return "No such property";
      } 
    } 
  	return "No such contact" 	   
}

// OFFICIAL SOLUTION
// function lookUpProfile(name, prop){
//     for (var x = 0; x < contacts.length; x++){
//         if (contacts[x].firstName === name) {
//             if (contacts[x].hasOwnProperty(prop)) {
//                 return contacts[x][prop];
//             } else {
//                 return "No such property";
//             }
//         }
//     }
//     return "No such contact";
  	   
// }


// Change these values to test your function
var result = lookUpProfile("Sherlock", "likes");
console.log(result);


