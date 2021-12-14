const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// 'middleware' to serve static files (font-end files: css and js)
// this instructs the server to make everything in the 'public' directory into static resources
// so that a server endpoint does not have to be specified for every single asset (front-end code such as css and js)
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
