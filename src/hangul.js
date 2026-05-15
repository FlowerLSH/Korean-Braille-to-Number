const INITIALS = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const VOWELS = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];

const FINALS = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const FINAL_COMPONENTS = {
  "": [],
  "ㄱ": ["ㄱ"],
  "ㄲ": ["ㄱ", "ㄱ"],
  "ㄳ": ["ㄱ", "ㅅ"],
  "ㄴ": ["ㄴ"],
  "ㄵ": ["ㄴ", "ㅈ"],
  "ㄶ": ["ㄴ", "ㅎ"],
  "ㄷ": ["ㄷ"],
  "ㄹ": ["ㄹ"],
  "ㄺ": ["ㄹ", "ㄱ"],
  "ㄻ": ["ㄹ", "ㅁ"],
  "ㄼ": ["ㄹ", "ㅂ"],
  "ㄽ": ["ㄹ", "ㅅ"],
  "ㄾ": ["ㄹ", "ㅌ"],
  "ㄿ": ["ㄹ", "ㅍ"],
  "ㅀ": ["ㄹ", "ㅎ"],
  "ㅁ": ["ㅁ"],
  "ㅂ": ["ㅂ"],
  "ㅄ": ["ㅂ", "ㅅ"],
  "ㅅ": ["ㅅ"],
  "ㅆ": ["ㅅ", "ㅅ"],
  "ㅇ": ["ㅇ"],
  "ㅈ": ["ㅈ"],
  "ㅊ": ["ㅊ"],
  "ㅋ": ["ㅋ"],
  "ㅌ": ["ㅌ"],
  "ㅍ": ["ㅍ"],
  "ㅎ": ["ㅎ"],
};

const KOREAN_ABBREVIATIONS = [
  "그리하여",
  "그러므로",
  "그러면",
  "그런데",
  "그러나",
  "그리고",
  "그래서",
];

const A_VOWEL_SHORTFORM_BY_INITIAL = {
  "ㄱ": "가",
  "ㄴ": "나",
  "ㄷ": "다",
  "ㄹ": null,
  "ㅁ": "마",
  "ㅂ": "바",
  "ㅅ": "사",
  "ㅇ": null,
  "ㅈ": "자",
  "ㅊ": null,
  "ㅋ": "카",
  "ㅌ": "타",
  "ㅍ": "파",
  "ㅎ": "하",
};

const TENSE_INITIAL_TO_BASE_INITIAL = {
  "ㄲ": "ㄱ",
  "ㄸ": "ㄷ",
  "ㅃ": "ㅂ",
  "ㅆ": "ㅅ",
  "ㅉ": "ㅈ",
};

const VOWEL_ATTACHMENT_EXCEPTION_SHORTFORMS = new Set([
  "나",
  "다",
  "마",
  "바",
  "자",
  "카",
  "타",
  "파",
  "하",
]);

const VOWEL_FINAL_SHORTFORMS = [
  { value: "억", vowel: "ㅓ", final: "ㄱ" },
  { value: "언", vowel: "ㅓ", final: "ㄴ" },
  { value: "얼", vowel: "ㅓ", final: "ㄹ" },
  { value: "연", vowel: "ㅕ", final: "ㄴ" },
  { value: "열", vowel: "ㅕ", final: "ㄹ" },
  { value: "영", vowel: "ㅕ", final: "ㅇ" },
  { value: "옥", vowel: "ㅗ", final: "ㄱ" },
  { value: "온", vowel: "ㅗ", final: "ㄴ" },
  { value: "옹", vowel: "ㅗ", final: "ㅇ" },
  { value: "운", vowel: "ㅜ", final: "ㄴ" },
  { value: "울", vowel: "ㅜ", final: "ㄹ" },
  { value: "은", vowel: "ㅡ", final: "ㄴ" },
  { value: "을", vowel: "ㅡ", final: "ㄹ" },
  { value: "인", vowel: "ㅣ", final: "ㄴ" },
];

const SEONG_JEONG_CHEONG_INITIALS = new Set(["ㅅ", "ㅆ", "ㅈ", "ㅉ", "ㅊ"]);

const KOREAN_SHORTFORMS = [
  ...Object.values(A_VOWEL_SHORTFORM_BY_INITIAL).filter(Boolean),
  ...VOWEL_FINAL_SHORTFORMS.map((shortform) => shortform.value),
  "것",
];

