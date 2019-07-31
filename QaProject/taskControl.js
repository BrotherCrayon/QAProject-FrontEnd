const postListItemAPI = "http://localhost:8080/ListApp/api/todolist/createListItem/";
const getListItemAPI = "http://localhost:8080/ListApp/api/todolist/getAccountList/";
const userTasksArray = [];
let getLogin = sessionStorage.getItem("storeUserLogin");
let loginObj = JSON.parse(getLogin);

function addToList() {
  const listItemAdd = {
    "listContent": document.getElementById("listItemAdd").value
  }
  const dataString = JSON.stringify(listItemAdd);
  makeRequest("POST", postListItemAPI + loginObj.accountId, dataString)
  .then((value) => {
    
    console.log(value );
    getAccountListItems();

  });
}

function getAccountListItems() {
  const displayLists = {
    
  }
  const dataString = JSON.stringify(displayLists);
  makeRequest("GET", getListItemAPI + loginObj.accountId, dataString)
  .then((value) => {
      const placeHere = document.getElementById("addItemsHere");
      const placeThis = JSON.parse(value);
    // console.log(placeThis)
      // placeHere.innerText = placeThis.value;
      for(e of placeThis){
        console.log(e)
        placeHere.innerText = e.listContent
      }
  })
}



function notifyFeatureMissing() {
  window.alert("Sorry this isn't ready yet, check back soon!");
} 

getAccountListItems();