#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 100000;
let mypin = 2712;

let pinAnswer = await inquirer.prompt(
    [
       {
        name : "pin",
        message : "enter your pin",
        type : "number",
       }
    ]
)

if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!")

         
    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "please select an option",
                type : "list",
                choices : ["withdraw", "check balance", "fast cash"]

            }
        ]
    )
    if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message : "please select your amount",
                    type : "list",
                    choices : [500, 1000, 2000, 3000, 5000, 7000, 10000]
                }
            ]
        );
        myBalance -= amountAns.amount;
    }
        console.log(`your remaining balance is :${myBalance}`) 

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message : "enter your amount",
                    type : "number",
                }
            ]
        );
        myBalance -= amountAns.amount;

    if (myBalance < 100000) {
        console.log(`your remaining balance is :${myBalance}`)
    }
    
    } else if(operationAns.operation === "check balance")
    console.log(`your current balance is :${myBalance}`);
}
if(pinAnswer.pin != mypin) {
    console.log("your pin is incorrect");
}



