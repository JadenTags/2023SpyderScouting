var testDate = new Date(); 
//COMP: TYPE FIRST DATE OF COMP IN YEAR MONTH DAY FORM
//NOT COMP: TYPE TEST DATE IN YEAR MONTH DAY FORM

var sheetID = "1wUO-tH25CUiifegzN42whYzGuugoqiyQJn0Gcp2xJAM";
//COMP: USE THE ID THAT THE SHEETS USE
//NOT COMP: LEAVE AS "1lydmTcdvkiqX3hrqJMzbgS5gNUQc97C-4zEcNFIbh_Y"
//SD: 1lQFSP7u7PIwLp_dZhNAbfgSY1MM3Cgn2OC46d7ksz9g
//BAYOU: 13upH6WD6_GKrwX00GqesO2RQtAKAhO-psJSHr2LJMm8
//ROCKET CITY: 1X0r-ZXlazO1spQzebWH6v6bvmVZ5EZKVWi1ab9GRDHw
//GALILEO: 1wUO-tH25CUiifegzN42whYzGuugoqiyQJn0Gcp2xJAM

var roboPicsFolderId = "1jhOlr3TeDN3L2OeTQWc-OaNgLmMKinsP";
//COMP: USE THE ID THAT THE SHEETS USE
//NOT COMP: LEAVE AS "1pzk6rKsE_6CCRATpvFESwJ1E85CEB4kL"
//SD: 1t42FXVXn0JYmXJIZvOM9yk-6XZHpaNVj
//BAYOU: 15gtjdXvbqQQBifq9lvD6v4iYi67EShsd
//ROCKET CITY: 1gtz-9L2DWtX7kJwjKwjWrKLT1GgcOUpc
//GALILEO: 1jhOlr3TeDN3L2OeTQWc-OaNgLmMKinsP

var stage = ["WARMUPS", "QUALS", "FINALS"][1];
if (localStorage.getItem("displayData") == undefined) {
    localStorage.setItem("displayData", stage);
}
//COMP: SET TO WHATEVER STAGE
//NOT COMP: SET TO [1]

var matchNum;

var tbaNotWorking = false;
//SET TO TRUE IF TBA IS WORKING ON MOBILE, ELSE, FALSE

// localStorage.clear()
// localStorage.setItem("user", "Fart");
//COMP: LEAVE COMMENTED
//TESTNG: LEAVE UNCOMMNETED

// localStorage.setItem("TEST", "YUNA");