(function () {
  const api = window.KoreanBraille;
  const sourceText = document.querySelector("#sourceText");
  const resultText = document.querySelector("#resultText");
  const copyButton = document.querySelector("#copyButton");
  const clearButton = document.querySelector("#clearButton");
  const status = document.querySelector("#status");
  const previewMeta = document.querySelector("#previewMeta");
  const braillePreview = document.querySelector("#braillePreview");
  const modeTabs = Array.from(document.querySelectorAll(".mode-tab"));

  let currentMode = "dots";

  function getOutput(text) {
    if (currentMode === "analysis") {
      return api.analyzeToDisplayText(text);
    }

    if (currentMode === "ascii") {
      return api.textToBrailleAsciiText(text);
    }

    if (currentMode === "plain") {
      return api.decomposeToJamoText(text);
    }

    if (currentMode === "json") {
      return JSON.stringify(api.analyzeText(text), null, 2);
    }

    return api.textToDotNumbers(text);
  }

  function createCell(dots) {
    if (dots === "\n" || dots === "\r") {
      const lineBreak = document.createElement("div");
      lineBreak.className = "line-break";
      return lineBreak;
    }

    const cell = document.createElement("div");
    cell.className = dots === "|" ? "braille-cell blank-cell" : "braille-cell";

    if (dots === "|") {
      return cell;
    }

    for (let index = 1; index <= 6; index += 1) {
      const dot = document.createElement("span");
      dot.className = dots.includes(String(index)) ? "dot filled" : "dot";
      cell.appendChild(dot);
    }

    return cell;
  }

  function renderPreview(text) {
    const cells = api.analysisToDotNumberCells(api.analyzeText(text));
    braillePreview.replaceChildren();

    cells.forEach((dots) => {
      braillePreview.appendChild(createCell(dots));
    });

    const visibleCells = cells.filter((cell) => cell !== "\n" && cell !== "\r").length;
    const meta = `${visibleCells}칸`;
    status.textContent = meta;
    previewMeta.textContent = meta;
  }

  function render() {
    const text = sourceText.value;
    resultText.textContent = getOutput(text);
    renderPreview(text);
  }

  modeTabs.forEach((button) => {
    button.addEventListener("click", () => {
      currentMode = button.dataset.mode;

      modeTabs.forEach((tab) => {
        tab.classList.toggle("active", tab === button);
      });

      render();
    });
  });

  sourceText.addEventListener("input", render);

  clearButton.addEventListener("click", () => {
    sourceText.value = "";
    sourceText.focus();
    render();
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    return Promise.resolve();
  }

  copyButton.addEventListener("click", async () => {
    const text = resultText.textContent;

    if (!text) {
      return;
    }

    await copyText(text);
    copyButton.textContent = "복사됨";
    window.setTimeout(() => {
      copyButton.textContent = "복사";
    }, 900);
  });

  render();
})();
