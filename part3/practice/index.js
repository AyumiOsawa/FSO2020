// ######################################
// # setting up a servre using built-in web servere module (http) to serve JSON.
// ######################################
// # use Node's built-in web server module
// const http = require('http');
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];
// # To send the notes, content header must specify the data type as
// # application/json.
// # JSON.stringify makes a JS object/value into JSON format.
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' });
//   response.end(JSON.stringify(notes));
// })
//
// # the event handler(call abck func) is called EVERYTIME an HTTP request is made
// # to the server's address (localhost:3001).
// # response.whiteHead specifies the response header.
// # response.end sets the content of the site.
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Heya');
// })
//
// # bind the http serbver assigned to port 3001 -> listen to HTTP requests sent
// # to this port.
// const PORT = 3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);
//
//
// ######################################
// # setting up a server using express
// ######################################
//
// # this app(, which is express(),) is a FUNCTION that creates an express app.
const express = require('express');
const app = express();

// use the express json-parser
app.use(express.json());

// # these event handlers are called every time when GET request is made to '/'
// # and to '/api/notes'.
// # api.get() method takes 2 params: request and response.
// # request specifies the info about HTTP request to send. Express takes care of
// # content (automatically set it as 'text/html' or 'appliction/json').
// # response specifies how the request should be responded to. (by default,
// # status code of the response is 200, ok.)
app.get('/', (request, response) => {
  response.send('<h1>Heya</h1>');
})

// # express automatically convert JS objects/values into json
app.get('/api/notes', (request, response) => {
  response.json(notes);
})

// # parameter is shown with : (value is some string).
// # req object represents the HTTP request nad properties for the request query
// # string.
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id);

// # when the id is not found, return code 404 instead of undefined and code 200.
// # res.status() sets the HTTP status for the response.
// # res.end() ends the response process. If we need to respond with data, use
// # other methods like res.send() or res.json().
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

// # post method. send all info of the new object inside of the request body in
// # json format.
// # without json-parser, the body property of the request object would be
// # undefined. json-parser functions so that:
// # 1) it takes a JSON object from a POST request,
// # 2) transforms it into a JS object,
// # 3) and then attaches it to the body property of the request object before
// # route handler (the callback)is called.
app.post('/api/notes', (request, response) => {
  const body = request.body;

  if(!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateID(),
  }

  notes = notes.concat(note);

  response.json(note);
})

const generateID = () => {
  const maxId = notes.length > 0
  ? Math.max(...notes.map(note => note.id))
  : 0
  return maxId + 1;
}









const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