const PUNCTUATION_NAMES = {
  ".": "마침표",
  "?": "물음표",
  "!": "느낌표",
  ",": "쉼표",
  "·": "가운뎃점",
  ":": "쌍점",
  "/": "빗금",
  "...": "줄임표",
  "…": "줄임표",
  "……": "줄임표",
  '"': "큰따옴표",
  "'": "작은따옴표",
  "“": "여는 큰따옴표",
  "”": "닫는 큰따옴표",
  "‘": "여는 작은따옴표",
  "’": "닫는 작은따옴표",
  "(": "여는 소괄호",
  ")": "닫는 소괄호",
  "{": "여는 중괄호",
  "}": "닫는 중괄호",
  "[": "여는 대괄호",
  "]": "닫는 대괄호",
  "『": "여는 겹낫표",
  "』": "닫는 겹낫표",
  "「": "여는 홑낫표",
  "」": "닫는 홑낫표",
  "《": "여는 겹화살괄호",
  "》": "닫는 겹화살괄호",
  "〈": "여는 홑화살괄호",
  "〉": "닫는 홑화살괄호",
  "―": "줄표",
  "-": "붙임표",
  "--": "줄표",
  "~": "물결표",
  "∼": "물결표",
};

const PUNCTUATION_TOKENS = Object.keys(PUNCTUATION_NAMES).sort(
  (left, right) => right.length - left.length,
);

const NUMBER_INTERNAL_SEPARATORS = new Set([".", ",", "-", ":", "/", "~", "∼", "·"]);

const BRAILLE_ASCII_TO_DOTS = {
  "!": "2346",
  '"': "5",
  "#": "3456",
  $: "1246",
  "%": "146",
  "&": "12346",
  "'": "3",
  "(": "12356",
  ")": "23456",
  "*": "16",
  "+": "346",
  ",": "6",
  "-": "36",
  ".": "46",
  "/": "34",
  "0": "356",
  "1": "2",
  "2": "23",
  "3": "25",
  "4": "256",
  "5": "26",
  "6": "235",
  "7": "2356",
  "8": "236",
  "9": "35",
  ":": "156",
  ";": "56",
  "<": "126",
  "=": "123456",
  ">": "345",
  "?": "1456",
  "@": "4",
  A: "1",
  B: "12",
  C: "14",
  D: "145",
  E: "15",
  F: "124",
  G: "1245",
  H: "125",
  I: "24",
  J: "245",
  K: "13",
  L: "123",
  M: "134",
  N: "1345",
  O: "135",
  P: "1234",
  Q: "12345",
  R: "1235",
  S: "234",
  T: "2345",
  U: "136",
  V: "1236",
  W: "2456",
  X: "1346",
  Y: "13456",
  Z: "1356",
  "[": "246",
  "\\": "1256",
  "]": "12456",
  "^": "45",
  _: "456",
  "{": "246",
  "|": "1256",
  "}": "12456",
};

const INITIAL_ASCII = {
  "ㄱ": "@",
  "ㄲ": ",@",
  "ㄴ": "c",
  "ㄷ": "i",
  "ㄸ": ",i",
  "ㄹ": '"',
  "ㅁ": "e",
  "ㅂ": "^",
  "ㅃ": ",^",
  "ㅅ": ",",
  "ㅆ": ",,",
  "ㅇ": "",
  "ㅈ": ".",
  "ㅉ": ",.",
  "ㅊ": ";",
  "ㅋ": "f",
  "ㅌ": "h",
  "ㅍ": "d",
  "ㅎ": "j",
};

const VOWEL_ASCII = {
  "ㅏ": "<",
  "ㅐ": "r",
  "ㅑ": ">",
  "ㅒ": ">r",
  "ㅓ": "s",
  "ㅔ": "n",
  "ㅕ": ":",
  "ㅖ": "/",
  "ㅗ": "u",
  "ㅘ": "v",
  "ㅙ": "vr",
  "ㅚ": "y",
  "ㅛ": "+",
  "ㅜ": "m",
  "ㅝ": "p",
  "ㅞ": "pr",
  "ㅟ": "mr",
  "ㅠ": "%",
  "ㅡ": "[",
  "ㅢ": "w",
  "ㅣ": "o",
};

