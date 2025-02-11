#! /usr/bin/env node

const sound = require("sound-play");
const path = require("path");
const fs = require("fs");

const mainPath = path.dirname(fs.realpathSync(__filename));
sound.play(path.join(mainPath, "./eutenhoumice.mp3"));
