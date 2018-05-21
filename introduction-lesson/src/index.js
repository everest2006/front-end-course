document.onload = (function () {

    function showModalWindow() {
        return prompt('Enter your name', 'exemple: Alex');
    }

    function showName(name) {
        alert(name);
    }

    let name =showModalWindow();
    showName(name);
})();