#!/usr/bin/env node

var createMiniHarp = require("../index");
var parseArgs = require('minimist')(process.argv.slice(2));

var port = parseArgs.p || parseArgs.port || 4000

console.log("Starting mini-harp on http://localhost:" + port);

createMiniHarp.listen(port);