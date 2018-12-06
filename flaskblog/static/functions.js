function standby() {
    var def = "http://" + document.location.hostname + ":5000/static/images/default.jpg";
    document.getElementById('profile_picture').src = def;
}
