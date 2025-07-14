/*
* Nicole Rodriguez
* CS81 Summer 2025
* Module 6b Homework
* 7/13/2025
*/

//Define constructor PersonalAssistant
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = "neutral";
}

//Function that adds tasks to task array
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task); //add task
  console.log("Task added: " + task);
  //Updates the mood depending on how many tasks
  this.updateMood();
};

//Function that reports mood
PersonalAssistant.prototype.reportMood = function() {
  console.log("Mood: " + this.mood);
};

//Function that reports tasks
PersonalAssistant.prototype.reportTasks = function() {
  console.log("You have " + this.tasks.length + " tasks left.");
};

//Function that removes and logs a task
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) { //check for tasks
    // Remove the first task from the tasks array
    let completedTask = this.tasks.shift();
    //Log the completed task
    console.log("Completing task: " + completedTask);
    // Update mood based on the number of tasks remaining
    this.updateMood();
  } else {
    //Log if there are no tasks left
    console.log("No tasks to complete.");
  }
};

//update the mood
PersonalAssistant.prototype.updateMood = function() {
  if (this.tasks.length === 0) {
    this.mood = "accomplished";
  } else if (this.tasks.length < 3) {
    this.mood = "productive";
  } else {
    this.mood = "overwhelmed";
  }
};

// Create a new PersonalAssistant
let myAssistant = new PersonalAssistant("C3PO");

// Make the personal assistant introduce itself
console.log("Hi! I'm " + myAssistant.name + ", your assistant.");

// Add tasks
myAssistant.addTask("Finish JS homework");
myAssistant.addTask("Move furniture at night");
myAssistant.addTask("Feed Cat");

// Report mood
myAssistant.reportMood();

// Complete tasks
myAssistant.completeTask();
myAssistant.completeTask();

//Update mood
myAssistant.reportMood();
