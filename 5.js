let typeOfPackage="overnight";

switch(typeOfPackage){
    case "standard":
        console.log("Your Packaage is standard your product will be deleiverd in 3 - 4 Days..");
        break;
    case "Express":
        console.log("Your Packaage is Express your product will be deleiverd in 1 - 2 Days..");    
        break;
    case "overnight":
        console.log("Your Packaage is overnight your product will be deleiverd within 24 hours..");
        break;
        default:
            console.log("Invalid Package Details...");
}