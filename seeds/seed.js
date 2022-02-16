const mongoose = require('mongoose');

const Celebritie = require('../models/Celebrity.model');

// ℹ️ Connects to the database
require("../db");

// User.collection.drop();

const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "This tape will self-destruct"
  },
  {
    name: "Marco Santonastasi",
    occupation: "Engineer",
    catchPhrase: "Estringa"
  },
  {
    name: "Fer Sanchez",
    occupation: "Full-Stack Dev",
    catchPhrase: "Can we make it a loop?"
  },
  
];

Celebritie.create(celebrities)
  .then(celebs => {
    console.log(`Created ${celebs.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating fake celebrities in the DB: ${err}`));
