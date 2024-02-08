

function calculateMoney(total_sells) {

    if (typeof total_sells !== "number" || total_sells >= 0  === false) {
        return "Invalid Number";
    }

    const ticketPrice = 120;
    const totalSell = ticketPrice * total_sells;

    const Lunch = 8 * 50;
    const Salary = 500;
    
    const dailyCost = Salary + Lunch;
    
    const result = totalSell - dailyCost;
    return result;
}



function checkName(name){
    if(typeof name !== "string"){
        return "invalid";
    }
    const lastLetter = name.slice(-1).toLowerCase();
    const letters = ["a", "y", "i", "e", "o", "u", "w"];
    if(letters.includes(lastLetter)){
        return "GOOD NAME";
    }
    else{
        return "BAD NAME";
    }
}



function deleteInvalids(received_Data) {

    if (Array.isArray(received_Data) === false) {
        return "Invalid Array";
    }

    let my_Array = [];
    for (const received of received_Data) {
        if (typeof received === "number") {
            if (isNaN(received) === false) {
                my_Array.push(received);
            }          
        }
    }
    return my_Array;
}




function password(isData) {

    const name = isData.name;
    const birthYear = isData.birthYear;
    const string = "" + birthYear;

    let webName = isData.siteName;
    const websiteName =  webName.charAt(0).toUpperCase() + webName.slice(1)
    const result = websiteName + "#" + name + "@" + string;
    return result ;
    
}