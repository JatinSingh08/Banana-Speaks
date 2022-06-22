var url="	https://api.funtranslations.com/translate/minion.json"
var textinput = document.querySelector("#input-text")
var btninput = document.querySelector("#translate-btn")
var outputDiv = document.querySelector("#output-text")


function translateUrl(input) {
  return url + "?" + "text=" + input
}
function callBackErrorHandler() {
  console.log("Something went wrong with the api call")
  alert("Sorry, something went wrong with the api call")
}

function clickHandler() {
  var inputText = textinput.value 
  console.log("input text is:",inputText)
  fetch(translateUrl(inputText))
  .then(response => response.json)
  .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
  })
  .catch(callBackErrorHandler)
  
}

btninput.addEventListener("click",clickHandler)