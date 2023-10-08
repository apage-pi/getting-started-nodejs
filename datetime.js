function dateInfo() {
    let dt = new Date();
    let day = dt.getDate();
    let month = dt.getMonth();
    let year = dt.getFullYear();
    let weekday = dt.getDay();
    const dateInfo = [day, month, year, weekday];
    return dateInfo;
}

function fullDateInfo() {
    let dt = new Date();
    let day = dt.getDate().toString();
    let iMonth = dt.getMonth();
    let year = dt.getFullYear().toString();
    let iWeekday = dt.getDay();
    let month = "";
    let weekday = "";
    switch (iMonth) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "Febuary";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default:
            month = "undefined";
            break;
    }
    switch (iWeekday) {
        case 0:
            weekday = "Sunday";
            break;
        case 1:
            weekday = "Monday";
            break;
        case 2:
            weekday = "Tuesday";
            break;
        case 3:
            month = "Wednesday";
            break;
        case 4:
            weekday = "Thursday";
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
        default:
            weekday= "undefined";
    }
    const dateInfo = [day, month, year, weekday];
    return dateInfo;
}

function medDateInfo() {
    let dt = new Date();
    let day = dt.getDate().toString();
    let iMonth = dt.getMonth();
    let year = dt.getFullYear().toString();
    let iWeekday = dt.getDay();
    let month = "";
    let weekday = "";
    switch (iMonth) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sep";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
        default:
            month = "undef";
            break;
    }
    switch (iWeekday) {
        case 0:
            weekday = "Sun";
            break;
        case 1:
            weekday = "Mon";
            break;
        case 2:
            weekday = "Tue";
            break;
        case 3:
            month = "Wed";
            break;
        case 4:
            weekday = "Thu";
            break;
        case 5:
            weekday = "Fri";
            break;
        case 6:
            weekday = "Sat";
            break;
        default:
            weekday= "undef";
    }
    const dateInfo = [day, month, year, weekday];
    return dateInfo;
}

function timeInfo() {
    let dt = new Date();
    let ms = dt.getMilliseconds();
    let sec = dt.getSeconds();
    let min = dt.getMinutes();
    let hr = dt.getHours();
    if (hr > 12) {
        var hr12 = hr - 12;
    }
    else {
        var hr12 = hr;
    }
    const timeInfo = [ms, sec, min, hr, hr12];
    return timeInfo;
}

function timeInfoStr() {
    let dt = new Date();
    let ms = dt.getMilliseconds().toString();
    let sec = dt.getSeconds().toString();
    let mint = dt.getMinutes();
    let mint2 = mint.toString();
    if (mint < 9) {
        var min = "0" + mint2;
    }
    else {
        var min = mint.toString();
    }

    let hr = dt.getHours().toString();
    if (hr > 12) {
        var hr12t = hr - 12;
    }
    else {
        var hr12t = hr;
    }
    let hr12 = hr12t.toString();
    const tInfo = [ms, sec, min, hr, hr12];
    return tInfo;
}

function shortDateInfo() {
    let date = dateInfo();
    let day = date[0].toString();
    let month = date[1].toString();
    let year = date[2].toString();
    let weekday = date[3].toString();
    const dateInfoStr = [day, month, year, weekday];
    return dateInfoStr;
}

module.exports.getShortDate = function getShortDate() {
    let date = shortDateInfo();
    let shortDate = date[0] + "/" + date[1] + "/" + date[2];
    console.log(shortDate);
}

module.exports.getFullDate = function getFullDate(){
    let date = fullDateInfo();
    let fullDate = date[3] + ", " + date[1] + " " + date[0] + ", " + date[2];
    return fullDate;
}

module.exports.getMedDate = function getMedDate(){
    let date = medDateInfo();
    let medDate = date[3] + ", " + date[1] + " " + date[0] + ", " + date[2];
    return medDate;
}

module.exports.getTime = function getTime(hr12, degree) {
    let timeInfo = timeInfoStr();
    if (hr12 == true) {
        if (degree == "sec") {
            var time = timeInfo[4] + ":" + timeInfo[2] + ":" + timeInfo[1];
        }
        else if (degree == "ms") {
            var time = timeInfo[4] + ":" + timeInfo[2] + ":" + timeInfo[1] + ":" + timeInfo[0];
        }
        else {
            var time = timeInfo[4] + ":" + timeInfo[2];
        }
    }
    else {
        if (degree == "sec") {
            var time = timeInfo[3] + ":" + timeInfo[2] + ":" + timeInfo[1];
        }
        else if (degree == "ms") {
            var time = timeInfo[3] + ":" + timeInfo[2] + ":" + timeInfo[1] + ":" + timeInfo[0];
        }
        else {
            var time = timeInfo[3] + ":" + timeInfo[2];
        }
    }

    return time;
}
