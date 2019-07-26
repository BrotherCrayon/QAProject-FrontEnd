const createUserAPI = 'http://localhost:8080/ListApp/api/account/createAccount';
const userCreate = {};                              

function registerAccount(form) {

    for (let elem of form.elements) {   
        if (elem.id) {
            userCreate[elem.id] = elem.value;          
        }
    };

    const dataString = JSON.stringify(userCreate);
    sessionStorage.setItem('userCreate', dataString);

    makeRequest('POST', createUserAPI, dataString)
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

function errorNote(message) {
    window.alert(message);
}