document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // Add Task
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (!taskText) return;
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="complete">✔</button>
          <button class="delete">✖</button>
        </div>
      `;
      taskList.appendChild(listItem);
      taskInput.value = "";
    });
  
    // Task Actions
    taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        e.target.closest("li").remove();
      } else if (e.target.classList.contains("complete")) {
        const task = e.target.closest("li");
        task.classList.toggle("completed");
      }
    });
  });
  