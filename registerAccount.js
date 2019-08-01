function registerAccount(form) {
    
    const createUserAPI = 'http://35.246.53.205:8081/ListApp/api/account/createAccount';
    const userCreate = {};                              

    for (let elem of form.elements) {   
        if (elem.id) {
            userCreate[elem.id] = elem.value;          
        }
    };

    const dataString = JSON.stringify(userCreate);
    makeRequest('POST', createUserAPI, dataString)
    .then((value) => {
            window.location = "login.html";
            console.log(value);
        })
        .catch((error) => {
            console.warn(error);
            errorNote(value.message);
        });

    return false; 
}

function errorNote(message) {
    window.alert(message);
}