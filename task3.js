let newDate = new Date()
let getDay = newDate.getDay()
function isWeekend() {
    if (getDay === 7) {
        alert('Today is the weekend')
    } else {
        alert('Today is not the weekend')
    }
}
isWeekend()