const FINAL_ASCII = {
  "ㄱ": "a",
  "ㄲ": "aa",
  "ㄳ": "a'",
  "ㄴ": "3",
  "ㄵ": "3k",
  "ㄶ": "30",
  "ㄷ": "9",
  "ㄹ": "1",
  "ㄺ": "1a",
  "ㄻ": "15",
  "ㄼ": "1b",
  "ㄽ": "1'",
  "ㄾ": "18",
  "ㄿ": "14",
  "ㅀ": "10",
  "ㅁ": "5",
  "ㅂ": "b",
  "ㅄ": "b'",
  "ㅅ": "'",
  "ㅆ": "/",
  "ㅇ": "7",
  "ㅈ": "k",
  "ㅊ": "2",
  "ㅋ": "6",
  "ㅌ": "8",
  "ㅍ": "4",
  "ㅎ": "0",
};

const SHORTFORM_ASCII = {
  가: "$",
  나: "c",
  다: "I",
  마: "e",
  바: "^",
  사: "l",
  자: ".",
  카: "f",
  타: "h",
  파: "d",
  하: "j",
  억: "?",
  언: ")",
  얼: "T",
  연: "*",
  열: "|",
  영: "}",
  옥: "x",
  온: "(",
  옹: "=",
  운: "G",
  울: "&",
  은: "z",
  을: "!",
  인: "Q",
  것: "_s",
};

const ABBREVIATION_ASCII = {
  그래서: "as",
  그러나: "ac",
  그러면: "a3",
  그러므로: "a5",
  그런데: "an",
  그리고: "au",
  그리하여: "a:",
};

const PUNCTUATION_ASCII = {
  ".": "4",
  "?": "8",
  "!": "6",
  ",": '"',
  "·": '"2',
  ":": '"1',
  "/": "_/",
  "...": "444",
  "…": ",,,",
  "……": ",,,",
  '"': "8",
  "'": ",8",
  "“": "8",
  "”": "0",
  "‘": ",8",
  "’": "0'",
  "(": "8'",
  ")": ",0",
  "{": "81",
  "}": '"0',
  "[": "82",
  "]": ";0",
  "『": ";8",
  "』": "02",
  "「": '"8',
  "」": "01",
  "《": ";7",
  "》": "72",
  "〈": '"7',
  "〉": "71",
  "―": "--",
  "-": "-",
  "--": "--",
  "~": "@9",
  "∼": "@9",
};

const DIGIT_TO_ASCII = {
  "1": "a",
  "2": "b",
  "3": "c",
  "4": "d",
  "5": "e",
  "6": "f",
  "7": "g",
  "8": "h",
  "9": "i",
  "0": "j",
};

const NUMBER_SEPARATOR_ASCII = {
  ".": "4",
  ",": "1",
  "-": "-",
  ":": '"1',
  "/": "_/",
  "~": "@9",
  "∼": "@9",
  "·": '"2',
};

const NUMBER_SEPARATORS_REQUIRING_NEW_NUMBER_SIGN = new Set(["-", ":", "/", "~", "∼", "·"]);

const HANGUL_BASE = 0xac00;
const HANGUL_END = 0xd7a3;
const VOWEL_COUNT = 21;
const FINAL_COUNT = 28;
const INITIAL_BLOCK_SIZE = VOWEL_COUNT * FINAL_COUNT;

function isHangulSyllable(char) {
  if (!char) {
    return false;
  }

  const codePoint = char.codePointAt(0);
  return codePoint >= HANGUL_BASE && codePoint <= HANGUL_END;
}

function getSyllableModel(char) {
  if (!isHangulSyllable(char)) {
    return null;
  }

  const offset = char.codePointAt(0) - HANGUL_BASE;
  const initialIndex = Math.floor(offset / INITIAL_BLOCK_SIZE);
  const vowelIndex = Math.floor((offset % INITIAL_BLOCK_SIZE) / FINAL_COUNT);
  const finalIndex = offset % FINAL_COUNT;
  const final = FINALS[finalIndex];

  return {
    source: char,
    initial: INITIALS[initialIndex],
    vowel: VOWELS[vowelIndex],
    final,
    finalComponents: FINAL_COMPONENTS[final],
    initialIndex,
    vowelIndex,
    finalIndex,
  };
}

