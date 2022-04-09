let today = new Date();
function calcDate() {
    let yesterday = new Date(today.setDate(today.getDate() - 1));
    let tomorrow = new Date(today.setDate(today.getDate() + 1));
    let month = new Date(today.setDate(today.getDate() + 30));
    console.log(`yesterday : ${yesterday}`);
    console.log(`tomorrow : ${tomorrow}`);
    console.log(`month : ${month}`);
}
calcDate()
