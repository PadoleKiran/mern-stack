// ======================
// Daily Goals Tracker - JavaScript Skeleton
// ======================

// 1. SELECT IMPORTANT ELEMENTS FROM THE DOM
// ----------------------------------------
// TODO: Use document.getElementById to select:
// - goalInput (text input)
// - prioritySelect (select box)
// - addGoalBtn (button)
// - goalList (ul where we will add <li>)
// - totalGoalsSpan (span showing total goals)
// - completedGoalsSpan (span showing completed goals)

// let total_goals = document.getElementById("total-goals");
// let completed_goals = document.getElementById("completed-goals");
// let goal_input = document.getElementById("goal-input");
// let priority_select = document.getElementById("priority-select");
// let add_goal_btn = document.getElementById("add-goal-btn");
// let goal_list = document.getElementById("goal-list");

const goalInput = document.getElementById("goal-input");
const prioritySelect = document.getElementById("priority-select");
const addGoalBtn = document.getElementById("add-goal-btn");
const goalList = document.getElementById("goal-list");
const totalGoalsSpan = document.getElementById("total-goals");
const completedGoalsSpan = document.getElementById("completed-goals");


// 2. ATTACH EVENT LISTENER TO THE "ADD GOAL" BUTTON
// -------------------------------------------------
// TODO: Add a "click" event listener on addGoalBtn.
// When the button is clicked, we will call handleAddGoal function.

addGoalBtn.addEventListener("click", handleAddGoal);

// 3. HANDLE ADD GOAL
// ------------------
// This function will:
//  - Read the text and priority from the inputs
//  - Validate the input
//  - Create a new <li> element
//  - Add "Done" and "Delete" buttons
//  - Append the <li> to the list
//  - Clear the input
//  - Update stats

