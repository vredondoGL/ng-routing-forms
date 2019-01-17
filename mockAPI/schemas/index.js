const jsf = require('json-schema-faker');
const Chance = require('chance');

jsf.extend('faker', () => require('faker'));
jsf.extend('chance', () => new Chance());

const users = require('./users');

module.exports = {
  ...jsf(users),
};
