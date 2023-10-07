let dt = new Date();
let day = dt.getUTCDate();
let month = dt.getUTCMonth();
let year = dt.getUTCFullYear();
let date = day.toString() + "/" + month.toString() + "/" + year.toString();
console.log(date)