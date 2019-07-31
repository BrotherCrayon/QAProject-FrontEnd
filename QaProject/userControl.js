const showAccountAPI = "http://localhost:8080/ListApp/api/account/showAccount/";
const deleteAccountAPI = "http://localhost:8080/ListApp/api/account/delete/";
const updateAccountAPI = "http://localhost:8080/ListApp/api/account/update/";
const thisLogin = sessionStorage.getItem("storeUserLogin");

function checkLogin(){
    let loginObj = JSON.parse(thisLogin);
    if (loginObj) {
        console.log("logged in");
    } else { 
        window.location = "login.html";
    }
}

function getAccount() {
    let loginObj = JSON.parse(thisLogin);
    if (loginObj) {
        makeRequest("GET", showAccountAPI + loginObj.accountId).then((value) => {
            const userName = document.getElementById("userName");
            const userValue = JSON.parse(value);

            userName.innerText = userValue.userName;    
        });

    } else {
        window.location = "login.html";
        console.log("it's this");
    }

}

function deleteAccount() {
    let loginObj = JSON.parse(thisLogin);
    if (loginObj) {
        makeRequest("DELETE", deleteAccountAPI + loginObj.accountId).then((value) => {
            console.log(value.message);
            sessionStorage.clear();
            window.location = "login.html";
        });

    } else {
        console.log("won't delete");
    }
}

function updateAccount(form) {
    let loginObj = JSON.parse(thisLogin);

    const userUpdate = {};
    for (let elem of form.elements) {   
        if (elem.id) {
            userUpdate[elem.id] = elem.value;          
        }
    };

    const dataString = JSON.stringify(userUpdate);
    makeRequest('POST', updateAccountAPI + loginObj.accountId, dataString)
    .then((value) => {
            window.location = "user.html";
            console.log(value);
        })
        .catch((error) => {
            console.warn(error);
            errorNote(value.message);
        });

    return false; 
}

function logout(){
    sessionStorage.clear();
    window.location="login.html";
}

function errorNote(message) {
    window.alert(message);
}
