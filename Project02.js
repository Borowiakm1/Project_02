/**
 *  @author Borowiak, Matthew (borowiakm1@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS 104 Project 01 || Created 09.25.2017
 */

"use strict";
const PROMPT = require('readline-sync');

let LastName, FirstName, BirthYear, BirthMonth, BirthDay, DueDate;
let NumAccidents, BasePrice, Age, TotalBill;

function main() {
    setLastName();
    setFirstName();
    setBirthYear();
    setBirthMonth();
    setBirthDay();
    setDueDate();
    setNumAccidents();
    letBasePrice();
    setAge();
    setTotalBill();
    printTotalBill();

}

main();
function setLastName() {
    LastName = PROMPT.question(`\nPlease enter Last Name:  `);
}

function setFirstName() {
    FirstName = PROMPT.question(`\nPlease enter First Name:  `);
}

function setBirthYear() {
    BirthYear = PROMPT.question(`\nPlease enter Birth Year:  `);
}

function setBirthMonth() {
    BirthMonth = PROMPT.question(`\nPlease enter Birth Month:  `);
}

function setBirthDay() {
    BirthDay = PROMPT.question(`\nPlease enter Birth Day:  `);
}

function setDueDate() {
    DueDate = PROMPT.question(`\nPlease enter Premium Due Date in (mm/dd/yyyy) format:  `);
}

function setNumAccidents() {
    NumAccidents = Number(PROMPT.question(`\nPlease enter number of at-fault driver accidents in the past three years:  `));
}

function letBasePrice() {
    BasePrice = 100;
}

function setAge() {
    Age = 2017 - BirthYear;
}

function setTotalBill() {
    TotalBill = 0;
    const YouthFee = 20,
        MiddleAgeFee = 10,
        ElderFee = 30;
    if (Age > 0) {
        if (Age > 15 && Age < 30) {
            TotalBill = BasePrice + YouthFee + (NumAccidents * 50);
        } else if (Age >= 30 && Age < 45) {
            TotalBill = BasePrice + MiddleAgeFee + (NumAccidents * 50);
        } else if (Age >= 60) {
            TotalBill = BasePrice + ElderFee + (NumAccidents * 50);
        } else {
            TotalBill = BasePrice + (NumAccidents * 50);
        }
    }
}

function printTotalBill() {
    process.stdout.write('\x1Bc');
    console.log(`\n\t${FirstName} +"'s bill: $" + ${TotalBill}`);
}