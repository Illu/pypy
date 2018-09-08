#!/usr/bin/env node

const cp = require("copy-paste");
const ArgumentParser = require("argparse").ArgumentParser;
const {version} = require('./package.json');

const parser = new ArgumentParser({
  version,
  addHelp: true,
  description: 'Generate pyramids'
});
parser.addArgument(
  'size',
  { 
    type: 'int',
    help: 'Size of the pyramid',
  })
parser.addArgument(
  'emoji',
  {
    help: 'emoji/text to be displayed inside the pyramid',
  })
parser.addArgument(
  [ '-s', '--no-space' ],
  {
    default: false,
    nargs: 0,
    help: 'Remove space between emojis',
    dest: 'noSpace',
  }
);
parser.addArgument(
  [ '-c', '--no-copy' ],
  {
    default: false,
    nargs: 0,
    help: "Disable copying the pyramid to the clipboard",
    dest: 'noCopy'
  }
);

const args = parser.parseArgs();

const generatePyramid = ({size, emoji, noSpace, noCopy}) => {
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

generatePyramid(args);
