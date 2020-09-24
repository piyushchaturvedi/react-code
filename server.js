const express = require("express");
const next = require("next");
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 4000;

app
  .prepare()
  .then(async () => {
    const server = express();
    // ********************************************
    //         Start data bodyParser  
    // ********************************************
    server.use(bodyParser.json());
    // ********************************************
    //         End data bodyParser 
    // ********************************************
    // ********************************************
    //           Start Database connections 
    // ********************************************
    const db = dbPassword = 'mongodb://localhost:27017/crud';
      mongoose
      .connect(
        db, {
          useNewUrlParser: true
        }
      ).then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));

    // ********************************************
    //           End Database connections 
    // ********************************************
    // ********************************************
    //           Start API routing 
    // ********************************************
    server.use('/api/', require('./api/api'));
    // ********************************************
    //           End API routing
    // ********************************************
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.all('/edit/:id', (req, res) => {
      const params = {
        id: req.params.id
      };
      return app.render(req, res, '/edit', params);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
