var testDate = new Date("2023-03-18"); 
//COMP: TYPE FIRST DATE OF COMP IN MONTH-DAY-YEAR FORM
//NOT COMP: TYPE TEST DATE IN MONTH-DAY-YEAR FORM

var sheetID = "1lydmTcdvkiqX3hrqJMzbgS5gNUQc97C-4zEcNFIbh_Y";
//COMP: USE THE ID THAT THE SHEETS USE
//NOT COMP: LEAVE AS "1DMp6Jx7XqcGW0Tcgm_qY97IgKhRxa7Us5-KsrKL_LUU"

var roboPicsFolderId = "1pzk6rKsE_6CCRATpvFESwJ1E85CEB4kL";
//COMP: USE THE ID THAT THE SHEETS USE
//NOT COMP: LEAVE AS "1pzk6rKsE_6CCRATpvFESwJ1E85CEB4kL"

var stage = ["WARMUPS", "QUALS", "FINALS"][1];
//COMP: SET TO WHATEVER STAGE
//NOT COMP: SET TO [1]

var def = ["WARMUPS", "QUALS", "FINALS"][1];

var matchNum;

var tbaNotWorking = false;
//SET TO TRUE IF TBA IS WORKING ON MOBILE, ELSE, FALSE

localStorage.clear()
localStorage.setItem("user", "Fart");
//COMP: LEAVE COMMENTED
//TESTNG: LEAVE UNCOMMNETED

localStorage.setItem("TEST", "TUNA");