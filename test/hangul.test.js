const assert = require("node:assert/strict");
const test = require("node:test");

const {
  analyzeText,
  analyzeToDisplayText,
  decomposeSyllable,
  decomposeText,
  decomposeToJamoText,
  isHangulSyllable,
  textToBrailleAsciiText,
  textToDotNumbers,
} = require("../src/hangul");

test("detects precomposed Hangul syllables", () => {
  assert.equal(isHangulSyllable("가"), true);
  assert.equal(isHangulSyllable("힣"), true);
  assert.equal(isHangulSyllable("ㄱ"), false);
  assert.equal(isHangulSyllable("A"), false);
});

test("decomposes a syllable into initial, vowel, and final roles", () => {
  assert.deepEqual(decomposeSyllable("산"), {
    type: "hangul",
    source: "산",
    parts: [
      { role: "initial", value: "ㅅ" },
      { role: "vowel", value: "ㅏ" },
      { role: "final", value: "ㄴ" },
    ],
  });
});

test("omits final role when a syllable has no final consonant", () => {
  assert.deepEqual(decomposeSyllable("내"), {
    type: "hangul",
    source: "내",
    parts: [
      { role: "initial", value: "ㄴ" },
      { role: "vowel", value: "ㅐ" },
    ],
  });
});

test("decomposes text to visible compatibility jamo", () => {
  assert.equal(decomposeToJamoText("내돈내산"), "ㄴㅐㄷㅗㄴㄴㅐㅅㅏㄴ");
});

test("preserves non-Hangul characters as literals", () => {
  assert.equal(decomposeToJamoText("내돈내산 123!"), "ㄴㅐㄷㅗㄴㄴㅐㅅㅏㄴ 123!");
});

test("normalizes decomposed Hangul input before decomposition", () => {
  assert.equal(decomposeToJamoText("내"), "ㄴㅐ");
});

test("returns structured text decomposition", () => {
  assert.deepEqual(decomposeText("가!"), [
    {
      type: "hangul",
      source: "가",
      parts: [
        { role: "initial", value: "ㄱ" },
        { role: "vowel", value: "ㅏ" },
      ],
    },
    {
      type: "literal",
      source: "!",
      parts: [{ role: "literal", value: "!" }],
    },
  ]);
});

test("marks Korean braille shortforms in display output", () => {
  assert.equal(
    analyzeToDisplayText("내가 하늘에 서겠다."),
    "ㄴㅐ[약자:가] [약자:하]ㄴ[약자:을]ㅇㅔ ㅅㅓㄱㅔㅆ[약자:다][문장부호:.]",
  );
});

test("keeps plain decomposition available separately", () => {
  assert.equal(
    decomposeToJamoText("내가 하늘에 서겠다."),
    "ㄴㅐㄱㅏ ㅎㅏㄴㅡㄹㅇㅔ ㅅㅓㄱㅔㅆㄷㅏ.",
  );
});

test("marks abbreviations only when no Hangul letter is attached before them", () => {
  assert.equal(
    analyzeToDisplayText("그래서인지 오그리고 그리고서"),
    "[약어:그래서][약자:인]ㅈㅣ ㅇㅗㄱㅡㄹㅣㄱㅗ [약어:그리고]ㅅㅓ",
  );
});

test("does not use selected a-vowel shortforms before following vowel syllables", () => {
  assert.equal(
    analyzeToDisplayText("나이 다음 바위 하얀 가을"),
    "ㄴㅏㅇㅣ ㄷㅏㅇㅡㅁ ㅂㅏㅇㅟ ㅎㅏㅇㅑㄴ [약자:가][약자:을]",
  );
});

test("keeps 팠 outside the 파 shortform exception", () => {
  assert.equal(analyzeToDisplayText("팠다"), "ㅍㅏㅆ[약자:다]");
});

test("marks shortforms inside syllables and leaves remaining final components", () => {
  assert.equal(analyzeToDisplayText("강산 넋 껏"), "[약자:가]ㅇ[약자:사]ㄴ ㄴ[약자:억]ㅅ [약자:껏->것]");
});

test("marks 성, 정, 청 family with the 영 shortform", () => {
  assert.equal(
    analyzeToDisplayText("성 정 청 썽 쩡"),
    "ㅅ[약자:영] ㅈ[약자:영] ㅊ[약자:영] ㅆ[약자:영] ㅉ[약자:영]",
  );
});

test("returns structured shortform and abbreviation analysis", () => {
  assert.deepEqual(analyzeText("그리고 강"), [
    {
      type: "abbreviation",
      kind: "약어",
      source: "그리고",
      parts: [
        {
          role: "abbreviation",
          kind: "약어",
          source: "그리고",
          value: "그리고",
          rule: "제18항",
        },
      ],
    },
    {
      type: "literal",
      source: " ",
      parts: [{ role: "literal", value: " " }],
    },
    {
      type: "hangul",
      source: "강",
      parts: [
        {
          role: "shortform",
          kind: "약자",
          source: "가",
          value: "가",
          rule: "제13항",
        },
        { role: "final", value: "ㅇ" },
      ],
    },
  ]);
});

test("marks roman, number, and punctuation tokens in display output", () => {
  assert.equal(
    analyzeToDisplayText("나는 Apple 3개를 샀다!"),
    "[약자:나]ㄴ[약자:은] [로마자:Apple] [숫자:3]ㄱㅐㄹ[약자:을] [약자:사]ㅆ[약자:다][문장부호:!]",
  );
});

test("groups numeric expressions with internal separators", () => {
  assert.equal(analyzeToDisplayText("10:20 3.14 1,000"), "[숫자:10:20] [숫자:3.14] [숫자:1,000]");
});

test("returns structured roman, number, and punctuation analysis", () => {
  assert.deepEqual(analyzeText("Apple 3.14!"), [
    {
      type: "roman",
      source: "Apple",
      parts: [
        { role: "roman_start", kind: "로마자표", value: "0", rule: "제29항" },
        {
          role: "capitalization",
          kind: "capital_letter",
          value: "capital_letter",
          rule: "제28항 붙임",
        },
        { role: "roman", value: "Apple", rule: "제28항" },
        { role: "roman_end", kind: "로마자 종료표", value: "4", rule: "제29항" },
      ],
    },
    {
      type: "literal",
      source: " ",
      parts: [{ role: "literal", value: " " }],
    },
    {
      type: "number",
      source: "3.14",
      parts: [
        { role: "number_sign", kind: "수표", value: "#", rule: "제40항" },
        { role: "number", value: "3.14", rule: "제43항/제48항" },
      ],
    },
    {
      type: "punctuation",
      source: "!",
      parts: [{ role: "punctuation", kind: "느낌표", value: "!", rule: "제49항" }],
    },
  ]);
});

test("converts analyzed Korean braille cells to dot numbers", () => {
  assert.equal(textToDotNumbers("하늘이"), "245 14 2346 135");
  assert.equal(textToBrailleAsciiText("하늘이"), "jc!o");
});

test("converts shortform-heavy text to dot numbers", () => {
  assert.equal(
    textToDotNumbers("내돈내산"),
    "14 1235 24 12356 14 1235 123 25",
  );
});

test("converts mixed Korean, roman, number, and punctuation text to dot numbers", () => {
  assert.equal(
    textToDotNumbers("나는 Apple 3개를 샀다!"),
    "14 14 1356 | 356 6 1 1234 1234 123 15 256 | 3456 14 4 1235 5 2346 | 123 34 24 235",
  );
});
