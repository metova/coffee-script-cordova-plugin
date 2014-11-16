#!/usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');

var coffee_path = 'coffee/'

if( !fs.existsSync(coffee_path)) {
    fs.mkdirSync(coffee_path)
}

exec("coffee --compile --output www/js/ " + coffee_path)
