const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports= new Sequelize('codegig', 'postgres', 'Sandy#0707', {
  host: 'localhost',
  dialect: 'postgres'
});



