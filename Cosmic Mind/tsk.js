   // Get references to HTML elements
   const tableBody = document.querySelector("tbody");
   const submitButton = document.getElementById("submit-button");
   const completionMessage = document.getElementById("completion-message");
   
   // Define an array of mental health tasks for 21 days
   const mentalHealthTasks = [
       "Gratitude Journaling",
       "Deep Breathing",
       "Mindful Eating",
       "Digital Detox",
       "Self-Compassion",
       "Nature Walk",
       "Meditation",
       "Reach Out",
       "Unplug Before Bed",
       " Random Act of Kindness",
       " Creative Outlet",
       "Set Boundaries",
       " Gratitude Visit",
       " Positive Affirmations",
       "Learn Something New",
       "Declutter",
       "Reflect on Values",
       " Mindful Movement",
       "Seek Support",
       "Visualization",
       "Self-Care Day",

       // Add tasks for all 21 days
   ];
   
   // Initialize an array to track completed tasks
   const completedTasks = new Array(mentalHealthTasks.length).fill(false);
   
   // Function to update the table with completed tasks
   function updateTable() {
       tableBody.innerHTML = ""; // Clear the table
       mentalHealthTasks.forEach((task, index) => {
           const row = document.createElement("tr");
           const dayCell = document.createElement("td");
           const taskCell = document.createElement("td");
           const completedCell = document.createElement("td");
           const checkbox = document.createElement("input");
           checkbox.type = "checkbox";
           checkbox.checked = completedTasks[index];
   
           dayCell.textContent = `Day ${index + 1}`;
           taskCell.textContent = task;
   
           checkbox.addEventListener("change", () => {
               completedTasks[index] = checkbox.checked;
               if (checkbox.checked) {
                   completionMessage.textContent = `You successfully completed the task for Day ${index + 1}.`;
               } else {
                   completionMessage.textContent = "";
               }
           });
   
           completedCell.appendChild(checkbox);
           row.appendChild(dayCell);
           row.appendChild(taskCell);
           row.appendChild(completedCell);
   
           tableBody.appendChild(row);
       });
   }
   
   // Add event listener to the submit button
   submitButton.addEventListener("click", () => {
       // Send the completedTasks array to your server or perform further actions
       console.log("Completed Tasks:", completedTasks);
   });
   
   // Initialize the table
   updateTable();
   