// ============ Various Helper Libraries ============ 
const path = require('path');
// ==================================================



// ============ Express ============ 
const express = require('express');
const app = express();
// =================================



// ============ Body Parser ============ 
// Will require: express/app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// =====================================



// ============ View Engine ============ 
// Will require: express/app
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// =====================================



// ============ Session ============ 
// Will require: express/app
// const session = require('express-session');
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 }
// }))
// =================================



// ============ Flash ============ 
// Will require: express/app, express-session
// const flash = require('express-flash');
// app.use(flash());
// ===============================


// Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/notes_db");

const NotesSchema = new mongoose.Schema({
  noteContent: {
    type: String,
    required: [true, 'Cannot be empty'],
    minlength: [4, 'Length must be at least 4 characaters long.']
  }
},{timestamps: true})

mongoose.model('Note', NotesSchema);
const Note = mongoose.model('Note');




// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "notes-app/dist/notes-app")));
// =======================================

app.get('/notes', function (req, res) {

  Note.find({}, function (err, products) {
    console.log('products :', products);
    res.json(products);
  });

})



app.post('/notes', function (req, res) {
  noteInstance = new Note();
	noteInstance.noteContent = req.body.noteContent;
	console.log('req.body', req.body)
  noteInstance.save(function (err) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(noteInstance);
    }
  })
})

// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================

