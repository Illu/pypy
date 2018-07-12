#!/usr/bin/env node

const params = process.argv
params.splice(0, 2);
if (!params || params.length < 2) {
    console.log('Usage: /pyramid 3 😎');
    return;
}

const generatePyramid = (size, emoji) => {
  if (size < 2) {
      console.log('Pyramid can\'t be smaller than 2 emojis');
      return;
  }
  for (let i = 1; i < (size * 2); i++) {
      let n = (i > size) ? (size * 2) - i : i
      console.log((emoji + ' ').repeat(n));
  }
}

generatePyramid(...params);
