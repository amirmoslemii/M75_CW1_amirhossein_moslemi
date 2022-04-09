let newDate = new Date()

//fill the box getDay1 and getDay2
let getDay1 = newDate.setMinutes(50)        // your date input
let getDay2 = newDate.setMinutes(50)       // your date input 
function isEqualDate() {
    if (getDay1 === getDay2) {
        alert('date 1 is Equal of date 2')
    } else {
        alert('date 1 is not Equal of date 2')
    }
}
isEqualDate()