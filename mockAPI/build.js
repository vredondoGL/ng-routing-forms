const fs = require('fs');
const schemas = require('./schemas');

const json = JSON.stringify(schemas);
const DB_PATH = `${__dirname}/api/db.json`;

function writeToJSONDB(data) {
  fs.writeFile(DB_PATH, data, error => {
    error ? console.error(`💀💀💀 ${error} 💀💀💀`) : console.log('🎉🎉🎉 SCHEMA GENERATED 🎉🎉🎉');
  });
}

writeToJSONDB(json);