function composeHangulSyllable(initial, vowel, final = "") {
  const initialIndex = INITIALS.indexOf(initial);
  const vowelIndex = VOWELS.indexOf(vowel);
  const finalIndex = FINALS.indexOf(final);

  if (initialIndex < 0 || vowelIndex < 0 || finalIndex < 0) {
    return null;
  }

  return String.fromCodePoint(
    HANGUL_BASE + initialIndex * INITIAL_BLOCK_SIZE + vowelIndex * FINAL_COUNT + finalIndex,
  );
}

function decomposeSyllable(char) {
  const model = getSyllableModel(char);

  if (!model) {
    return null;
  }

  const parts = [
    {
      role: "initial",
      value: model.initial,
    },
    {
      role: "vowel",
      value: model.vowel,
    },
  ];

  if (model.final) {
    parts.push({
      role: "final",
      value: model.final,
    });
  }

  return {
    type: "hangul",
    source: char,
    parts,
  };
}

function hasFollowingVowelSyllable(nextChar) {
  const nextModel = getSyllableModel(nextChar);
  return Boolean(nextModel && nextModel.initial === "ㅇ");
}

function createShortformPart(source, value, rule) {
  return {
    role: "shortform",
    kind: "약자",
    source,
    value,
    rule,
  };
}

function createFinalParts(finals) {
  return finals.map((value) => ({
    role: "final",
    value,
  }));
}

function analyzeAVowelShortform(model, nextChar) {
  if (model.vowel !== "ㅏ" || model.source === "팠") {
    return null;
  }

  const baseInitial = TENSE_INITIAL_TO_BASE_INITIAL[model.initial] || model.initial;
  const value = A_VOWEL_SHORTFORM_BY_INITIAL[baseInitial];

  if (!value) {
    return null;
  }

  if (
    !model.final &&
    VOWEL_ATTACHMENT_EXCEPTION_SHORTFORMS.has(value) &&
    hasFollowingVowelSyllable(nextChar)
  ) {
    return null;
  }

  const source = composeHangulSyllable(model.initial, model.vowel);

  return {
    type: "hangul",
    source: model.source,
    parts: [
      createShortformPart(source, value, "제13항"),
      ...createFinalParts(model.final ? [model.final] : []),
    ],
  };
}

function analyzeGeotShortform(model) {
  if (
    model.vowel !== "ㅓ" ||
    model.finalComponents[0] !== "ㅅ" ||
    !["ㄱ", "ㄲ"].includes(model.initial) ||
    model.source === "껐"
  ) {
    return null;
  }

  const source = composeHangulSyllable(model.initial, model.vowel, "ㅅ");

  return {
    type: "hangul",
    source: model.source,
    parts: [
      createShortformPart(source, "것", model.initial === "ㄲ" ? "제16항" : "제15항"),
      ...createFinalParts(model.finalComponents.slice(1)),
    ],
  };
}

function analyzeVowelFinalShortform(model) {
  const shortform = VOWEL_FINAL_SHORTFORMS.find(
    (candidate) =>
      candidate.vowel === model.vowel && candidate.final === model.finalComponents[0],
  );

  if (!shortform) {
    return null;
  }

  const parts = [];

  if (model.initial !== "ㅇ") {
    parts.push({
      role: "initial",
      value: model.initial,
    });
  }

  parts.push(createShortformPart(shortform.value, shortform.value, "제15항"));
  parts.push(...createFinalParts(model.finalComponents.slice(1)));

  return {
    type: "hangul",
    source: model.source,
    parts,
  };
}

function analyzeSeongJeongCheongShortform(model) {
  if (
    !SEONG_JEONG_CHEONG_INITIALS.has(model.initial) ||
    model.vowel !== "ㅓ" ||
    model.final !== "ㅇ"
  ) {
    return null;
  }

  return {
    type: "hangul",
    source: model.source,
    parts: [
      {
        role: "initial",
        value: model.initial,
      },
      createShortformPart("영", "영", "제17항"),
    ],
  };
}

function analyzeHangulSyllable(char, nextChar) {
  const model = getSyllableModel(char);

  if (!model) {
    return null;
  }

  return (
    analyzeGeotShortform(model) ||
    analyzeAVowelShortform(model, nextChar) ||
    analyzeSeongJeongCheongShortform(model) ||
    analyzeVowelFinalShortform(model) ||
    decomposeSyllable(char)
  );
}

