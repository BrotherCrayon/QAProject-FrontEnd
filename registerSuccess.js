//put on user page

function showUser() {
    const userCreate = sessionStorage.getItem('userCreate');
    const userCreateObj = JSON.parse(userCreate);

    for (let key in userCreateObj) {
        const showData = document.getElementById('nameSpan');
        const newPara = document.createElement('p');
        newPara.innerHTML = "<b>" + key + "</b>" + ': <br>' + userCreateObj[key];

        newPara.className = 'userClass';

        showData.append(newPara);
    };
};
showUser();