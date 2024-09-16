# Task Management App

This is a simple React-based Task Management App that allows users to add tasks, mark them as done or undone, and delete tasks from the list.

## Features

- **Add Task**: Users can add tasks by entering a task name and clicking the 'Add task' button.
- **Mark as Done/Undone**: Tasks can be toggled between 'done' and 'todo' status by clicking the button next to each task.
- **Delete Task**: Tasks can be deleted by clicking the 'Delete task' button.

## How to Run

1. **Install dependencies**:  
   Run the following command to install the required dependencies:
   ```bash
   npm install

    Run the project:
    Start the application using:

    bash

npm start

Build the project (optional):
If you want to build the app for production, run:

bash

    npm run build

File Structure

    App.js: Main entry point, renders the Inputbar component.
    Inputbar.js: Contains the input field to add tasks and manages the task list.
    List.js: Renders the list of tasks using the Item component.
    Item.js: Represents a single task with the ability to toggle its status and delete it.
    Delet.svg: Icon for the delete button.

Technologies Used

    React: A JavaScript library for building user interfaces.
    clsx: A utility for conditionally joining class names together.
    useState: A React hook to manage state within functional components.
    useCallback: A React hook to memoize callback functions.

Future Enhancements

    Add the ability to edit task names.
    Implement task persistence using local storage or a database.
    Add additional styling and animations.
