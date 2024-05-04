#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = 10000 + Math.floor(Math.random() * 90000);
let mybalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return 'please enter a non empty value';
        }
    },
    {
        name: 'courses',
        type: 'list',
        message: 'select the course you enrolled',
        choices: ['Typescript', 'Javascript', 'python']
    }
]);
const tutionfees = {
    "Typescript": 5000,
    "Javascript": 6000,
    "python": 7000,
};
console.log(`\ntutionfees: ${tutionfees[answer.courses]}/-\n`);
console.log(`Balance: ${mybalance}`);
let paymentMethod = await inquirer.prompt([
    {
        name: 'payment',
        type: "list",
        message: "Please select payment method",
        choices: ['BankTransfer', 'Easypaisa', 'Jazzcash']
    },
    {
        name: 'amount',
        type: 'input',
        message: 'Transfer money: ',
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return 'please enter a non empty value. ';
        }
    }
]);
console.log(`You select payment method ${paymentMethod.payment}`);
let tutionfee = tutionfees[answer.courses];
let paymentAmount = parseFloat(paymentMethod.amount);
if (tutionfee === paymentAmount) {
    console.log(`Congratulation, you have successfully enrolled in ${answer.courses} `);
    let ans = await inquirer.prompt([
        {
            name: 'select',
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['view status', 'Exit'],
        }
    ]);
    if (ans.select === "view status") {
        console.log("Status");
        console.log(`Student Name: ${answer.students} `);
        console.log(`Student ID ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution fees paid: ${paymentAmount}`);
        console.log(`Balance: ${mybalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("Invalid Amount");
}
