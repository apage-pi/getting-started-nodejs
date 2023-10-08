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


module.exports.shortDateInfo = function shortDateInfo() {
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