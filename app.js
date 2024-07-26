// checking the server
// console.log('hello');

import express from 'express';

const app = express();

const PORT = 8000;

let currDB = [
  {
    id: 1,
    fName: 'Shankar',
    lName: 'Pandey',
  },
  {
    id: 2,
    fName: 'Software',
    lName: 'Developer',
  },
];

app.get('/', (req, res) => {
  //   console.log('get server');
  console.log(req.query);
  currDB.push(req.query);
  res.json({
    message: 'hello',
    users: currDB,
  });
});
app.post('/', (req, res) => {
  // console.log('get server');
  res.json({
    message: 'hello from post',
  });
});
app.put('/', (req, res) => {
  // console.log('get server');
  res.json({
    message: 'hello from put',
  });
});
app.delete('/', (req, res) => {
  // console.log('get server');
  res.json({
    message: 'hello from delete',
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is listening at http:localhost:${PORT}`);
});
