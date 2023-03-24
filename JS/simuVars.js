var testDate = new Date(); 
//COMP: TYPE FIRST DATE OF COMP IN YEAR MONTH DAY FORM
//NOT COMP: TYPE TEST DATE IN YEAR MONTH DAY FORM

var sheetID = "1lQFSP7u7PIwLp_dZhNAbfgSY1MM3Cgn2OC46d7ksz9g";
//COMP: USE THE ID THAT THE SHEETS USE
//NOT COMP: LEAVE AS "1DMp6Jx7XqcGW0Tcgm_qY97IgKhRxa7Us5-KsrKL_LUU"

var roboPicsFolderId = "1t42FXVXn0JYmXJIZvOM9yk-6XZHpaNVj";
//COMP: USE THE ID THAT THE SHEETS USE
//NOT COMP: LEAVE AS "1pzk6rKsE_6CCRATpvFESwJ1E85CEB4kL"

var stage = ["WARMUPS", "QUALS", "FINALS"][0];
//COMP: SET TO WHATEVER STAGE
//NOT COMP: SET TO [1]

// var def = ["WARMUPS", "QUALS", "FINALS"][0];
var def = stage;

var matchNum;

var tbaNotWorking = false;
//SET TO TRUE IF TBA IS WORKING ON MOBILE, ELSE, FALSE

// localStorage.clear()
// localStorage.setItem("user", "Fart");
//COMP: LEAVE COMMENTED
//TESTNG: LEAVE UNCOMMNETED

// localStorage.setItem("TEST", "TUawdNA");