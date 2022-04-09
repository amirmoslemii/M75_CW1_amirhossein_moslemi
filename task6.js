var date = new Date(2000, 0, 9);
function dateFunc() {
    var formatDate = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(date);
    console.log(formatDate)
}
dateFunc()