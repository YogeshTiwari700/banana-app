var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input")
var outPut=document.querySelector("#output")

// var bananaServerUrl = "https://api.funtranslations.com/translate/emoji.json"
	

var bananaServerUrl = "https://api.funtranslations.com/translate/minion.json"
	 function getTranslateURL (input) {
    return bananaServerUrl + "?" + "text=" + input
   }

   function errorHandler (error) {
    console.log("error occured", error);
    alert ("something is going wrong with server ! try again some time")
   }

function clickHandler() {
 var inputText = textInput.value;
  fetch(getTranslateURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outPut.innerText = translatedText;
  })
  .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)


