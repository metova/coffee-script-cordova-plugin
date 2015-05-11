#!/usr/bin/env node

var execSync = require('child_process').execSync;
var fs = require('fs');

var coffee_path = 'coffee/'

if( !fs.existsSync(coffee_path)) {
    fs.mkdirSync(coffee_path)
}

execSync("coffee --compile --output www/js/ " + coffee_path)
