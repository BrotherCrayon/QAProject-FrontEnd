function logout() {
    const userCreate = sessionStorage.getItem('userCreate');

    sessionStorage.clear();
    window.location ="login.html";
}