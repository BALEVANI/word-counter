function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}


function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    if (word.trim().length !== 0 && !Number(word)) {
      wordCount++;
    } 
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word,text)) {
     return "";
   }
   const textArray = text.split(" ");
   let wordCount = 0;
   textArray.forEach(function(element) {
     if (word.toLowerCase() === element.toLowerCase()) {
       wordCount++
     }
   });
   return wordCount;
 }
 

function wordSearch(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase()=== word.toLowerCase()) {
      const regex = new RegExp(word, "gi");
      let matchArray = element.match(regex);
      element = element.replace(matchArray[0], "<b style='background-color: #C6F5CD; padding: 2px;'>" +
      matchArray[0] +
      "</b>")
      htmlString = htmlString.concat( element );
    }
    else if ( element.toLowerCase().includes(word.toLowerCase())) {
      const regex = new RegExp(word, "gi");
      let matchArray = element.match(regex);
      element = element.replace(matchArray[0], "<b style='background-color: #ffdd4b; padding: 2px;'>" +
      matchArray[0] +
      "</b>")
      htmlString = htmlString.concat( element );
    } else {
      htmlString = htmlString.concat(element);
    }
    if(index !== textArray.length-1){
    htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}





let myText = document.getElementById("my-text");
let searchButton = document.getElementById("search");
myText.addEventListener("input", () => {
    let count = wordCounter(myText.value);
    document.getElementById("text-display").innerHTML = myText.value
    document.getElementById("count-result").textContent = `Total  Word Count: ${count}`;
});
searchButton.addEventListener("click", () => {
  let textToSearch = document.getElementById("text-to-search").value;
  if (noInputtedWord(textToSearch)) {
    return ;
  }
  let searchSentence = wordSearch(textToSearch,myText.value);
  document.getElementById("text-display").innerHTML = searchSentence
  let wordCount = numberOfOccurrencesInText(textToSearch,myText.value);
  document.getElementById("occurence-result").textContent = `Total  Word Occurence: ${wordCount}`;
});