const red = '\u001b[31m ';
const yellow = '\u001b[33m ';
const reset = '\u001b[0m ';

function error(message) {
  throw new Error(
    `${red}\nCULTUREAMP STYLE GUIDE ERROR:\n${singleLine(message)}${reset}\n`
  );
}

function warn(message) {
  console.warn(
    `${yellow}\nCULTUREAMP STYLE GUIDE WARNING:\n${singleLine(
      message
    )}${reset}\n`
  );
}

function singleLine(string) {
  return string
    .replace(/^ +/gm, ' ')
    .replace(/\n|\r/gm, '')
    .trim();
}

module.exports = {
  default: error,
  error: error,
  warn: warn,
};