function decomposeText(text) {
  return Array.from(text.normalize("NFC"), (char) => {
    const syllable = decomposeSyllable(char);

    if (syllable) {
      return syllable;
    }

    return {
      type: "literal",
      source: char,
      parts: [
        {
          role: "literal",
          value: char,
        },
      ],
    };
  });
}

function matchAbbreviation(chars, index) {
  if (index > 0 && isHangulSyllable(chars[index - 1])) {
    return null;
  }

  return KOREAN_ABBREVIATIONS.find((word) => {
    const wordChars = Array.from(word);

    return wordChars.every((char, offset) => chars[index + offset] === char);
  });
}

function isAsciiLetter(char) {
  return /^[A-Za-z]$/.test(char || "");
}

function isDigit(char) {
  return /^[0-9]$/.test(char || "");
}

function isAsciiAlphaNumeric(char) {
  return /^[A-Za-z0-9]$/.test(char || "");
}

function hasAsciiLetter(text) {
  return /[A-Za-z]/.test(text);
}

function isRomanConnector(chars, index) {
  if (chars[index] !== " ") {
    return false;
  }

  return isAsciiLetter(chars[index - 1]) && isAsciiLetter(chars[index + 1]);
}

function matchRomanSequence(chars, index) {
  if (!isAsciiLetter(chars[index])) {
    return null;
  }

  let end = index;

  while (end < chars.length) {
    if (isAsciiAlphaNumeric(chars[end])) {
      end += 1;
      continue;
    }

    if (isRomanConnector(chars, end)) {
      end += 1;
      continue;
    }

    break;
  }

  const source = chars.slice(index, end).join("");

  if (!hasAsciiLetter(source)) {
    return null;
  }

  return source;
}

function matchNumberSequence(chars, index) {
  if (!isDigit(chars[index])) {
    return null;
  }

  let end = index + 1;

  while (end < chars.length) {
    if (isDigit(chars[end])) {
      end += 1;
      continue;
    }

    if (
      NUMBER_INTERNAL_SEPARATORS.has(chars[end]) &&
      isDigit(chars[end - 1]) &&
      isDigit(chars[end + 1])
    ) {
      end += 1;
      continue;
    }

    break;
  }

  return chars.slice(index, end).join("");
}

function matchPunctuation(chars, index) {
  return PUNCTUATION_TOKENS.find((token) => {
    const tokenChars = Array.from(token);

    return tokenChars.every((char, offset) => chars[index + offset] === char);
  });
}

function getCapitalizationKind(source) {
  const words = source.split(/\s+/).filter(Boolean);

  if (words.length >= 3 && words.every((word) => /^[A-Z0-9]+$/.test(word) && /[A-Z]/.test(word))) {
    return "capital_phrase";
  }

  if (words.some((word) => /^[A-Z0-9]{2,}$/.test(word) && /[A-Z]{2,}/.test(word))) {
    return "capital_word";
  }

  if (/[A-Z]/.test(source)) {
    return "capital_letter";
  }

  return "none";
}

function analyzeRoman(source) {
  const parts = [
    {
      role: "roman_start",
      kind: "로마자표",
      value: "0",
      rule: "제29항",
    },
  ];
  const capitalization = getCapitalizationKind(source);

  if (capitalization !== "none") {
    parts.push({
      role: "capitalization",
      kind: capitalization,
      value: capitalization,
      rule: "제28항 붙임",
    });
  }

  parts.push({
    role: "roman",
    value: source,
    rule: "제28항",
  });
  parts.push({
    role: "roman_end",
    kind: "로마자 종료표",
    value: "4",
    rule: "제29항",
  });

  return {
    type: "roman",
    source,
    parts,
  };
}

function analyzeNumber(source) {
  return {
    type: "number",
    source,
    parts: [
      {
        role: "number_sign",
        kind: "수표",
        value: "#",
        rule: "제40항",
      },
      {
        role: "number",
        value: source,
        rule: source.includes(".") ? "제43항/제48항" : "제40항",
      },
    ],
  };
}

function analyzePunctuation(source) {
  return {
    type: "punctuation",
    source,
    parts: [
      {
        role: "punctuation",
        kind: PUNCTUATION_NAMES[source],
        value: source,
        rule: "제49항",
      },
    ],
  };
}

