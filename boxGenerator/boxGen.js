let elem = document.querySelector("element");
let code = document.querySelector("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

const generateShadow = ()=> {
  let hShadow = document.querySelector("h-shadow").value;
  let vShadow = document.querySelector("v-shadow").value;
  let blurRadius = document.querySelector("blur-radius").value;
  let spreadRadius = document.querySelector("spread-radius").value;
  let shadowColor = document.querySelector("shadow-color").value;
  let shadowColorOpacity = document.querySelector(
    "shadow-color-opacity"
  ).value;
  let shadowInset = document.querySelector("shadow-inset").checked;

  //Using ternary operator to check if inset checkbox is checked or not.
  //If checked we add the inset prefix
  //Else no inset prefix is added
  let boxShadow = shadowInset
    ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`
    : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`;
  elem.style.boxShadow = boxShadow;
  code.textContent = `box-shadow: ${boxShadow};`;
}

//Converting Hex value to rgba
const hexToRgba = (shadowColor, shadowColorOpacity)=> {
  let r = parseInt(shadowColor.substr(1, 2), 16);
  let g = parseInt(shadowColor.substr(3, 2), 16);
  let b = parseInt(shadowColor.substr(5, 2), 16);
  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}

//Copy the generated code to clipboard
const copyCode = ()=> {
  code.select();
  document.execCommand("copy");
  alert("Code Copied To Clipboard");
}

//Call the generateShadow function on every page load
window.onload = generateShadow();
