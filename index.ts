import inquirer from "inquirer";
const randomNumber =18;
const answer = await inquirer.prompt([
    {
        name: "userage",
   type: "number",
message: "enter your age",
 }
])
if (answer.userage  >= randomNumber ) {
    console.log("congratulations you are allowed");

}
else {
    console.log("sorry you are underage");
    
};
