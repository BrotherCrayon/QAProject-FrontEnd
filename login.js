function userLogin(form) {
    const loginAPI = "http://35.246.53.205:8081/ListApp/api/account/login";
    const loginData = {};

    for(let element of form.elements) {
        if (element.id) {
            loginData[element.id] = element.value;
        }
    }

    const userLogin = JSON.stringify(loginData);

    makeRequest("POST", loginAPI, userLogin)
    .then((value) => {  
        if(!isNaN(value)) {
            // window.alert("Incorrect username or password");
            const errorDiv = document.getElementById('loginError');
            errorDiv.style.display = "block";
        } else {
            sessionStorage.setItem("storeUserLogin", value);
            toHome();
        }
    })
    .catch((error) => {
        console.warn(error);
        errorNote(value.message);
    });

    return false;
}

function toHome() {
    window.location = "index.html";
}