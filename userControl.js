    
// const userID = JSON.parse(sessionStorage.getItem("userData")).accountId;
// const sessionUsername = sessionStorage.getItem("username");

const getAccount = "http://localhost:8080/ListApp/api/account//" + accountId;
const updateAccount = "http://localhost:8080/ListApp/api/account/updateAccount/" + accountId;
const deleteAccount = "http://localhost:8080/ListApp/api/account/deleteAccount/" + accountId;

const accountUpdate = {};

function showUser() {
    const userCreate = sessionStorage.getItem('userCreate').accountId;
    const userNameC = sessionStorage.getItem('userName').accountId;
    const userCreateObj = JSON.parse(userCreate);
    const userCreateObjC = JSON.parse(userNameC);
    
    for (let key in userCreateObj) {
        const showData = document.getElementById('nameSpan');
        const newPara = document.createElement('p');
        newPara.innerHTML = "<b>" + key + "</b>" + ': <br>' + userCreateObj[key];
        newPara.innerHTML = "<b>" + key + "</b>" + ': <br>' + userCreateObjC[key];
        
        newPara.className = 'userClass';

        showData.append(newPara);
    };
};
showUser();


function deleteAccount() {

}

function updateAccount(form) {

    for (let element of form.elements) {
        if (element.id) {
            accountUpdate[element.id] = element.value;
        }
    }

    const dataString = JSON.stringify(accountUpdate);

    makeRequest('POST', updateAccount, dataString).then(value => {

        if (value.message == "Success") {
            document.getElementById("userName").value = "";
            document.getElementById("userPass").value = "";
            showUser();
        } else {
            console.log(value.message);
            windows.alert("failed");
        }

    });

    return false;
}