function handleAddGoal() {

    // read value from priority select
    const priorityValue = prioritySelect.value;
    // read value from goal input
    const goalValue = goalInput.value.trim();

    //validate the input for priority 
    if (goalValue === "") {
        alert("Please enter a goal.");
        return;
    }   

    // Create a new <li> element
    // const livar = document.createElement("li");
    // livar.classList.add("goal-item");                     // mistakes

    // Add "Done" and "Delete" buttons
    // const mainDivVar = document.createElement("div");
    // mainDivVar.classList.add("goal-main");

    const tagSpan = document.createElement("span");
tagSpan.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
tagSpan.classList.add("goal-tag");

    // Append the <li> to the list
    // goalList.appendChild(livar);                          // mistakes

    // Clear the input
    // goalInput.value = "";
    // Update stats
    updateStats();

    // 3.1 READ VALUES FROM INPUTS
    // TODO: Get value of goalInput (goal text)

    // TODO: Get value of prioritySelect (priority: low/medium/high)

    const goalText = goalInput.value.trim();      // TODO: replace empty string with real value
    

    const priority = prioritySelect.value;      // TODO: replace empty string with real value

    // 3.2 BASIC VALIDATION
    // If goalText is empty (""), we don't want to add an empty goal.
    // TODO: If goalText is empty, show alert and return.

    // if (goalText === "") {
        // alert("Please enter a goal.");            // wrong
    //     return;
    // }


    // 3.3 CREATE <li> ELEMENT FOR THE NEW GOAL
    // TODO: Use document.createElement to create a "li"
    const li = document.createElement("li"); // TODO: replace null with created li

    // Add a class name for styling (goal-item)
    // TODO: Add class "goal-item"
    li.classList.add("goal-item");


    // 3.4 CREATE INNER STRUCTURE (TITLE + PRIORITY + BUTTONS)
    // We will create:
    // <div class="goal-main"> ... </div>
    // <div class="goal-actions"> ... </div>

    // TODO: Create a div for "goal-main"
    const mainDiv = document.createElement("div"); // TODO
    const goalActions = document.createElement("div");
    // TODO: Create a span for goal title (class "goal-title")
    const titleSpan = document.createElement("span"); // TODO
    // TODO: Set textContent of titleSpan to goalText
    titleSpan.textContent = goalText;
    titleSpan.classList.add("goal-title");


    // TODO: Create a span for priority badge (class "goal-tag" + specific class)
    const tagSpan = document.createElement("span"); // TODO
    // TODO: Set textContent to priority (e.g. "High", "Medium", "Low")
    tagSpan.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    tagSpan.classList.add("goal-tag");


    // 3.5 SET PRIORITY COLOR CLASS
    // For priority, we will use:
    //  - "goal-tag--low"
    //  - "goal-tag--medium"
    //  - "goal-tag--high"
    // TODO: Use if/else to add the correct class based on "priority" value.
    if (priority === "low") {
        tagSpan.classList.add("goal-tag--low");
    } else if (priority === "medium") {
        tagSpan.classList.add("goal-tag--medium");
    } else if (priority === "high") {
        tagSpan.classList.add("goal-tag--high");
    }


    // TODO: Append titleSpan and tagSpan inside mainDiv
    mainDiv.appendChild(titleSpan);
    mainDiv.appendChild(tagSpan);
   

    // 3.6 CREATE BUTTONS ("Done" and "Delete")
    // TODO: Create a div for "goal-actions"
    const actionsDiv = document.createElement("div"); // TODO
    actionsDiv.classList.add("goal-actions");


    // TODO: Create "Done" button, add class "goal-btn" and "done-btn"
    const doneBtn = document.createElement("button"); // TODO
    doneBtn.textContent = "Done";
    doneBtn.classList.add("goal-btn", "done-btn");

    // TODO: Create "Delete" button, add class "goal-btn" and "delete-btn"
    const deleteBtn = document.createElement("button"); // TODO
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("goal-btn", "delete-btn");

    // 3.7 ATTACH EVENT LISTENERS TO THE BUTTONS
    // When "Done" is clicked:
    //  - Toggle the "completed" class on <li>
    //  - Then call updateStats()
    // TODO: Add click listener for doneBtn
    doneBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
        updateStats();
    });

   


    // When "Delete" is clicked:
    //  - Remove the <li> from the DOM
    //  - Then call updateStats()
    // TODO: Add click listener for deleteBtn


      deleteBtn.addEventListener("click", function() {
        li.remove();
        updateStats();
    });

    // 3.8 Put buttons inside actionsDiv
    // TODO: append doneBtn and deleteBtn into actionsDiv

    actionsDiv.appendChild(doneBtn);
    actionsDiv.appendChild(deleteBtn);

    // 3.9 Put mainDiv and actionsDiv inside li
    // TODO: append mainDiv and actionsDiv into li

    li.appendChild(mainDiv);
    li.appendChild(actionsDiv);

    // 3.10 ADD li TO THE UL (goalList)
    // TODO: Append li to goalList

    goalList.appendChild(li);

    // 3.11 CLEAR THE INPUT AFTER ADDING
    // TODO: Set goalInput.value to empty string ""

    goalInput.value = "";

    // 3.12 UPDATE STATS
    // TODO: Call updateStats() here
    updateStats();
}


// 4. UPDATE STATS (Total and Completed counts)
// --------------------------------------------
// This function will:
//  - Count total goals (all li elements)
//  - Count completed goals (li elements with class "completed")
//  - Update the spans in the stats section



function updateStats() {
    // 4.1 GET ALL GOAL ITEMS
    // TODO: Get all goal items
    // const allItems = []; // TODO: replace [] with real NodeList
    const allItems = document.querySelectorAll("#goal-list .goal-item");


    // 4.2 COUNT TOTAL GOALS
    const total = allItems.length; // total count of goals

    // 4.3 COUNT COMPLETED GOALS
    // Hint: you can use a simple loop

    let completedCount = 0; // TODO: fill this using a loop

    for(let items of allItems){
        if(items.classList.contains("completed")){
            completedCount++;
        }
    }

    // 4.4 UPDATE THE DOM
    totalGoalsSpan.textContent = total;
    completedGoalsSpan.textContent = completedCount;    


}


// // ======================
// // Daily Goals Tracker - JavaScript Skeleton
// // ======================

