function mode(){
    if (document.body.getAttribute('data-bs-theme') == 'dark') {
        document.body.setAttribute('data-bs-theme','light');
        document.getElementById('mode-switch').classList = "fa-solid fa-sun";
    }
    else {
        document.body.setAttribute('data-bs-theme','dark');
        document.getElementById('mode-switch').classList = "fa-solid fa-moon";
    }
}