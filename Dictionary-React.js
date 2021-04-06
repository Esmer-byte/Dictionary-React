var dictionary = [], wordAdd, wordSearch;
var searchBar = [], addBar = [];
dictionary.push(null);
var addButton = (<button class="btn btn-success" onClick = {addFunction}>Add</button>), 
    searchButton = (<button class="btn btn-primary" onClick = {searchFunction}>Search</button>);
addBar.push(addButton);
searchBar.push(searchButton);
function Search() {
  function handleChange(e) {
    wordSearch = e.target.value;
  }
  return <input name="firstName" onChange={handleChange} />;
}
function searchFunction() {
  for (var i = 0; i < dictionary.length; i++) {
    if (wordSearch == dictionary[i]) {
      alert("The word was found!");
      return 0;
    }
  }
  alert("The word was not found!");
}
function Add() {
  function handleChange(e) {
    wordAdd = e.target.value;
  }
  return <input name="firstName" onChange={handleChange} />;
}

function addFunction() {
  dictionary.push(wordAdd);
}
searchBar.push(Search());
addBar.push(Add());
ReactDOM.render(addBar, document.querySelector("#addBar"));
ReactDOM.render(searchBar, document.querySelector("#searchBar"));
