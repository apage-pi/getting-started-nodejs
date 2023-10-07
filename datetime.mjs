export function dateInfo() {
    let dt = new Date();
    let day = dt.getDate();
    let month = dt.getMonth();
    let year = dt.getFullYear();
    let weekday = dt.getDay();
    const dateInfo = [day, month, year, weekday];
    return dateInfo;
}

export function fullDateInfo() {
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

export function dateInfoStr() {
    let date = dateInfo();
    let day = date[0].toString();
    let month = date[1].toString();
    let year = date[2].toString();
    let weekday = date[3].toString();
    const dateInfoStr = [day, month, year, weekday];
    return dateInfoStr;
}

export function getDate() {
    let date = dateInfoStr();
    let shortDate = date[0] + "/" + date[1] + "/" + date[2];
    console.log(shortDate);
}

export function getFullDate(){
    let date = fullDateInfo();
    let fullDate = date[3] + ", " + date[1] + " " + date[0] + ", " + date[2];
    return fullDate;
}