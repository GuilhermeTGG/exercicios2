import PromptSync from "prompt-sync";

const prompt = PromptSync();

let candidate1 = 0;
let candidate2 = 0;
let candidate3 = 0;
let blank = 0;
let nuled = 0;
let age;

let answer = prompt("Start voting program?").toLowerCase().trim();
while (answer === "yes") {

function votePermissions(_yearUser) {
    if (_yearUser >= 18 && _yearUser < 70) {
      return "REQUIRED";
    } else if (_yearUser < 16) {
      return "DENIED";
    } else {
      return "OPTIONAL";
    }
  }

  function election(autorization, vote) {
    if (autorization === "DENIED") {
      return console.log("You are not allowed to vote this election.");
    }
  
    if (vote === 1) {
      candidate1++;
    } else if (vote === 2) {
      candidate2++;
    } else if (vote === 3) {
      candidate3++;
    } else if (vote === 4) {
      blank++;
    } else if (vote === 5) {
      nuled++;
    }
  }

age = +prompt("How old are you?");

let choice = +prompt("What is your choice for the election?");

election(votePermissions(age), choice);

answer = prompt("Someone else to vote?").toLowerCase().trim();
}