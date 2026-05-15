#!/usr/bin/env node

const {
  analyzeText,
  analyzeToDisplayText,
  decomposeToJamoText,
  textToBrailleAsciiText,
  textToDotNumbers,
} = require("../src/hangul");

const args = process.argv.slice(2);
const jsonMode = args.includes("--json");
const plainMode = args.includes("--plain");
const analysisMode = args.includes("--analysis");
const asciiMode = args.includes("--ascii");
const helpMode = args.includes("--help") || args.includes("-h");
const optionNames = new Set(["--json", "--plain", "--analysis", "--ascii"]);
const textArgs = args.filter((arg) => !optionNames.has(arg));

function printHelp() {
  console.log(`Usage:
  npm start -- "내돈내산"
  npm start -- --analysis "내돈내산"
  npm start -- --json "내돈내산"
  npm start -- --plain "내돈내산"
  echo "내돈내산" | npm start

Options:
  --analysis  Print readable token analysis before dot-number conversion.
  --json  Print structured analysis with shortform/abbreviation roles.
  --ascii Print internal braille ASCII notation.
  --plain Print plain initial/vowel/final decomposition without shortform checks.
  -h, --help  Show this help message.`);
}

function printResult(input) {
  const text = input.replace(/\r?\n$/, "");

  if (jsonMode) {
    console.log(JSON.stringify(analyzeText(text), null, 2));
    return;
  }

  if (analysisMode) {
    console.log(analyzeToDisplayText(text));
    return;
  }

  if (asciiMode) {
    console.log(textToBrailleAsciiText(text));
    return;
  }

  if (plainMode) {
    console.log(decomposeToJamoText(text));
    return;
  }

  console.log(textToDotNumbers(text));
}

if (helpMode) {
  printHelp();
  process.exit(0);
}

if (textArgs.length > 0) {
  printResult(textArgs.join(" "));
  process.exit(0);
}

if (process.stdin.isTTY) {
  printHelp();
  process.exit(0);
}

let input = "";

process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  printResult(input);
});
