const postListItemAPI = "http://35.246.53.205:8081/ListApp/api/todolist/createListItem/";
const getListItemAPI = "http://35.246.53.205:8081/ListApp/api/todolist/getAccountList/";
let userTasksArray = [];
let getLogin = sessionStorage.getItem("storeUserLogin");
let placeThis = JSON.parse(getLogin);

function addToList() {
  let listItemAdd = {
    "listContent": document.getElementById("listItemAdd").value
  }
  const dataString = JSON.stringify(listItemAdd);
  makeRequest("POST", postListItemAPI + placeThis.accountId, dataString)
  .then((value) => {
    console.log(value);
    getAccountListItems();
  });
  // $("#listInputter").modal('toggle');

  return false;
}

function getAccountListItems() {
  let displayLists = {}
  const dataString = JSON.stringify(displayLists);
  
  makeRequest("GET", getListItemAPI + placeThis.accountId, dataString)
  .then((value) => {     

    let placeThis = JSON.parse(value);
    const listDetailsEl = document.getElementById('addItemsHere');
    placeThis.sort((a, b) => a.listId - b.listId);
    clearList();
    
    for (let list of placeThis) {
      const para = document.createElement('h6');
      para.innerHTML = list.listContent;
      listDetailsEl.append(para);
    }

  })

}

function notEmpty() {
  
  // var x;
  //   x = document.getElementById("listItemAdd").value;
  //   if (x == "") {
  //       alert("Enter some text");
    
  //   };
}


// function deleteAccountItem() {
//     div.parentNode.removeChild(div);
// }

function clearList(){
  const para = document.getElementById('addItemsHere');
  para.innerText = "";
}

getAccountListItems();