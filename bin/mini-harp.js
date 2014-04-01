#!/usr/bin/env node

var createMiniHarp = require("mini-harp");
var parseArgs = require('minimist')(process.argv.slice(2));

var port = parseArgs.p || parseArgs.port || 4000

console.log("Starting mini-harp on http://localhost:" + port);
// console.log(parseArgs._);
createMiniHarp().listen(port);