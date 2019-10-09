require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Tasks = require("../models/Tasks");
const bcryptSalt = 10;
const { DBURL } = process.env;
console.log(DBURL);
mongoose
  .connect(`${DBURL}`, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const users = [
  {
    username: "juan",
    password: "juan",
    email: "juan@juan.com",
    googleID: "",
    facebookID: "",
    validationCode: "",
    // tasksId: { type : Schema.Types.ObjectId, ref: 'Tasks' },
    tasks: [
      {
        task: "Tocar la guitarra",
        time: 14
      },
      {
        task: "Salir a pasear",
        time: 8
      },
      {
        task: "Jugar al billar en el club",
        time: 4
      }
    ]
  },
  {
    username: "marta",
    password: "marta",
    email: "marta@marta.com",
    googleID: "",
    facebookID: "",
    validationCode: "",
    // tasksId: { type : Schema.Types.ObjectId, ref: 'Tasks' },
    tasks: [
      {
        task: "Bailar flamenco",
        time: 8
      },
      {
        task: "Leer libros",
        time: 5
      },
      {
        task: "Meditar antes de dormir",
        time: 2
      }
    ]
  },
];

User.deleteMany()
  .then(() => {
    return User.create(users).then(usersCreated => {
      console.log(
        `${usersCreated.length} users created with the following id:`
      );
      console.log(usersCreated.map(u => u._id));
    });
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