function analyzeText(text) {
  const chars = Array.from(text.normalize("NFC"));
  const result = [];

  for (let index = 0; index < chars.length; index += 1) {
    const abbreviation = matchAbbreviation(chars, index);

    if (abbreviation) {
      result.push({
        type: "abbreviation",
        kind: "약어",
        source: abbreviation,
        parts: [
          {
            role: "abbreviation",
            kind: "약어",
            source: abbreviation,
            value: abbreviation,
            rule: "제18항",
          },
        ],
      });
      index += Array.from(abbreviation).length - 1;
      continue;
    }

    const roman = matchRomanSequence(chars, index);

    if (roman) {
      result.push(analyzeRoman(roman));
      index += Array.from(roman).length - 1;
      continue;
    }

    const number = matchNumberSequence(chars, index);

    if (number) {
      result.push(analyzeNumber(number));
      index += Array.from(number).length - 1;
      continue;
    }

    const punctuation = matchPunctuation(chars, index);

    if (punctuation) {
      result.push(analyzePunctuation(punctuation));
      index += Array.from(punctuation).length - 1;
      continue;
    }

    const syllable = analyzeHangulSyllable(chars[index], chars[index + 1]);

    if (syllable) {
      result.push(syllable);
      continue;
    }

    result.push({
      type: "literal",
      source: chars[index],
      parts: [
        {
          role: "literal",
          value: chars[index],
        },
      ],
    });
  }

  return result;
}

function formatAnalyzedPart(part) {
  if (part.role === "abbreviation") {
    return `[약어:${part.value}]`;
  }

  if (part.role === "shortform") {
    const label = part.source === part.value ? part.value : `${part.source}->${part.value}`;
    return `[약자:${label}]`;
  }

  if (part.role === "roman") {
    return `[로마자:${part.value}]`;
  }

  if (part.role === "number") {
    return `[숫자:${part.value}]`;
  }

  if (part.role === "punctuation") {
    return `[문장부호:${part.value}]`;
  }

  if (["roman_start", "roman_end", "capitalization", "number_sign"].includes(part.role)) {
    return "";
  }

  return part.value;
}

function analysisToDisplayText(items) {
  return items
    .flatMap((item) => item.parts.map(formatAnalyzedPart))
    .join("");
}

function analyzeToDisplayText(text) {
  return analysisToDisplayText(analyzeText(text));
}

function asciiSequenceToCells(sequence) {
  return Array.from(sequence);
}

function getTenseShortformPrefix(part) {
  const model = getSyllableModel(part.source);

  if (model && TENSE_INITIAL_TO_BASE_INITIAL[model.initial]) {
    return ",";
  }

  return "";
}

function partToBrailleAsciiCells(part) {
  if (part.role === "initial") {
    return asciiSequenceToCells(INITIAL_ASCII[part.value] || "");
  }

  if (part.role === "vowel") {
    return asciiSequenceToCells(VOWEL_ASCII[part.value] || "");
  }

  if (part.role === "final") {
    return asciiSequenceToCells(FINAL_ASCII[part.value] || "");
  }

  if (part.role === "shortform") {
    const sequence = getTenseShortformPrefix(part) + (SHORTFORM_ASCII[part.value] || "");
    return asciiSequenceToCells(sequence);
  }

  if (part.role === "abbreviation") {
    return asciiSequenceToCells(ABBREVIATION_ASCII[part.value] || "");
  }

  if (part.role === "punctuation") {
    return asciiSequenceToCells(PUNCTUATION_ASCII[part.value] || part.value);
  }

  return [];
}

function romanWordToAscii(word) {
  let result = "";

  for (let index = 0; index < word.length; index += 1) {
    const char = word[index];

    if (isDigit(char)) {
      result += "#";

      while (index < word.length && isDigit(word[index])) {
        result += DIGIT_TO_ASCII[word[index]];
        index += 1;
      }

      index -= 1;
      continue;
    }

    if (!isAsciiLetter(char)) {
      result += char;
      continue;
    }

    if (char === char.toUpperCase()) {
      let upperEnd = index;

      while (
        upperEnd < word.length &&
        isAsciiLetter(word[upperEnd]) &&
        word[upperEnd] === word[upperEnd].toUpperCase()
      ) {
        upperEnd += 1;
      }

      const upperRun = word.slice(index, upperEnd);

      if (upperRun.length >= 2) {
        result += `,,${upperRun.toLowerCase()}`;
        index = upperEnd - 1;
        continue;
      }

      result += `,${char.toLowerCase()}`;
      continue;
    }

    result += char;
  }

  return result;
}

