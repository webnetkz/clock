function today() {
    var 
        date = new Date();

        year = date.getFullYear();
        month = date.getMonth() + 1;
        week = date.getDay() + 1;
        day = date.getDate();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
        ms = date.getMilliseconds();
        
        now = day + '.' + month + '.' + year + '/' + week + '/' +
            hours + ':' + minutes + ':' + seconds + '/' + ms;  
}

setInterval(today, 100);


