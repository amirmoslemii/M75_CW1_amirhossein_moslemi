function lower_am_pm(dt) {
    return dt.getHours() < 12 ? dt + '  AM' : dt + '  PM ';
}
dt = new Date();
dt.setDate(2021, 21, 22)
console.log(lower_am_pm(dt));