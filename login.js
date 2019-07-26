const loginURL = "http://localhost:8080/ListApp/api/account/login";

function userLogin(form) {
    const loginData = {};

    for(let element of form.elements) {
        if (element.id) {
            loginData[element.id] = element.value;
        }
    }

    const dataString = JSON.stringify(loginData);

    makeRequest("POST", loginURL, dataString).then((value) => {
        if(value.message == "Account not found") {
            window.alert("Incorrect username or password");
        } else {
            sessionStorage.setItem("userData", JSON.stringify(value));
            sessionStorage.setItem("userName", loginData.userName);
            toHome();
        }
    })

    return false;
}

function toHome() {
    window.location = "index.html";
}