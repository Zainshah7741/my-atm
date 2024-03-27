#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let accBal: number = 10000;
let accPin: number = 1234;
console.log(
  chalk.bold.italic.yellowBright.underline("\n\t\t______Welcome To ATM______\n")
);
const ansPin = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "ENTER PIN : ",
});

//////////////Transaction Options/////////
///if else statement
if (ansPin.pin === accPin) {
  let atmOpt = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message: "Select a transaction",
      choices: ["Fast Cash", "Withdraw", "Balance Inquiry"],
    },
  ]);
/////Nested if else
//Fast Cash Options
  if (atmOpt.options === "Fast Cash") {
    let fastAmount = await inquirer.prompt([
      {
        name: "amountOpt",
        type: "list",
        message: "Select the amount for your fast cash transaction",
        choices: [1000, 2000, 5000, 10000, "Other"],
      },
    ]);
    if (fastAmount.amountOpt == 1000) {
      if (1000 <= accBal) {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t  ${chalk.bold.green(
            "Transaction Successful"
          )}\n\n\t\t${chalk.bold(
            "Transaction Amount"
          )} : ${chalk.bold.red.underline("1000")}  \n\t\t${chalk.bold(
            "Available Balance : "
          )}${chalk.bold.yellow.underline(
            (accBal -= 1000)
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t   ${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t\t  ${chalk.bold(
            "INSUFFICIENT BALANCE!"
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      }
    } else if (fastAmount.amountOpt == 2000) {
      if (2000 <= accBal) {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t  ${chalk.bold.green(
            "Transaction Successful"
          )}\n\n\t\t${chalk.bold(
            "Transaction Amount"
          )} : ${chalk.bold.red.underline("2000")}  \n\t\t${chalk.bold(
            "Available Balance : "
          )}${chalk.bold.yellow.underline(
            (accBal -= 2000)
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t   ${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t\t  ${chalk.bold(
            "INSUFFICIENT BALANCE!"
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      }
    } else if (fastAmount.amountOpt == 5000) {
      if (5000 <= accBal) {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t  ${chalk.bold.green(
            "Transaction Successful"
          )}\n\n\t\t${chalk.bold(
            "Transaction Amount"
          )} : ${chalk.bold.red.underline("5000")}  \n\t\t${chalk.bold(
            "Available Balance : "
          )}${chalk.bold.yellow.underline(
            (accBal -= 5000)
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t   ${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t\t  ${chalk.bold(
            "INSUFFICIENT BALANCE!"
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      }
    } else if (fastAmount.amountOpt == 10000) {
      if (10000 <= accBal) {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t  ${chalk.bold.green(
            "Transaction Successful"
          )}\n\n\t\t${chalk.bold(
            "Transaction Amount"
          )} : ${chalk.bold.red.underline("10000")}  \n\t\t${chalk.bold(
            "Available Balance : "
          )}${chalk.bold.yellow.underline(
            (accBal -= 10000)
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t   ${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t\t  ${chalk.bold(
            "INSUFFICIENT BALANCE!"
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      }
    } else if (fastAmount.amountOpt == "Other") {
      let withdrawAmount = await inquirer.prompt({
        name: "withdrawalAmt",
        type: "number",
        message: "Enter the amount you want to withdraw : ",
      });
      if (
        withdrawAmount.withdrawalAmt >= 500 &&
        withdrawAmount.withdrawalAmt <= accBal
      ) {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t  ${chalk.bold.green(
            "Transaction Successful"
          )}\n\n\t\t${chalk.bold(
            "Transaction Amount"
          )} : ${chalk.bold.red.underline(
            withdrawAmount.withdrawalAmt
          )}  \n\t\t${chalk.bold(
            "Available Balance : "
          )}${chalk.bold.yellow.underline(
            (accBal -= withdrawAmount.withdrawalAmt)
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else if (isNaN(withdrawAmount.withdrawalAmt)) {
        console.log(
          `\n\t\t    ${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t ${chalk.bold(
            "Please enter the correct amount!"
          )}\n\n\t     ${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else if (withdrawAmount.withdrawalAmt < 500) {
        console.log(
          `\n\t\t\t    ${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t\t${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t${chalk.bold(
            `Please enter your amount equal to or more than : ${chalk.bold.yellow.underline(
              "500"
            )}`
          )}\n\n\t\t     ${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      } else {
        console.log(
          `\n\t\t\t${chalk.bold.underline(
            "WITHDRAWAL"
          )}\n\n\t\t   ${chalk.bold.red.underline(
            "TRANSACTION FAILED"
          )}\n\t\t  ${chalk.bold(
            "INSUFFICIENT BALANCE!"
          )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
        );
      }
    }
    //WITHDRAW
  } else if (atmOpt.options === "Withdraw") {
    let withdrawAmount = await inquirer.prompt({
      name: "withdrawalAmt",
      type: "number",
      message: "Enter the amount you want to withdraw : ",
    });
    if (
      withdrawAmount.withdrawalAmt >= 500 &&
      withdrawAmount.withdrawalAmt <= accBal
    ) {
      console.log(
        `\n\t\t\t${chalk.bold.underline(
          "WITHDRAWAL"
        )}\n\n\t\t  ${chalk.bold.green(
          "Transaction Successful"
        )}\n\n\t\t${chalk.bold(
          "Transaction Amount"
        )} : ${chalk.bold.red.underline(
          withdrawAmount.withdrawalAmt
        )}  \n\t\t${chalk.bold(
          "Available Balance : "
        )}${chalk.bold.yellow.underline(
          (accBal -= withdrawAmount.withdrawalAmt)
        )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
      );
    } else if (isNaN(withdrawAmount.withdrawalAmt)) {
      console.log(
        `\n\t\t    ${chalk.bold.underline(
          "WITHDRAWAL"
        )}\n\n\t\t${chalk.bold.red.underline(
          "TRANSACTION FAILED"
        )}\n\t ${chalk.bold(
          "Please enter the correct amount!"
        )}\n\n\t     ${chalk.italic.underline("Thank You For Using ATM!")}`
      );
    } else if (withdrawAmount.withdrawalAmt < 500) {
      console.log(
        `\n\t\t\t    ${chalk.bold.underline(
          "WITHDRAWAL"
        )}\n\n\t\t\t${chalk.bold.red.underline(
          "TRANSACTION FAILED"
        )}\n\t${chalk.bold(
          `Please enter your amount equal to or more than : ${chalk.bold.yellow.underline(
            "500"
          )}`
        )}\n\n\t\t     ${chalk.italic.underline("Thank You For Using ATM!")}`
      );
    } else {
      console.log(
        `\n\t\t\t${chalk.bold.underline(
          "WITHDRAWAL"
        )}\n\n\t\t   ${chalk.bold.red.underline(
          "TRANSACTION FAILED"
        )}\n\t\t  ${chalk.bold(
          "INSUFFICIENT BALANCE!"
        )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
      );
    }//BALANCE INQUIRY
  } else if (atmOpt.options === "Balance Inquiry") {
    console.log(
      `\n\t\t   ${chalk.bold.underline(
        "BALANCE INQUIRY"
      )}\n\n\t\t   ${chalk.bold("BALANCE : ")}${chalk.bold.yellow(
        accBal
      )}\n\n\t\t${chalk.italic.underline("Thank You For Using ATM!")}`
    );
  }
} else {
  console.log(
    `\n\t\t\t  ${chalk.bold.underline(
      "ATM"
    )}\n\n\t\t      ${chalk.bold.red.underline(
      "INVALID PIN"
    )}\n\n`
  );
}