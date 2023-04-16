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

function font(size){
    document.querySelector("html").style.fontSize = `${size}px`;
    }

function saturate(){
  if (document.querySelector("html").getAttribute('data-bs-saturate') == 'true') {
      document.querySelector("html").setAttribute('data-bs-saturate','false');
      document.querySelector("html").style.filter= "saturate(1)";
  }
  else {
      document.querySelector("html").setAttribute('data-bs-saturate','true');
      document.querySelector("html").style.filter= "saturate(0)";
  }
}