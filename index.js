// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) { //taking into 2 parameters
  const task = { //creating a variable OBJ in a function
    title: title, // first obj.key is equivalent to the first parameter
    description: description, //second.obj key is equivalent to second parameter
    complete: false, //boolean value of third obj key

    //creating a function to pass when a task is not completed. Checks using the boolean
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
    },
    //Creating a function to change the boolean value of a completed task to true
    markCompleted: function () { // marks the provided task as completed
      this.complete = true
    }
  };
  return task;
}

//prints outthe provided task's details


//creating new task variable assigning value to the first and second parameter of newTask
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2]; //rather then having individual arrays, you are using an object to group together

task1.logState(); // Clean Cat litter has not been completed
task1.markCompleted(); //when the task is completed, we are calling the markComplete function
task1.logState(); // Clean Cat litter has been completed

console.log(tasks);

// Accessing properties or methods of our tasks is as simple as writing code like this:
task1.title
task1.markCompleted();