function romanToBrailleAsciiCells(source) {
  const words = source.split(" ");
  const nonEmptyWords = words.filter(Boolean);
  const allCapsPhrase =
    nonEmptyWords.length >= 3 &&
    nonEmptyWords.every((word) => /^[A-Z0-9]+$/.test(word) && /[A-Z]/.test(word));
  const cells = ["0"];

  if (allCapsPhrase) {
    cells.push(",", ",", ",");
  }

  words.forEach((word, index) => {
    if (index > 0) {
      cells.push(" ");
    }

    if (!word) {
      return;
    }

    const asciiWord = allCapsPhrase ? word.toLowerCase() : romanWordToAscii(word);
    cells.push(...asciiSequenceToCells(asciiWord));
  });

  if (allCapsPhrase) {
    cells.push(",", "'");
  }

  cells.push("4");
  return cells;
}

function numberToBrailleAsciiCells(source) {
  const cells = ["#"];

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (isDigit(char)) {
      cells.push(DIGIT_TO_ASCII[char]);
      continue;
    }

    const separator = NUMBER_SEPARATOR_ASCII[char];

    if (!separator) {
      continue;
    }

    cells.push(...asciiSequenceToCells(separator));

    if (
      NUMBER_SEPARATORS_REQUIRING_NEW_NUMBER_SIGN.has(char) &&
      isDigit(source[index + 1])
    ) {
      cells.push("#");
    }
  }

  return cells;
}

function itemToBrailleAsciiCells(item) {
  if (item.type === "literal") {
    if (item.source === " " || item.source === "\t") {
      return [" "];
    }

    if (item.source === "\n" || item.source === "\r") {
      return [item.source];
    }

    return [];
  }

  if (item.type === "roman") {
    return romanToBrailleAsciiCells(item.source);
  }

  if (item.type === "number") {
    return numberToBrailleAsciiCells(item.source);
  }

  return item.parts.flatMap(partToBrailleAsciiCells);
}

function analysisToBrailleAsciiCells(items) {
  return items.flatMap(itemToBrailleAsciiCells);
}

function dotsFromBrailleAsciiCell(cell) {
  if (cell === " ") {
    return "|";
  }

  if (cell === "\n" || cell === "\r") {
    return cell;
  }

  return BRAILLE_ASCII_TO_DOTS[cell] || BRAILLE_ASCII_TO_DOTS[cell.toUpperCase()] || "?";
}

function analysisToDotNumberCells(items) {
  return analysisToBrailleAsciiCells(items).map(dotsFromBrailleAsciiCell);
}

function analysisToDotNumbers(items) {
  return analysisToDotNumberCells(items).join(" ");
}

function textToDotNumbers(text) {
  return analysisToDotNumbers(analyzeText(text));
}

function analysisToBrailleAsciiText(items) {
  return analysisToBrailleAsciiCells(items)
    .map((cell) => (cell === " " ? "`" : cell))
    .join("");
}

function textToBrailleAsciiText(text) {
  return analysisToBrailleAsciiText(analyzeText(text));
}

function decomposeToJamoText(text) {
  return decomposeText(text)
    .flatMap((item) => item.parts.map((part) => part.value))
    .join("");
}

const KoreanBraille = {
  INITIALS,
  VOWELS,
  FINALS,
  KOREAN_ABBREVIATIONS,
  KOREAN_SHORTFORMS,
  PUNCTUATION_NAMES,
  BRAILLE_ASCII_TO_DOTS,
  isHangulSyllable,
  getSyllableModel,
  composeHangulSyllable,
  decomposeSyllable,
  decomposeText,
  analyzeText,
  analysisToDisplayText,
  analyzeToDisplayText,
  analysisToBrailleAsciiCells,
  analysisToBrailleAsciiText,
  textToBrailleAsciiText,
  analysisToDotNumberCells,
  analysisToDotNumbers,
  textToDotNumbers,
  decomposeToJamoText,
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = KoreanBraille;
}

if (typeof window !== "undefined") {
  window.KoreanBraille = KoreanBraille;
}
