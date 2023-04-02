function save_data() {
    var data = {};
    data.email = document.getElementById('inputEmail').value;
    var name = document.getElementById('inputUser').value;
    var names = name.split(' ');
    data.name = names[0];
    data.surname = names[1];
    data.adress = document.getElementById('inputAddress').value;
    data.tel = document.getElementById('inputTel').value;
    data.city = document.getElementById('inputCity').value;
    data.province = document.getElementById('inputProvince').value;
    data.zip = document.getElementById('inputZip').value;
    data.message = document.getElementById('inputMessage').value;
    return data;
}

function collect_data() {
    var jasonData = save_data();
    console.log(jasonData);
}