// // 1. SELECT IMPORTANT ELEMENTS FROM THE DOM
// // ----------------------------------------
// const goalInput = document.getElementById("goal-input");
// const prioritySelect = document.getElementById("priority-select");
// const addGoalBtn = document.getElementById("add-goal-btn");
// const goalList = document.getElementById("goal-list");
// const totalGoalsSpan = document.getElementById("total-goals");
// const completedGoalsSpan = document.getElementById("completed-goals");


// // 2. ATTACH EVENT LISTENER TO THE "ADD GOAL" BUTTON
// // -------------------------------------------------
// addGoalBtn.addEventListener("click", handleAddGoal);

// // 3. HANDLE ADD GOAL
// // ------------------
// function handleAddGoal() {
//     // 3.1 READ VALUES FROM INPUTS
//     const goalText = goalInput.value.trim();
//     const priority = prioritySelect.value;

//     // 3.2 BASIC VALIDATION
//     if (goalText === "") {
//         alert("Please enter a goal.");
//         return;
//     }

//     // 3.3 CREATE <li> ELEMENT FOR THE NEW GOAL
//     const li = document.createElement("li");
//     li.classList.add("goal-item");

//     // 3.4 CREATE INNER STRUCTURE (TITLE + PRIORITY + BUTTONS)
//     const mainDiv = document.createElement("div");
//     mainDiv.classList.add("goal-main");

//     // Create a span for goal title
//     const titleSpan = document.createElement("span");
//     titleSpan.textContent = goalText;
//     titleSpan.classList.add("goal-title");

//     // Create a span for priority badge
//     const tagSpan = document.createElement("span");
//     tagSpan.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
//     tagSpan.classList.add("goal-tag");

//     // 3.5 SET PRIORITY COLOR CLASS
//     if (priority === "low") {
//         tagSpan.classList.add("goal-tag--low");
//     } else if (priority === "medium") {
//         tagSpan.classList.add("goal-tag--medium");
//     } else if (priority === "high") {
//         tagSpan.classList.add("goal-tag--high");
//     }

//     // Append titleSpan and tagSpan inside mainDiv
//     mainDiv.appendChild(titleSpan);
//     mainDiv.appendChild(tagSpan);

//     // 3.6 CREATE BUTTONS ("Done" and "Delete")
//     const actionsDiv = document.createElement("div");
//     actionsDiv.classList.add("goal-actions");

//     const doneBtn = document.createElement("button");
//     doneBtn.textContent = "Done";
//     doneBtn.classList.add("goal-btn", "done-btn");

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("goal-btn", "delete-btn");

//     // 3.7 ATTACH EVENT LISTENERS TO THE BUTTONS
//     doneBtn.addEventListener("click", function() {
//         li.classList.toggle("completed");
//         updateStats();
//     });

//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//         updateStats();
//     });

//     // 3.8 Put buttons inside actionsDiv
//     actionsDiv.appendChild(doneBtn);
//     actionsDiv.appendChild(deleteBtn);

//     // 3.9 Put mainDiv and actionsDiv inside li
//     li.appendChild(mainDiv);
//     li.appendChild(actionsDiv);

//     // 3.10 ADD li TO THE UL (goalList)
//     goalList.appendChild(li);

//     // 3.11 CLEAR THE INPUT AFTER ADDING
//     goalInput.value = "";

//     // 3.12 UPDATE STATS
//     updateStats();
// }


// // 4. UPDATE STATS (Total and Completed counts)
// // --------------------------------------------
// function updateStats() {
//     // 4.1 GET ALL GOAL ITEMS
//     const allItems = document.querySelectorAll("#goal-list .goal-item");

//     // 4.2 COUNT TOTAL GOALS
//     const total = allItems.length;

//     // 4.3 COUNT COMPLETED GOALS
//     let completedCount = 0;
//     for (let i = 0; i < allItems.length; i++) {
//         if (allItems[i].classList.contains("completed")) {
//             completedCount++;
//         }
//     }

//     // 4.4 UPDATE THE DOM
//     totalGoalsSpan.textContent = total;
//     completedGoalsSpan.textContent = completedCount;
// }