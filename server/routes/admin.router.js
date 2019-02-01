const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/admin',  (req, res) => {
  console.log('In the admin route', req.body);
    let adminStaff = [];
    pool.connect(function(error, connection, done) {
      if (error) {
        console.log('adminRouteError', error);
        res.sendStatus(400);
      } //end if
      else {
        console.log('adminDB connection ready');
        let resultSet = connection.query('SELECT * FROM person');
        resultSet.on('row', function(row) {
          adminStaff.push(row);
        }); //row end
        resultSet.on('end', function() {

          done();
          res.send(adminStaff);
        }); // resultSet end
      } //end else
    }); //pool.connect end
  }); //router.GET end

module.exports = router;
