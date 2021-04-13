'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('player.json');
let player = JSON.parse(rawdata);
console.log(player);