const htmlCodeInput = document.getElementById("html-code");
const cssCodeInput = document.getElementById("css-code");
const jsCodeInput = document.getElementById("js-code");
const runButton = document.getElementById("run-button");
const outputDiv = document.getElementById("output");

window.addEventListener("DOMContentLoaded", () => {
  const storedHTMLCode = localStorage.getItem("htmlCode");
  const storedCSSCode = localStorage.getItem("cssCode");
  const storedJSCode = localStorage.getItem("jsCode");
 
  const storedOutput = localStorage.getItem("outputHTML");
 
  if (storedHTMLCode) htmlCodeInput.value = storedHTMLCode;
  if (storedCSSCode) cssCodeInput.value = storedCSSCode;
  if (storedJSCode) jsCodeInput.value = storedJSCode;
  if(storedOutput) outputDiv.innerText=storedOutput 

  updateLineNumbers("html-code", "html-line-numbers");
  updateLineNumbers("css-code", "css-line-numbers");
  updateLineNumbers("js-code", "js-line-numbers");
});

runButton.addEventListener("click", runCode);

htmlCodeInput.addEventListener("input", () =>
  updateLineNumbers("html-code","html-line-numbers")
);
cssCodeInput.addEventListener("input", () =>
  updateLineNumbers("css-code", "css-line-numbers")
);
jsCodeInput.addEventListener("input", () =>
  updateLineNumbers("js-code", "js-line-numbers")
);

function runCode() {
  const htmlCode = htmlCodeInput.value;
  const cssCode = `<style>${cssCodeInput.value}</style>`;
  const jsCode = jsCodeInput.value;
  // const combinedCode = `${htmlCode}\n${cssCode}\n${jsCode}`;

  outputDiv.innerHTML = htmlCode + cssCode;

  //   try {
  //   const executeJS = new Function(jsCode);
  //   executeJS();
  // } catch (error) {
  //   console.error('Error while executing JavaScript code:', error);
  // }

  try {
    eval(jsCode);
  } catch (error) {
    console.error("Error while executing JavaScript code:", error);
  }
  // Store code in localStorage
  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCodeInput.value);
  localStorage.setItem("jsCode", jsCodeInput.value);
  localStorage.setItem("outputHTML", outputDiv.innerText); // Store output HTML code

}

function updateLineNumbers(textareaId, lineNumberId) {
  console.log(textareaId,lineNumberId);
  // select textarea and number div
  const textarea = document.getElementById(textareaId);
  const lineNumberDiv = document.getElementById(lineNumberId);
  const lines = textarea.value.split("\n");
 console.log(lines);
  const lineCount = lines.length;
  let lineNumbersHtml = "";
  for (let i = 1; i <= lineCount; i++) {
    lineNumbersHtml += `<div>${i}</div>`;
  }
  lineNumberDiv.innerHTML = lineNumbersHtml;
}
