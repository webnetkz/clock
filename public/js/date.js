var clock = document.createElement('h1');

document.body.appendChild(clock);

function today() {
    var 
        date = new Date();

        year = date.getFullYear();
        month = date.getMonth() + 1;
        week = date.getDay();
        day = date.getDate();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        
        now = day + '.' + month + '.' + year + '/' + week + '/' +
            hours + ':' + minutes + '<span id="sec">:</span>' + seconds;
        
        clock.innerHTML = now; 
        
}

setInterval(today, 1000);



    function ping() {
        sec.style.cssText = 'visibility: hidden;';
        setTimeout(function() {sec.style.cssText = 'visibility: visible;'}, 200);
    }



setInterval(ping, 1000);


