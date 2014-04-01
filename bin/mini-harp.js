#!/usr/bin/env node

var createMiniHarp = require("mini-harp");
var parseArgs = require('minimist')(process.argv.slice(2));

var port = parseArgs.p || parseArgs.port || 4000

console.log("Starting mini-harp on http://localhost:" + port);
// console.log(process.cwd());
// console.log(parseArgs._[0]);

var dir_name = parseArgs._.length > 0 ? parseArgs._[0] : process.cwd();

createMiniHarp(dir_name).listen(port);