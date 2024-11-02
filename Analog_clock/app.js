let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(function displayTime() {
    let date = new Date();
    let hRotation = (30 * date.getHours()) + (date.getMinutes() / 2);
    let mRotation = 6 * date.getMinutes();
    let sRotation = 6 * date.getSeconds();

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}, 1000);