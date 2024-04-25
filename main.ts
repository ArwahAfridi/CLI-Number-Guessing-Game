import inquirer from "inquirer";

let myBalance = 10000; // Dollar


let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
{
    name: "pin",
    message: "enter your pin",
    type: "number",
}
 ]   
);
//   12345   === 1234 - false
if (pinAnswer.pin === myPin){
    console.log("correct pin code !!!")

    let operationsAns = await inquirer.prompt(
[
   {
    name: "operations",
    message: "please select option",
    type: "list",
    choices: ["withdraw", "check balance"]

   }
]
    );

    console.log(operationsAns);
    
    if(operationsAns.operation === "withdraw") {
let amountAns = await inquirer.prompt(
    [
        {
            name: "amount",
            message: "enter your amount",
            type:"number",

        }
    ]
)
// =, -=
     myBalance -= amountAns.amont;

     console.log("your remaining balance is: " + myBalance)

    }else if(operationsAns.operation === "check balance"){
        console.log("your balance is: " + myBalance)
    }

inquirer.prompt
}
else{
    console.log("Incorrect pin number");
}

