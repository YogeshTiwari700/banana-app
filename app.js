var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input")
var outPut=document.querySelector("#output")

console.log(outPut)
function clickHandler() {
  outPut.innerText = "OIHCDIUCIV " + textInput.value;
};

btnTranslate.addEventListener("click", clickHandler)


