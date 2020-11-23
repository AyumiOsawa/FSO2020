const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
console.log('argv; ', process.argv)

// variables will be added to process.argv(array) when I run the file with
// additional values like 'node mongo.js some_password';
const password = process.argv[2];

// when a url contains the collection name (note_app, in this case) which is not
// found in the database, it will automatically creates a new collection.
const url =
  `mongodb+srv://fullstack:${password}@cluster0.xwxiz.mongodb.net/note_app?retryWrites=true&w=majority`;

// connect to the database with the url
mongoose.connect(
  url,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
  }
)
.then(() => {
  console.log('App successfully connected to the database!');
})
.catch(error => {
  console.log('error: ', error);
})

// defining a schema: data structure in this collection
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});
// create a model with the schema
const Note = mongoose.model('Note', noteSchema);

// create a new object using the constructor function (model)
// const note1 = new Note({
//   content: 'CSS is Easy',
//   date: new Date(),
//   important: false,
// });
// const note2 = new Note({
//   content: 'Whatever comes my way',
//   date: new Date(),
//   important: true,
// });
// const note3 = new Note({
//   content: 'Everything will be alright',
//   date: new Date(),
//   important: true,
// });
// const note4 = new Note({
//   content: 'What\'s happening?',
//   date: new Date(),
//   important: false,
// });
// const note5 = new Note({
//   content: 'Keep coding!',
//   date: new Date(),
//   important: true,
// });

// // Note model has the find() method. Parameters should be sspecified in the {}
// // as arguments. No parameters are currently given, and the returned results
// // contains all the notes stored in the notes collection.
// Note.find({}).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// });

// this is the syntax to find the note with important: true
Note.find({ important: true }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
});



// // save the created object to the database
// note5.save().then(result => {
//   console.log(`note saved!`);
//   // if the connection to the database is not closed, the program will keep
//   // running.
//   mongoose.connection.close();
// });
