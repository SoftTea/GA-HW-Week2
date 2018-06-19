// Datatypes
// Refresher

// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
// Booleans true / false

// A user's email address. 
// string `this is a string`, 'so is this', "and this as well"

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// An Object {
//     hull: 'type of hull or any data type',
//     laserBlasters(){
//         we could fire our blasters
//     }
// }

// A list of student names from our class.
// Array, such as['Jill', 'Jane', 'Bill', 'etc']

// A list of student names from our class, each with a location.
// Array with nested objects;
// [{
//     name: 'Jill',
//     location: 'austin'
// }, {
//     name: 'Bill',
//     location: 'Austin'
// }]

// A list of student names from our class, each with a location and each with a list of favorite tv shows.An Array with nested object which also hold an array within the objects.

// [{
//     name: 'Jill',
//     location: 'austin',
//     favTv: ['Whatever this is', 'Another show']
// }, {
//     name: 'Bill',
//     location: 'Austin',
//     favTv: ['tvtvtv']
// }]

//Take it Easy

const rainbow = ['red', `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`];

rainbow[4];

const timothy = {
    favoriteFood: `Thai`,
    hobby: `Coding`,
    city: `Austin`,
    favDataType: `Arrays`
}
timothy.hobby;

// Crazy Object!

const crazyObject = {
    taco: [{
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
        },
        {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
        },
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [{
                name: "Jeff",
                occupation: "manager"
            },
            {
                name: "funkhauser",
                occupation: "tv dude"
            },
            {
                name: "susie",
                occupation: "jeffs wife",
                favourtieHobby: "Swearing at Larry and Jeff"
            },
        ]
    }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);