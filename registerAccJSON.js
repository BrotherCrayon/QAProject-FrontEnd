// function getData() {
//     const req = new XMLHttpRequest();
//     req.onload = function () {
//         const data = JSON.parse(req.responseText);
//         console.log('IT WORKED', data);
//         createPage(data);
//     }
//     req.open('GET', 'localhost:8080/ListApp/api/Account/getAll', true);
//     req.send();
// }


// function createPage(data) {

//     const userDetails = document.getElementById('userDetails')      //reference to the html page div

//     for (let memberDeets of data.userName) {                         //take memebers from JSON array 
        
//         const memberName = document.createElement('h2');        //give my var a format of header 2
//         memberName.innerText = memberDeets.userName;                //apply the (name) feild I want to the formatting as html text
//         userDetails.append(memberName);                        //append my var to div I put in html

//     }
// };