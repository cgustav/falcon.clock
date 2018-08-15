//autoinvoked function
(function () {
    var updateHour = function () {
        //This function contain the whole date information: This will update every second
        //Var
        var date = new Date(), 
            hours = date.getHours(),
            amPm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            weekDay = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        var pHours = document.getElementById('hours'),
            pAMPM = document.getElementById('amPm'),
            pMinutes = document.getElementById('minutes'), 
            pSeconds = document.getElementById('seconds'), 
            pWeekDay = document.getElementById('weekDay'), 
            pDay = document.getElementById('day'), 
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        var arrayWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        var arrayMonth = ['Jan', 'Feu', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var interval = setInterval(updateHour, 1000);

        //Filling date
        pWeekDay.textContent = arrayWeek[weekDay];
        pDay.textContent = day;
        pMonth.textContent = arrayMonth[month];
        pYear.textContent = year;

        
        //Conditionals
        if (hours > 12) {
            hours = hours - 12;
            amPm = 'PM';
        }else{
            amPm = 'AM';
        }

        if(hours == 0){
            hours = 12;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        };
        if (seconds < 10) {
            seconds = "0" + seconds;
        };
        //Filling clock
        pHours.textContent = hours;
        pAMPM.textContent = amPm;
        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;
    };



    updateHour();

}())