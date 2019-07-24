var clock = document.getElementById('clock');
var color = document.getElementById('color');
var date = document.getElementById('date');
var clockWrapper = document.querySelector('.clock-wrapper');

function colorClock(){
    var time = new Date();
    var h = (time.getHours() % 12).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if(h.length < 2) {
        h = '0' + h;
    }
    if(m.length < 2) {
        m = '0' + m;
    }
    if(s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s;
    var colorString = '#' + h + m + s;

    clock.textContent = clockString;
    color.textContent = colorString;

    var options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };


    time = time.toLocaleString("ru", options).toString();
    time = time[0].toUpperCase() + time.slice(1);

    date.textContent = time;

    clockWrapper.style.background = colorString;
}

colorClock();
setInterval(colorClock, 1000);




