#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
        {
                name: "pin",
                message: "Enter your 4 digit pinCode",
                type: "number"
         },
    ]);
     //  1234      === 1234
    if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!!!!");

   let operationAns = await inquirer.prompt([
         {
                name: "operation",
                message: " Please select one option",
                type: "list",
                choices: ["withdraw","fastcash","check balance" ]
         },
    ]);
    
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
        {         
                name: "amount",
                message:"enter your amount",
                type: "number"
        },
     ]);
          
            // =, -=, +=  
     if   (amountAns.amount <= myBalance){
        myBalance -= amountAns.amount;
    // Use template literals
        console.log(`Your remaining balance is: ${myBalance}`);        
     }  else {
       
        console.log(`Insufficient Balance!!!!`);
     }
   } else if (operationAns.operation === "check balance") {
          console.log(`Your current balance is: ${myBalance}`)
   }
    // Homewrok # 2 Add Fastcash
   else  if (operationAns.operation === "fastcash") {
        let amountAns = await inquirer.prompt([
        {      
                name: "amount",
                message:"please select amount",
                type: "list",
                choices: [10000, 15000, 20000, 30000, 40000],
         },  
    ]);    
       
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
 } 
} else {
    console.log("Incorrect pin code!!!!!!")
}