#!/usr/bin/env node

const cp = require("copy-paste");

const params = process.argv;
params.splice(0, 2);
if (!params || params.length < 2) {
  console.log('Usage: pypy 3 😎');
  return;
}

const noSpace = params.includes('--no-space');
const noCopy = params.includes('--no-copy');

const generatePyramid = (size, emoji) => {
  if (size < 2) {
    console.log("Pyramid can't be smaller than 2 emojis");
    return;
  }
  if (isNaN(Number(size))){
    console.log("Size must be a number");
    return;
  }
  const result = [];
  for (let i = 1; i < size * 2; i++) {
    let n = i > size ? size * 2 - i : i;
    result.push((noSpace ? emoji : `${emoji} `).repeat(n));
  }
  console.log(result.join('\n'));
  if (!noCopy) {
    cp.copy(result.join('\n'));
  }
};

generatePyramid(...params);
